/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/createNotificationBody';
import { SendNotification } from 'src/application/uses-cases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification
  ) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, recipientId, content } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    })
    return {
      notification: NotificationViewModel.toHTTP(notification)
    }
  }
}