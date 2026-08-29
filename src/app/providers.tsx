'use client';

import React from 'react';

import { ThemeProvider } from 'next-themes';

import { AppConst } from '@/common';
import { Toaster } from '@/components/ui/sonner';
import { useVisitors } from '@/hooks/useVisitors';

export const Providers: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  useVisitors();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}

      <Toaster
        position={AppConst.TOAST_POSITION}
        visibleToasts={AppConst.TOAST_VISIBLE_LIMIT}
        duration={AppConst.TOAST_DURATION}
      />
    </ThemeProvider>
  );
};
