import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#08B6D9',
          light: '#35C7E3',
          dark: '#0698B6',
          contrastText: '#FFFFFF',
        },

        secondary: {
          main: '#08B6D9',
          light: '#35C7E3',
          dark: '#0698B6',
          contrastText: '#FFFFFF',
        },

        error: {
          main: '#08B6D9',
          light: '#35C7E3',
          dark: '#0698B6',
        },

        warning: {
          main: '#08B6D9',
          light: '#35C7E3',
          dark: '#0698B6',
        },

        info: {
          main: '#08B6D9',
          light: '#35C7E3',
          dark: '#0698B6',
        },

        success: {
          main: '#08B6D9',
          light: '#35C7E3',
          dark: '#0698B6',
        },

        background: {
          default: '#FAFEFF',
          paper: '#FFFFFF',
        },

        text: {
          primary: '#0F172A',
          secondary: '#7B8A9A',
        },

        divider: '#DDF3F8',
      },
    },
  },

  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },

    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },

    h3: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },

    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },

    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },

    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },

    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },

    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },

    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 8,
  },

  shadows: [
    'none',

    '0 1px 2px 0 rgb(8 182 217 / 0.04)',

    '0 1px 3px 0 rgb(8 182 217 / 0.08), 0 1px 2px -1px rgb(8 182 217 / 0.06)',

    '0 4px 6px -1px rgb(8 182 217 / 0.08), 0 2px 4px -2px rgb(8 182 217 / 0.06)',

    '0 10px 15px -3px rgb(8 182 217 / 0.08), 0 4px 6px -4px rgb(8 182 217 / 0.06)',

    '0 20px 25px -5px rgb(8 182 217 / 0.1), 0 8px 10px -6px rgb(8 182 217 / 0.08)',

    '0 25px 50px -12px rgb(8 182 217 / 0.14)',

    '0 2px 4px 0 rgb(8 182 217 / 0.05)',

    '0 4px 8px 0 rgb(8 182 217 / 0.07)',

    '0 6px 12px 0 rgb(8 182 217 / 0.08)',

    '0 8px 16px 0 rgb(8 182 217 / 0.09)',

    '0 12px 24px 0 rgb(8 182 217 / 0.1)',

    '0 16px 32px 0 rgb(8 182 217 / 0.12)',

    '0 20px 40px 0 rgb(8 182 217 / 0.14)',

    '0 24px 48px 0 rgb(8 182 217 / 0.16)',

    '0 28px 56px 0 rgb(8 182 217 / 0.18)',

    '0 32px 64px 0 rgb(8 182 217 / 0.2)',

    '0 36px 72px 0 rgb(8 182 217 / 0.22)',

    '0 40px 80px 0 rgb(8 182 217 / 0.24)',

    '0 44px 88px 0 rgb(8 182 217 / 0.26)',

    '0 48px 96px 0 rgb(8 182 217 / 0.28)',

    '0 52px 104px 0 rgb(8 182 217 / 0.3)',

    '0 56px 112px 0 rgb(8 182 217 / 0.32)',

    '0 60px 120px 0 rgb(8 182 217 / 0.34)',

    '0 64px 128px 0 rgb(8 182 217 / 0.36)',
  ],

  components: {
    // MUI X-Charts
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          '& .MuiChartsAxis-line, & .MuiChartsAxis-tick': {
            display: 'none',
          },

          '& .MuiChartsAxis-tickLabel': {
            fill: '#7B8A9A',
            fontSize: '0.8rem',
            fontWeight: 400,
          },
        },
      },
    },

    // ButtonBase
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    // Button
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.875rem',
          padding: '0.35rem 1rem',
          transition: 'all 0.2s ease-in-out',

          '&:hover': {
            opacity: 0.85,
          },
        },

        sizeSmall: {
          padding: '0.2rem 0.8rem',
          fontSize: '0.8125rem',
        },

        sizeLarge: {
          padding: '0.5rem 1.5rem',
          fontSize: '0.9375rem',
        },

        contained: {
          '&:hover': {
            boxShadow:
              '0 4px 10px -2px rgb(8 182 217 / 0.25)',
          },
        },

        outlined: {
          borderWidth: '1.5px',

          '&:hover': {
            borderWidth: '1.5px',
          },
        },
      },
    },

    // IconButton
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },

    // Checkbox
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
    },

    // Radio
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
      },
    },

    // Switch
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
    },

    // Chip
    MuiChip: {
      defaultProps: {
        deleteIcon: undefined,
      },

      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },

    // Card
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,

          boxShadow:
            '0 1px 3px 0 rgb(8 182 217 / 0.08), 0 1px 2px -1px rgb(8 182 217 / 0.06)',
        },
      },
    },

    // Paper
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: 'none',
        },
      },
    },

    // TextField
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 6,

            '& input': {
              padding: '0.5rem 0.75rem',
            },

            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#35C7E3',
            },

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#08B6D9',
              borderWidth: '1.5px',
            },
          },

          '& .MuiInputLabel-root': {
            transform: 'translate(0.75rem, 0.5rem) scale(1)',

            '&.MuiInputLabel-shrink': {
              transform:
                'translate(0.875rem, -0.5625rem) scale(0.75)',
            },
          },
        },
      },
    },

    // Input
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 0.5,
          },
        },
      },
    },
  },
});

export default theme;