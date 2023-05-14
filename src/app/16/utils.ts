import { labelColors } from './data';
import { ContactType } from './types';

export function formatPhoneNumber(str: string) {
  let cleaned = ('' + str).replace(/\D/g, '');

  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{2})(\d{4})(\d{3})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  return null;
}

export function orderContact(contacts: ContactType[]) {
  const obj: {
    [key: string]: {
      contacts: ContactType[];
      labelColor: string;
    };
  } = {};
  contacts.forEach((contact) => {
    const key = contact.name[0].toLocaleUpperCase();
    if (!obj[key]) {
      const labelColor = labelColors[key];
      obj[key] = { contacts: [], labelColor };
    }
    obj[key].contacts.push(contact);
  });

  return obj;
}
