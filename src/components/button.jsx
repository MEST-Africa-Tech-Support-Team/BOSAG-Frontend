import { forwardRef } from 'react';

const Button = forwardRef(({ children = 'Button', className = '', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`
        px-12 py-6
        bg-orange-500
        hover:bg-orange-600
        active:bg-orange-700
        text-white
        text-2xl
        font-normal
        tracking-wide
        rounded-2xl
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-200
        ease-in-out
        transform
        hover:scale-[1.02]
        active:scale-[0.98]
        focus:outline-none
        focus:ring-4
        focus:ring-orange-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:scale-100
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-label={typeof children === 'string' ? children : 'Button'}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
