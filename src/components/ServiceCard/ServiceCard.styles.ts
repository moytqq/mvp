import { SxProps, Theme } from '@mui/material';

export const serviceCardStyles = {
  cardWrapper: {
    width: '100%',
    height: '100%',
  } as SxProps<Theme>,

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 3,
    },
  } as SxProps<Theme>,

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  } as SxProps<Theme>,

  serviceName: {
    fontWeight: 600,
    mb: 2,
  } as SxProps<Theme>,

  description: {
    color: 'text.secondary',
    mb: 2,
  } as SxProps<Theme>,

  priceContainer: {
    mt: 'auto',
  } as SxProps<Theme>,

  price: {
    fontWeight: 600,
    color: 'primary.main',
  } as SxProps<Theme>,

  addButton: {
    py: 1.5,
    borderRadius: 2,
    fontWeight: 600,
  } as SxProps<Theme>,
};

export default serviceCardStyles;