/* eslint-disable prettier/prettier */


import { Content } from "./content";
import { Notification } from "./notification";


describe("Notification", () => {

    it('Deve ser possível criar uma notificação ', () => {
        const notification = new Notification({
            content: new Content("Nova solicitação de amizade"),
            category: "social",
            recipientId: "examplo-id",
        });

        expect(notification).toBeTruthy();
    });



})

