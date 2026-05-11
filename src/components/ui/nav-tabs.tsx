"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";

type Pos = { left: number; width: number; opacity: number };

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function NavTabs({ className }: { className?: string }) {
  const [position, setPosition] = useState<Pos>({ left: 0, width: 0, opacity: 0 });
  const { location } = useRouterState();

  return (
    <ul
      className={
        "relative mx-auto flex w-fit rounded-full border border-white/15 bg-black/40 p-1 backdrop-blur-md " +
        (className ?? "")
      }
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {links.map((l) => (
        <Tab key={l.to} setPosition={setPosition} to={l.to} active={location.pathname === l.to}>
          {l.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  to,
  active,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Pos>>;
  to: string;
  active?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className={
        "relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase mix-blend-difference md:px-5 md:py-2.5 md:text-sm " +
        (active ? "text-white" : "text-white/90")
      }
    >
      <Link to={to as any}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }: { position: Pos }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-9"
    />
  );
};

export default NavTabs;
