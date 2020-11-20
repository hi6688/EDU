<?php

namespace AppBundle\Controller\Export;

use AppBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;

class ExportController extends BaseController
{
    public function tryExportAction(Request $request, $name, $limit)
    {
        $conditions = $request->query->all();
        $names = $request->query->get('names', [$name]);

        try {
            $batchExporter = $this->container->get('batch_exporter');
        } catch (\Exception $e) {
            return $this->createJsonResponse(['message' => $e->getMessage()]);
        }
        $response = ['success' => 1];

        $batchExporter->findExporter($names, $conditions);
        $counts = $batchExporter->getCount();

        if (!$batchExporter->canExport()) {
            $response = ['success' => 0, 'message' => 'export.not_allowed'];
        }

        $magic = $this->getSettingService()->get('magic');

        if (0 == count($counts)) {
            $response = ['success' => 0, 'message' => 'export.empty'];
        }

        if (empty($magic['export_allow_count'])) {
            $magic['export_allow_count'] = 10000;
        }

        if (max($counts) > $magic['export_allow_count'] && !empty($limit)) {
            $response = [
                'success' => 0,
                'message' => 'export.over.limit',
                'parameters' => ['exportAllowCount' => $magic['export_allow_count'], 'count' => max($counts)],
            ];
        }

        return $this->createJsonResponse($response);
    }

    public function preExportAction(Request $request, $name)
    {
        $conditions = $request->query->all();
        $names = $request->query->get('names', [$name]);
        $currentName = $request->query->get('name', $name);

        $batchExporter = $this->container->get('batch_exporter');
        $batchExporter->findExporter($names, $conditions);
        $result = $batchExporter->export($currentName);

        return $this->createJsonResponse($result);
    }

    public function exportAction(Request $request, $name, $type)
    {
        $fileNames = $request->query->get('fileNames');

        list($path, $name) = $this->container->get('batch_exporter')->exportFile($name, $fileNames);

        if (!file_exists($path)) {
            return $this->createJsonResponse(['success' => 0, 'message' => 'empty file']);
        }

        $headers = [
            'Content-Type' => 'application/msword',
            'Content-Disposition' => 'attachment; filename='.$name,
        ];

        return new BinaryFileResponse($path, 200, $headers);
    }

    protected function getSettingService()
    {
        return $this->createService('System:SettingService');
    }
}
