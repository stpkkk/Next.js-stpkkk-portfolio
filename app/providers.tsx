"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export const Providers: React.FC<Props> = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
