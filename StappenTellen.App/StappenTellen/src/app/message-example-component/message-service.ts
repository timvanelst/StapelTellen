import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class MessageService {
    private subject = new Subject<string>();

    sendMessage(message: string) {
        this.subject.next(message);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<string> {
        return this.subject.asObservable();
    }
}