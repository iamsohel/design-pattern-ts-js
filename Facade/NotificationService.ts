import { Connection } from './Connection';
import { Message } from './Message';
import { NotificationServer } from './NotificationServer';
export class NotificationService {
    send(message: string, target: string){
        let server  = new NotificationServer();
        let connection = server.connect('ip');
        let authToken = server.authenticate('appId', 'key');
        server.send(authToken, new Message(message), target)
        let msg = `send msg ${message} to ${target}`
        console.log(msg)
        connection.disconnect();
    }
}