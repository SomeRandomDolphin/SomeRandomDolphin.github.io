import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'secondary',
  'label',
  'none',
}
enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type IconButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'label',
      disabled: buttonDisabled,
      iconClassName,
      size = 'base',
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={clsxm(
          'button inline-flex items-center justify-center',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-50',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
          'border-2 border-black',
          'text-black text-sm md:text-base',

          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[44px] min-w-[44px] p-2 md:min-h-[48px] md:min-w-[48px] md:p-2.5',
            ],
            size === 'base' && [
              'min-h-[36px] min-w-[36px] p-1 md:min-h-[40px] md:min-w-[40px] md:p-1.5',
            ],
            size === 'sm' && [
              'min-h-[32px] min-w-[32px] p-0.5 md:min-h-[36px] md:min-w-[36px] md:p-1',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          [
            variant === 'primary' && [
              'bg-primary-500',
              'hover:bg-primary-700',
              'active:bg-primary-800',
              'disabled:bg-primary-700 disabled:brightness-90 disabled:hover:bg-primary-700',
            ],
            variant === 'secondary' && [
              'bg-secondary-500',
              'hover:bg-secondary-700',
              'active:bg-secondary-800',
              'disabled:bg-secondary-700 disabled:brightness-90 disabled:hover:bg-secondary-700',
            ],
            variant === 'label' && [
              'bg-typo-white',
              'hover:bg-typo-label',
              'active:bg-typo-label',
              'active:bg-typo-label disabled:bg-typo-label disabled:brightness-95',
            ],
            variant === 'none' && [
              '!border-none',
              'bg-none text-base-primary',
              'hover:bg-none',
              'active:bg-none',
              'disabled:bg-none',
            ],
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className,
        )}
        {...rest}
      >
        {Icon && (
          <Icon className={clsxm('w-6 h-6 text-typo-primary', iconClassName)} />
        )}
      </button>
    );
  },
);

export default IconButton;
