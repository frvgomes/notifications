/* eslint-disable prettier/prettier */
import { Content } from './content';

describe("Notification Content", () => {

    it('Deve ser possível criar uma notificação ', () => {
        const content = new Content('Você recebeu uma solicitação de amizade');

        expect(content).toBeTruthy();
    });

    it('Não deve ser possível criar uma notificação com menos de 5 caracteres', () => {
        expect(() => new Content("aaa")).toThrow();
    });

    it('Não deve ser possível criar uma notificação com mais de 240 caracteres', () => {
        expect(() => new Content("a".repeat(241))).toThrow();
    });

})

