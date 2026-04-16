"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="border-t border-negro/10">
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-negro/10"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group w-full flex items-center justify-between gap-6 py-6 text-left",
                "text-lg md:text-xl font-medium tracking-tight hover:text-lacre transition-colors",
                "focus-visible:outline-2 focus-visible:outline-lacre focus-visible:outline-offset-4",
              )}
            >
              <span>{item.q}</span>
              <ChevronDown
                aria-hidden
                className="w-5 h-5 flex-shrink-0 text-piedra group-hover:text-lacre group-data-[state=open]:text-lacre transition-all duration-300 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <p className="pb-6 pr-6 md:pr-12 text-base md:text-lg text-piedra leading-relaxed">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
