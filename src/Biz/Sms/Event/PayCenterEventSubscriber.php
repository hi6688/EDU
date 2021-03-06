<?php

namespace Biz\Sms\Event;

use AppBundle\Common\StringToolkit;
use Biz\Sms\Service\SmsService;
use Biz\Sms\SmsType;
use Codeages\Biz\Framework\Event\Event;
use Codeages\PluginBundle\Event\EventSubscriber;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class PayCenterEventSubscriber extends EventSubscriber implements EventSubscriberInterface
{
    /**
     * {@inheritdoc}
     */
    public static function getSubscribedEvents()
    {
        return [
            'order.pay.success' => 'onPaySuccess',
        ];
    }

    public function onPaySuccess(Event $event)
    {
        $order = $event->getSubject();
        $targetType = $event->getArgument('targetType');
        $smsType = 'sms_'.$targetType.'_buy_notify';

        if ($this->getSmsService()->isOpen($smsType)) {
            $userId = $order['userId'];
            $parameters = [];
            $parameters['order_title'] = $order['title'];
            $parameters['order_title'] = StringToolkit::cutter($parameters['order_title'], 20, 15, 4);

            if ('coin' == $targetType) {
                $parameters['totalPrice'] = $order['amount'].'元';
            } else {
                $parameters['totalPrice'] = $order['totalPrice'].'元';
            }

            $this->getSmsService()->smsSend($smsType, [$userId], SmsType::BUY_NOTIFY, $parameters);
        }
    }

    /**
     * @return SmsService
     */
    protected function getSmsService()
    {
        return $this->getBiz()->service('Sms:SmsService');
    }
}
