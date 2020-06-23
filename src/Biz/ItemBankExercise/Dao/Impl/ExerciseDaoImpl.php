<?php

namespace Biz\ItemBankExercise\Dao\Impl;

use Biz\ItemBankExercise\Dao\ExerciseDao;
use Codeages\Biz\Framework\Dao\GeneralDaoImpl;

class ExerciseDaoImpl extends GeneralDaoImpl implements ExerciseDao
{
    protected $table = 'item_bank_exercise';

    public function updateCategoryByExerciseId($exerciseId, $fields)
    {
        $this->db()->update($this->table, $fields, ['id' => $exerciseId]);
    }

    public function getByQuestionBankId($questionBankId)
    {
        return $this->getByFields(['questionBankId' => $questionBankId]);
    }

    public function declares()
    {
        return [
            'timestamps' => ['createdTime', 'updatedTime'],
            'orderbys' => ['createdTime', 'seq'],
            'serializes' => [
                'teacherIds' => 'delimiter',
                'cover' => 'json',
            ],
            'conditions' => [
                'id = :id',
                'questionBankId = :questionBankId',
            ],
        ];
    }
}
