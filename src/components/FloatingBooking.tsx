"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./Icons";
import { cn } from "@/lib/utils";

export function FloatingBooking() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={cn("floating-book", visible && "floating-book--visible")}
      href="#book"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
    >
      <span>Book an appointment</span>
      <ArrowUpRight />
    </a>
  );
}
