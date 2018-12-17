import React from 'react';
import { getMailer } from './getMailer';


/**
 * Dummy contact for to demonstrate adapter ussage
 */
export const ContactForm = () => (
    <form onSubmit={() => getMailer().sendMail({ to: 'jk@web-solutions.sk', messageText: "some messgae to be sent" })}>
        <input type="text" name="to" />
        <input type="text" name="cc" />
        <input type="text" name="bcc" />
        <textarea name="message"></textarea>
    </form>
);