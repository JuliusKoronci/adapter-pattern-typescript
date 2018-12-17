import { Mailer, MailerArguments } from './MailerInterface';

/**
 * Adapter for YMAIL
 */
export class YahooMailer implements Mailer {
    public sendMail =({ to, cc, bcc, messageText, messageHtml }: MailerArguments) => {
        // send via yahoo implementation of the mailer
    };
}