"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
  useReducedMotion,
} from "framer-motion";

const baseEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewportOptions = {
  once: true,
  amount: 0.24,
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: baseEase,
    },
  },
};

export function Reveal({
  children,
  delay = 0,
  distance = 26,
  className,
  ...props
}: HTMLMotionProps<"div"> & {
  delay?: number;
  distance?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: distance }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={viewportOptions}
      transition={{ duration: 0.55, ease: baseEase, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : staggerContainer}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={viewportOptions}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : fadeUpItem}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function PageIntro({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: baseEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
