"use client";

import { AppProvider } from "@/lib/context";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </AppProvider>
  );
}
