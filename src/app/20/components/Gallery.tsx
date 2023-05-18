import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

type GalleryProps = {
  children: React.ReactNode;
};
function Gallery({ children }: GalleryProps) {
  return (
    <div className="w-[800px] flex flex-col gap-[32px] mb-[40px]">
      {children}
    </div>
  );
}

type GroupProps = {
  children: React.ReactNode;
  variant?: 'row' | 'column';
};
function Group({ children, variant = 'row' }: GroupProps) {
  return (
    <div
      className={clsx('flex gap-[32px]', {
        'flex-col': variant === 'column',
        'flex-row': variant === 'row',
      })}
    >
      {children}
    </div>
  );
}

type FrameProps = {
  children: React.ReactNode;
  label: string;
  variant?: 'full' | 'vertical' | 'horizontal';
};
function Frame({ children, label, variant = 'horizontal' }: FrameProps) {
  return (
    <div className="group">
      <div
        className={clsx(
          'relative transition-all group-hover:border-[4px] group-hover:border-white group-hover:border-solid ',
          {
            'w-[384px] h-[284px]': variant === 'horizontal',
            'w-[384px] h-[600px]': variant === 'vertical',
            'w-[800px] h-[400px]': variant === 'full',
          }
        )}
      >
        {children}
        <div className="absolute flex opacity-0 group-hover:opacity-100 transition-all items-center h-[78px] w-full bottom-0 bg-abstract-card p-[24px]">
          <span className="text-[24px] leading-[30px]">{label}</span>
        </div>
      </div>
    </div>
  );
}

type PhotoProps = ImageProps;
function Photo({ alt, src, ...rest }: PhotoProps) {
  return (
    <Image
      alt={alt}
      src={src}
      fill
      className="w-auto h-auto object-cover"
      {...rest}
    />
  );
}

Gallery.Group = Group;
Gallery.Frame = Frame;
Gallery.Photo = Photo;
export default Gallery;
