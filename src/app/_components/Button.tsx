import React, { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: `shadow-neon rounded bg-slate-950 font-bold border-2 mb-4 `,
  variants: {
    variant: {
      primary: `border-blue-400 text-blue-500 hover:bg-blue-700`,
      danger: `border-red-400 text-red-300 hover:bg-red-700"`,
    },
    size: {
      sm: `px-2 py-1`,
      md: `px-4 py-2`,
      lg: `px-6 py-4`,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    children: React.ReactNode;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, children, disabled, type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        type={type}
        className={button({ variant, className, size })}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
