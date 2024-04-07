/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: `flex h-10 items-center justify-center gap-2 rounded-full px-4 text-textL_medium transition disabled:opacity-50 disabled:pointer-events-none transition`,
  variants: {
    variant: {
      primary: `bg-accent text-primaryWhite hover:opacity-75`,
      outline: `bg-white text-accent border border-accent hover:opacity-75`,
      icon: `bg-transparent hover:bg-bg-gray rounded-full p-2 h-fit`,
    },
  },
  defaultVariants: {
    variant: "primary",
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
    { className, variant, children, disabled, type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        type={type}
        className={button({ variant, className })}
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
