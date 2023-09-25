import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'secondary',
  'black',
  'label',
  'outline',
}

enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  textClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      size = 'base',
      variant = 'primary',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      textClassName,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-md',
          'focus:warning-none focus-visible:ring focus-visible:ring-blue-500',
          'transition-colors duration-75',
          'border-2 border-typo-primary',
          'text-typo-primary text-sm md:text-base font-semibold',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[42px] py-2 px-3 md:min-h-[48px] md:py-2.5 md:px-6',
            ],
            size === 'base' && [
              'min-h-[34px] py-1.5 px-2.5 md:min-h-[40px] md:py-[6px] md:px-5',
            ],
            size === 'sm' && [
              'min-h-[30px] py-[1px] px-2 md:min-h-[34px] md:py-[2px] md:px-4',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-500',
              'hover:bg-primary-600',
              'active:bg-primary-700',
              'disabled:bg-primary-700 disabled:brightness-90 disabled:hover:bg-primary-700',
            ],
            variant === 'secondary' && [
              'bg-secondary-500',
              'hover:bg-secondary-600',
              'active:bg-secondary-700',
              'disabled:bg-secondary-700 disabled:brightness-90 disabled:hover:bg-secondary-700',
            ],
            variant === 'label' && [
              'bg-typo-white',
              'hover:bg-typo-label hover:text-typo-white active:bg-typo-label',
              'active:bg-typo-label disabled:bg-typo-label disabled:text-white disabled:brightness-95',
            ],
            variant === 'outline' && [
              'bg-transparent text-typo-secondary border-typo-outline',
              'hover:text-typo-white hover:border-typo-label',
              'active:text-typo-white active:bg-typo-label disabled:bg-transparent disabled:text-typo-secondary disabled:border-typo-outline',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          'hover:bg-typo-label',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className,
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              [
                ['primary', 'danger'].includes(variant) && 'text-white',
                ['warning', 'label'].includes(variant) && 'text-gray-500',
              ],
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {/* Left Icon */}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'mr-[10px]',
              size === 'base' && 'mr-[8px]',
              size === 'lg' && 'mr-[8px]',
            ])}
          >
            <LeftIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                leftIconClassName,
              )}
            />
          </div>
        )}
        <span className={textClassName}>{children}</span>
        {RightIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'ml-[10px]',
              size === 'base' && 'ml-[8px]',
              size === 'lg' && 'ml-[8px]',
            ])}
          >
            <RightIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                rightIconClassName,
              )}
            />
          </div>
        )}
      </button>
    );
  },
);

export default Button;
