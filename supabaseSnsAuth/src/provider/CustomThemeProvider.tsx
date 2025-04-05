'use client';

import { ReactNode } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/libs/registry';
import { InitGlobalStyled } from '@/styles/init';
import { FONTSIZES, FONTWEIGHT } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    FONTWEIGHT: typeof FONTWEIGHT;
    FONTSIZES: typeof FONTSIZES;
  }
}

export const theme: DefaultTheme = {
  FONTWEIGHT,
  FONTSIZES,
};

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <InitGlobalStyled />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
