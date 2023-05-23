/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';



describe('Send Notification', () => {
    it('Deve ser possível criar uma notificação.', async () => {
        const notificationRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationRepository);

        const { notification } = await sendNotification.execute({
            category: 'social',
            content: 'Você recebeu uma nova solicitação de amizade',
            recipientId: "teste"
        });

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notificationRepository.notifications[0]).toEqual(notification)
    });
});
