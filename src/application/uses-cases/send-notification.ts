import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

/* eslint-disable prettier/prettier */
interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification
}

@Injectable()
export class SendNotification {
    constructor(
        private notificationsRepository: NotificationsRepository
    ) { }
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        })

        await this.notificationsRepository.create(notification)

        return {
            notification,
        }

    }
}
