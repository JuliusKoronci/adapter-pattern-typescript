export interface MailerArguments {
    to: string;
    cc?: string;
    bcc?: string;
    messageText: string;
    messageHtml?: string;
}

/**
 * Mailer Adapter interface
 */
export interface Mailer {
    sendMail: ({to,cc,bcc,messageText, messageHtml}: MailerArguments) => void;
}