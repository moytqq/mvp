import { SxProps, Theme } from '@mui/material';

export const cartItemStyles = {
  card: {
    mb: 2,
    borderRadius: 2,
    boxShadow: 1,
  } as SxProps<Theme>,

  cardContent: {
    p: 3,
  } as SxProps<Theme>,

  serviceInfo: {
    flex: 1,
  } as SxProps<Theme>,

  serviceName: {
    fontWeight: 600,
    mb: 1,
  } as SxProps<Theme>,

  serviceDescription: {
    color: 'text.secondary',
    mb: 2,
  } as SxProps<Theme>,

  servicePrice: {
    color: 'primary.main',
    mb: 2,
  } as SxProps<Theme>,

  quantityControl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ml: 2,
  } as SxProps<Theme>,

  quantityLabel: {
    mb: 1,
    color: 'text.secondary',
  } as SxProps<Theme>,

  quantityInput: {
    width: '70px',
    '& input': {
      textAlign: 'center',
      width: '50px',
    },
  } as SxProps<Theme>,

  quantityButton: {
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 1,
  } as SxProps<Theme>,

  deleteButton: {
    mt: 2,
  } as SxProps<Theme>,

  divider: {
    my: 2,
  } as SxProps<Theme>,

  itemTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as SxProps<Theme>,

  itemTotalLabel: {
    color: 'text.secondary',
  } as SxProps<Theme>,

  itemTotalPrice: {
    color: 'primary.main',
    fontWeight: 600,
  } as SxProps<Theme>,
};

export default cartItemStyles;