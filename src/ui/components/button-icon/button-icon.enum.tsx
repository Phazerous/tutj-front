interface ButtonIconProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export class ButtonIconType {
  static readonly BACK = new ButtonIconType('back', {
    width: 20,
    height: 12,
    src: '/icons/back.svg',
    alt: 'Back Icon',
  });

  private constructor(
    readonly key: string,
    readonly imageProps: ButtonIconProps
  ) {}
}
