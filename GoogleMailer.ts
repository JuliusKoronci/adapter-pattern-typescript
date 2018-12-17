import { Mailer, MailerArguments } from './MailerInterface';

/**
 * Adapter for GMAIL
 */
export class GoogleMailer implements Mailer {
    public sendMail = ({ to, cc, bcc, messageText, messageHtml }: MailerArguments) => {
        // send via google implementation of the mailer
    }
}