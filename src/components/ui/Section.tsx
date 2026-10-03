import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/helpers';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      containerSize = 'lg',
      id,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-background',
      muted: 'bg-bg-muted',
      primary: 'bg-primary text-white',
    };

    const sizeStyles = {
      sm: 'py-14 sm:py-20',
      md: 'py-20 sm:py-28',
      lg: 'py-24 sm:py-32 lg:py-36',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = 'Section';
