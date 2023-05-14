'use client';

import contacts from '../data';
import { orderContact } from '../utils';

import Contact from './Contact';

export default function ContactList() {
  const orderedContacts = orderContact(contacts);

  return (
    <div className="px-10 pt-10 pb-5 h-[722px]">
      <Contact.Container>
        {Object.keys(orderedContacts)
          .sort()
          .map((key) => {
            return (
              <Contact.Section key={key}>
                <Contact.Label
                  label={key}
                  color={orderedContacts[key].labelColor}
                />
                <Contact.Group>
                  {orderedContacts[key].contacts.map((contact, contactKey) => (
                    <Contact.GroupItem key={`contact_${contactKey}`}>
                      <Contact value={contact} />
                    </Contact.GroupItem>
                  ))}
                </Contact.Group>
              </Contact.Section>
            );
          })}
      </Contact.Container>
    </div>
  );
}
