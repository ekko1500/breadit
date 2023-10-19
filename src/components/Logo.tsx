"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "./Providers";

function Logo() {
  const { theme } = useTheme();

  return (
    <>
      <Image
        width={500}
        height={500}
        src={theme == "dark" ? "/logo-dark.png" : "/logo.png"}
        alt="logo"
        className="h-9 w-9 sm:h-10 sm:w-10"
      />
    </>
  );
}

export default Logo;
