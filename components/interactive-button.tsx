"use client";

import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type PointerEvent,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "framer-motion";

type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

function useRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const nextId = useRef(0);

  const createRipple = (event: MouseEvent<HTMLElement> | PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.1;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = nextId.current++;

    setRipples((current) => [...current, { id, x, y, size }]);

    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, 550);
  };

  return {
    ripples,
    createRipple,
  };
}

function RippleLayer({ ripples }: { ripples: Ripple[] }) {
  return (
    <span className="ripple-layer" aria-hidden="true">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-wave"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </span>
  );
}

export function InteractiveLink({
  children,
  className,
  onPointerDown,
  onClick,
  ...props
}: LinkProps) {
  const { ripples, createRipple } = useRipple();

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    createRipple(event);
    onPointerDown?.(event);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
  };

  return (
    <a
      className={`interactive-control ${className ?? ""}`.trim()}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      {...props}
    >
      <span className="interactive-content">{children}</span>
      <RippleLayer ripples={ripples} />
    </a>
  );
}

export function InteractiveButton({
  children,
  className,
  onPointerDown,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const { ripples, createRipple } = useRipple();

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    createRipple(event);
    onPointerDown?.(event);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={`interactive-control ${className ?? ""}`.trim()}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      {...props}
    >
      <span className="interactive-content">{children}</span>
      <RippleLayer ripples={ripples} />
    </button>
  );
}
