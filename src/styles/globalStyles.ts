import { SxProps, Theme } from '@mui/material';

export const globalStyles = {
  container: {
    py: 4,
  } as SxProps<Theme>,

  pageTitle: {
    mb: 4,
    fontWeight: 600,
  } as SxProps<Theme>,

  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: 3,
  } as SxProps<Theme>,

  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as SxProps<Theme>,

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as SxProps<Theme>,

  spacing: {
    small: 1,
    medium: 2,
    large: 3,
  },
};