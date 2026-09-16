/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * Global MDX component map: makes the pedagogical components and a
 * Link-aware anchor available inside every article without a per-file import.
 */
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Callout } from "@/components/mdx/Callout";
import { Example } from "@/components/mdx/Example";
import { KeyTakeaway } from "@/components/mdx/KeyTakeaway";
import { Source } from "@/components/mdx/Source";

const components: MDXComponents = {
  a: ({ href = "", children, ...props }) => {
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  Callout,
  Example,
  KeyTakeaway,
  Source,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
