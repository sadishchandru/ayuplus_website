"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import DemoModal from "./DemoModal";

export default function DemoNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar onOpenModal={() => setOpen(true)} />
      <DemoModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
