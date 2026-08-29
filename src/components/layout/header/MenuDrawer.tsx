'use client';

import React from 'react';

import { motion, Variants } from 'motion/react';

import { Menu } from '@/common';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MenuListItem } from './MenuListItem';

const ITEM_DELAY_MS = 200;
const ITEM_STAGGER_MS = 70;

export const MenuDrawer: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div ref={containerRef} className="relative">
        <DialogTrigger
          render={
            <Button
              variant="subtle-outline"
              size="icon"
              aria-label="Toggle menu"
              className="relative z-10"
            />
          }>
          <motion.svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            initial={false}
            animate={isOpen ? 'open' : 'closed'}>
            <Path
              variants={{
                closed: { d: 'M 3 5.077 L 21 5.077' },
                open: { d: 'M 6 18.923 L 18 5.077' },
              }}
            />
            <Path
              d="M 3 12 L 21 12"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 3 18.923 L 21 18.923' },
                open: { d: 'M 6 5.077 L 18 18.923' },
              }}
            />
          </motion.svg>
        </DialogTrigger>

        <DialogPortal container={containerRef}>
          <DialogPopup className="group/drawer bg-background fixed inset-0 transition-[clip-path] duration-300 ease-in [clip-path:circle(150%_at_top_right)] data-ending-style:[clip-path:circle(0px_at_top_right)] data-starting-style:[clip-path:circle(0px_at_top_right)]">
            <DialogTitle className="sr-only">Menu</DialogTitle>

            <ul className="flex h-full w-full flex-col items-center justify-center gap-6">
              {Menu.options.map((menu, index) => {
                return (
                  <li
                    key={menu.id}
                    style={{ transitionDelay: `${ITEM_DELAY_MS + index * ITEM_STAGGER_MS}ms` }}
                    className="rounded-lg px-3 py-1 transition-[opacity,translate] duration-300 group-data-ending-style/drawer:translate-y-12 group-data-ending-style/drawer:opacity-0 group-data-starting-style/drawer:translate-y-12 group-data-starting-style/drawer:opacity-0"
                    onClick={handleClose}>
                    <MenuListItem menu={menu} className="text-2xl" />
                  </li>
                );
              })}
            </ul>
          </DialogPopup>
        </DialogPortal>
      </div>
    </Dialog>
  );
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    className="stroke-foreground"
    {...props}
  />
);
