"use client";

import Image from "next/image";
import { useTheme } from "./Providers";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className=" flex items-center ">
      <Image
        src={theme == "dark" ? "/sun.png" : "/moon.png"}
        width={500}
        height={500}
        alt="drak"
        className="h-9 w-9"
      />
    </div>
  );
}

export default ThemeToggle;
