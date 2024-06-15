import Typography from "../typography";

interface TokenValue {
  [key: string]: string;
}

interface Tokens {
  [key: string]: TokenValue;
}

interface ThemeSettings {
  palette: {
    mode: 'light' | 'dark';
    primary: {
      main: string;
      light?: string;
    };
    secondary: {
      main: string;
      light?: string;
    };
    neutral: {
      main: string;
    };
    background: {
      default: string;
      alt?: string;
    };
  };
  typography: {
    fontFamily: string;
  };
}

    // ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

const tokensDark: Tokens = {
  primary: {
    0: '#f0f4ff',
    1: '#d9e2ff',
    2: '#b4ccff',
    3: '#8fb5ff',
    4: '#6c9dff',
    5: '#4778ff',
    6: '#3c64cc',
    7: '#2f4c99',
    8: '#233466',
    9: '#162033'
  },
  secondary: {
    0: '#f9fafc',
    1: '#eef0f3',
    2: '#d8dde2',
    3: '#c3cad2',
    4: '#adb7c2',
    5: '#99a3b1',
    6: '#7c8491',
    7: '#606571',
    8: '#454950',
    9: '#2b2e30'
  },
  red: {
    0: '#ffe6e6',
    1: '#ffb8b8',
    2: '#ff8a8a',
    3: '#ff5c5c',
    4: '#ff2e2e',
    5: '#ff0000',
    6: '#cc0000',
    7: '#990000',
    8: '#660000',
    9: '#330000'
  },
  gold: {
    0: '#fff8e1',
    1: '#ffebc1',
    2: '#ffde9f',
    3: '#ffd17e',
    4: '#ffc45c',
    5: '#ffb73a',
    6: '#cc922e',
    7: '#996e22',
    8: '#664916',
    9: '#33250b'
  },
  cyan: {
    0: '#e0f7fa',
    1: '#b2ebf2',
    2: '#80deea',
    3: '#4dd0e1',
    4: '#26c6da',
    5: '#00bcd4',
    6: '#0097a7',
    7: '#006978',
    8: '#00414a',
    9: '#00191d'
  },
  green: {
    0: '#e8f5e9',
    1: '#c8e6c9',
    2: '#a5d6a7',
    3: '#81c784',
    4: '#66bb6a',
    5: '#4caf50',
    6: '#388e3c',
    7: '#2e7d32',
    8: '#1b5e20',
    9: '#003300'
  },
  grey: {
    0: '#fafafa',
    1: '#f5f5f5',
    2: '#eeeeee',
    3: '#e0e0e0',
    4: '#bdbdbd',
    5: '#9e9e9e',
    6: '#757575',
    7: '#f6f6f6',
    8: '#424242',
    9: '#212121',
    10: '#121212',
    A50: '#f8f8f8',
    A100: '#f0f0f0',
    A200: '#e0e0e0',
    A400: '#c0c0c0',
    A700: '#909090',
    A800: '#707070'
  }
};

function reverseTokens(tokensDark: Tokens): Tokens {
  const reversedTokens: Tokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj: TokenValue = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}

export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode: 'light' | 'dark'): ThemeSettings => {
  const tokens = mode === 'dark' ? tokensDark : tokensLight;
  return {
    palette: {
      mode: mode,
      primary: {
        ...tokens.primary,
        main: tokens.primary[4], 
        light: tokens.primary[2],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[4],
        light: tokens.secondary[2],
      },
      neutral: {
        main: tokens.grey[5],
      },
      background: {
        default: tokens.grey[9],
        alt: tokens.grey[8],
      },
    },
    typography: { ...Typography("'Inter', sans-serif") },
  };
};
