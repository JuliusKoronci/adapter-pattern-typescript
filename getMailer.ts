import { Mailer } from "./MailerInterface";
import { GoogleMailer } from "./GoogleMailer";
import { YahooMailer } from "./YahooMailer";

export enum MAILERS {
    GOOGLE = 'GOOGLE',
    YAHOO = 'YAHOO',
}

/**
 * Get a mailer adapter
 * 
 * @param {string} mailer - prefered mailer to use, can come from a user config, global config etc.
 */
export const getMailer = (mailer: MAILERS = MAILERS.GOOGLE): Mailer => {
    switch (mailer) {
        case MAILERS.GOOGLE: {
            return new GoogleMailer();
        }
        case MAILERS.YAHOO: {
            return new YahooMailer();
        }
    }
}