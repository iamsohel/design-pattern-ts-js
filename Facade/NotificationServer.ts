import { Message } from './Message';
import { AuthToken } from './AuthToken';
import { Connection } from './Connection';
export class NotificationServer {
    connect(ipAddress: string): Connection {
        return new Connection()
    }

    authenticate(appId: string, key: string): AuthToken{
        return new AuthToken()
    }

    send(authToken: AuthToken, message: Message, target: string): void {
        console.log("message send")
    }
}