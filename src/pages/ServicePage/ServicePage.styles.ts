import { SxProps, Theme } from '@mui/material';

export const servicesPageStyles = {
  container: {
    py: 4,
  } as SxProps<Theme>,

  pageTitle: {
    mb: 4,
    fontWeight: 600,
    color: 'text.primary',
  } as SxProps<Theme>,

  gridContainer: {
    mb: 4,
  } as SxProps<Theme>,

  gridItem: {
    display: 'flex',
  } as SxProps<Theme>,

  emptyMessage: {
    textAlign: 'center',
    py: 8,
    color: 'text.secondary',
  } as SxProps<Theme>,

  infoBox: {
    mt: 4,
    p: 2,
    backgroundColor: 'grey.50',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
  } as SxProps<Theme>,

  infoText: {
    fontSize: '0.875rem',
    color: 'text.secondary',
    fontStyle: 'italic',
  } as SxProps<Theme>,

  mobileGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: 3,
  } as SxProps<Theme>,

  statsBox: {
    p: 2,
    mb: 3,
    backgroundColor: 'primary.light',
    color: 'white',
    borderRadius: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as SxProps<Theme>,

  statsText: {
    fontWeight: 500,
  } as SxProps<Theme>,

  statsCount: {
    fontWeight: 700,
    fontSize: '1.2rem',
  } as SxProps<Theme>,
};

export default servicesPageStyles;