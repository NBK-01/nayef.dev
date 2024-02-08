/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../comps/theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Chip } from "@nextui-org/react";
import { toast } from "sonner";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ReadMe Generator",
    href: "https://github.com/NBK-01/ReadeMe-Generator",
    description: "cli-based nodejs readme file generator",
  },
  {
    title: "Bookworm haven",
    href: "https://github.com/NBK-01/Bookworm-Haven",
    description:
      "an platform where you can discuss, review, and search for novels",
  },
  {
    title: "Prbly V1",
    href: "https://github.com/Probably-xyz/Prbly-Alpha",
    description: "first design & dev of prbly.xyz",
  },
  {
    title: "Mirathi V1",
    href: "https://mirathi-v2-8u7c4dawg-nbk-01.vercel.app/",
    description: "first design and dev of mirathi.io",
  },
  {
    title: "Trail Finder",
    href: "https://jyothybaby.github.io/Trail-Finder/",
    description:
      "search for hiking trails within a selected radius relevant to your location ",
  },
  {
    title: "Employee manager sys",
    href: "https://github.com/NBK-01/Employee-Management-System",
    description:
      "a terminal based CMS app which runs using mainly Inquirer and SQL",
  },
];
function copyFunc() {
  navigator.clipboard.writeText("nbk01.dev@gmail.com");

  toast.success("Email copied to clipboard");
}


