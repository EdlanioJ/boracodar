'use client';

import Image from 'next/image';
import { formatPhoneNumber } from '../utils';
import { ContactType } from '../types';

type ContactProps = {
  value: ContactType;
};
function Contact({ value }: ContactProps) {
  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        alt={`Avatar de ${value.name}`}
        src={value.avatarUrl}
        className="rounded-full"
        width={48}
        height={48}
      />
      <div className="flex flex-col justify-center p-0">
        <strong className="font-bold text-base text-gray-50">
          {value.name}
        </strong>
        <span className="text-xs text-[#8C8CBA]">
          {formatPhoneNumber(value.phoneNumber)}
        </span>
      </div>
    </div>
  );
}

type ContainerProps = {
  children: React.ReactNode;
};
function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col h-full gap-14 overflow-y-scroll overflow-x-hidden contact-scrollbar">
      {children}
    </div>
  );
}

type SectionProps = {
  children: React.ReactNode;
};
function Section({ children }: SectionProps) {
  return <div className="flex flex-row gap-10">{children}</div>;
}

type LabelProps = {
  label: string;
  color: string;
};
function Label({ color, label }: LabelProps) {
  return (
    <label
      style={{ '--color': color } as any}
      className="flex items-center justify-center  w-10 h-10 rounded-lg text-gray-50 bg-[var(--color)]"
    >
      <strong className="text-base font-bold ">{label}</strong>
    </label>
  );
}

type GroupProps = {
  children: React.ReactNode;
};
function Group({ children }: GroupProps) {
  return <ul className="flex flex-col gap-8">{children}</ul>;
}

type GroupItemProps = {
  children: React.ReactNode;
};
function GroupItem({ children }: GroupItemProps) {
  return <li className="list-none">{children}</li>;
}

Contact.Container = Container;
Contact.Section = Section;
Contact.Label = Label;
Contact.Group = Group;
Contact.GroupItem = GroupItem;
export default Contact;
