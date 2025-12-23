import { SxProps, Theme } from '@mui/material';

export const headerStyles = {
  appBar: {
    position: 'sticky',
    backgroundColor: 'background.paper',
    color: 'text.primary',
    borderBottom: '1px solid',
    borderColor: 'divider',
    px: { xs: 1, sm: 0 },
  } as SxProps<Theme>,

  toolbar: {
    minHeight: { xs: 56, sm: 64 },
    justifyContent: 'space-between',
    px: 0,
  } as SxProps<Theme>,

  iconButton: {
    p: { xs: 1, sm: 1.5 },
    borderRadius: 2,
    '&:hover': {
      backgroundColor: 'rgba(25, 118, 210, 0.08)',
    },
  } as SxProps<Theme>,

  homeButton: {
    p: { xs: 1, sm: 1.5 },
    ml: { xs: 0.5, sm: 0 },
    borderRadius: 2,
    '&:hover': {
      backgroundColor: 'rgba(25, 118, 210, 0.08)',
    },
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 0, sm: 1.5 },
  } as SxProps<Theme>,

  icon: {
    fontSize: { xs: 28, sm: 32 },
    color: 'primary.main',
  } as SxProps<Theme>,

  siteName: {
    ml: 1.5,
    fontWeight: 600,
    display: { xs: 'none', sm: 'inline' },
  } as SxProps<Theme>,

  badge: {
    '& .MuiBadge-badge': {
      fontSize: { xs: 10, sm: 12 },
      height: { xs: 18, sm: 20 },
      minWidth: { xs: 18, sm: 20 },
      top: { xs: 2, sm: 4 },
      right: { xs: 2, sm: 4 },
      border: '2px solid',
      borderColor: 'background.paper',
    },
  } as SxProps<Theme>,
};

export default headerStyles;