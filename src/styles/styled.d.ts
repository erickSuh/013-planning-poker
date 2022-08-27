import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      header: string;
      primary: string;
      secondary: string;
      hover: string;
      text: string;
      invalid: string;
      background: string;
      disabled: string;
      warning: string;
    };
    fonts: {
      family: string;
      style: string;
      weight: string;
      size: string;
    };
    width: {
      tablet: string;
      desktop: string;
    };
  }
}
