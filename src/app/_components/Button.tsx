/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  // shadow-neon ml-auto rounded border-2 border-red-400 bg-slate-950 px-2 py-1 font-bold text-red-300 hover:bg-red-700"
  //  delete
  //"shadow-neon border-2 mb-4 rounded border-blue-400 bg-slate-950 px-4 py-2 font-bold text-blue-500 hover:bg-blue-700"
  // タスクを追加
  base: `shadow-neon rounded bg-slate-950 px-4 py-2font-bold border-2 `,
  variants: {
    variant: {
      primary: `mb-4 border-blue-400 text-blue-500 hover:bg-blue-700`,
      danger: `ml-auto border-red-400 text-red-300 hover:bg-red-700"`,
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
