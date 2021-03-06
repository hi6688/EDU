<?php

namespace Biz\Task\Job;

use AppBundle\Common\ArrayToolkit;
use Biz\AppLoggerConstant;
use Biz\Task\Strategy\CourseStrategy;
use Codeages\Biz\Framework\Event\Event;

class CourseTaskDeleteSyncJob extends AbstractSyncJob
{
    public function execute()
    {
        try {
            $taskId = $this->args['taskId'];
            $courseId = $this->args['courseId'];
            $copiedCourses = $this->getCourseDao()->findCoursesByParentIdAndLocked($courseId, 1);

            $copiedCourseIds = ArrayToolkit::column($copiedCourses, 'id');
            $copiedCourseMap = ArrayToolkit::index($copiedCourses, 'id');
            $copiedTasks = $this->getTaskDao()->findByCopyIdAndLockedCourseIds($taskId, $copiedCourseIds);
            foreach ($copiedTasks as $ct) {
                $this->deleteTask($ct['id'], $copiedCourseMap[$ct['courseId']]);
                $this->getCourseMemberService()->recountLearningDataByCourseId($ct['courseId']);
            }

            $this->getLogService()->info(AppLoggerConstant::COURSE, 'sync_when_task_delete', 'course.log.task.delete.sync.success_tips', ['taskId' => $taskId]);
        } catch (\Exception $e) {
            $this->getLogService()->error(AppLoggerConstant::COURSE, 'sync_when_task_delete', 'course.log.task.delete.sync.fail_tips', ['error' => $e->getMessage()]);
        }
    }

    private function deleteTask($taskId, $course)
    {
        $task = $this->getTaskDao()->get($taskId);
        $res = $this->createCourseStrategy($course)->deleteTask($task);
        $this->dispatchEvent('course.task.delete', new Event($task, ['user' => $this->biz['user']]));

        return $res;
    }

    private function getCourseMemberService()
    {
        return $this->biz->service('Course:MemberService');
    }

    /**
     * @param $course
     *
     * @return CourseStrategy
     */
    private function createCourseStrategy($course)
    {
        return $this->biz->offsetGet('course.strategy_context')->createStrategy($course['courseType']);
    }
}
