'use client';

type Props = {
  text: string;
  hoverColor: string;
};

export default function Tag({ text, hoverColor }: Props) {
  return (
    <span
      className="font-roboto h-7 px-2 text-xs grid place-content-center rounded-full bg-zinc-900 text-gray-400 shadow-2xl hover:text-white hover:bg-[var(--hover-color)]"
      style={{ '--hover-color': hoverColor } as any}
    >
      {text}
    </span>
  );
}
