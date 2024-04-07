/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: `shadow-neon rounded bg-slate-950 font-bold border-2 `,
  variants: {
    variant: {
      primary: `mb-4 border-blue-400 text-blue-500 hover:bg-blue-700`,
      danger: `border-red-400 text-red-300 hover:bg-red-700"`,
    },
    size: {
      lg: `px-6 py-4`,
      sm: `px-2 py-1`,
      md: `px-4 py-2`,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  children: React.ReactNode;
}

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
