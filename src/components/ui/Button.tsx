import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '@/utils/helpers';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

type ButtonOnlyProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { component?: 'button'; href?: never };
type AnchorOnlyProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { component: 'a' };

type ButtonProps = ButtonOnlyProps | AnchorOnlyProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      iconLeft,
      iconRight,
      fullWidth = false,
      component = 'button',
      href,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      group relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl
      text-center leading-snug [text-wrap:balance] sm:whitespace-nowrap select-none
      transition-all duration-300 ease-out-expo
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-primary to-primary-blue text-white shadow-[0_6px_20px_-6px_rgba(11,92,255,0.55)] hover:shadow-[0_12px_30px_-8px_rgba(11,92,255,0.6)] hover:-translate-y-0.5 active:translate-y-0',
      secondary:
        'bg-primary/5 text-primary border border-primary/15 hover:bg-primary hover:text-white hover:-translate-y-0.5 active:translate-y-0',
      accent:
        'bg-accent-yellow text-primary font-bold shadow-[0_6px_20px_-8px_rgba(255,196,0,0.7)] hover:bg-[#e6b000] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(255,196,0,0.7)] active:translate-y-0',
      outline:
        'bg-transparent text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 active:translate-y-0',
      ghost: 'bg-transparent text-text hover:bg-primary/5',
    };

    const sizeStyles = {
      sm: 'min-h-10 px-4 py-2 text-sm',
      md: 'min-h-12 px-6 py-2.5 text-base',
      lg: 'min-h-[3.5rem] px-7 py-3 text-base sm:text-lg',
    };

    const isAnchor = component === 'a';

    const commonClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className);

    if (isAnchor) {
      const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          className={commonClassName}
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...anchorProps}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            <>
              {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
              {children}
              {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
            </>
          )}
        </a>
      );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        className={commonClassName}
        disabled={disabled || loading}
        type={(buttonProps as any).type || 'button'}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <>
            {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
            {children}
            {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
