import { SxProps, Theme } from '@mui/material';

export const cartPageStyles = {
  container: {
    py: 4,
  } as SxProps<Theme>,

  pageTitle: {
    mb: 4,
    fontWeight: 600,
  } as SxProps<Theme>,

  emptyCart: {
    textAlign: 'center',
    py: 8,
  } as SxProps<Theme>,

  emptyCartTitle: {
    color: 'text.secondary',
    mb: 2,
  } as SxProps<Theme>,

  emptyCartButton: {
    mt: 2,
  } as SxProps<Theme>,

  cartItemsSection: {
    mb: 4,
  } as SxProps<Theme>,

  cartItemsTitle: {
    mb: 2,
    fontWeight: 600,
  } as SxProps<Theme>,

  summaryPaper: {
    p: 3,
    borderRadius: 2,
    position: 'sticky',
    top: 20,
  } as SxProps<Theme>,

  summaryTitle: {
    mb: 2,
    fontWeight: 600,
  } as SxProps<Theme>,

  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 1,
  } as SxProps<Theme>,

  summaryLabel: {
    color: 'text.secondary',
  } as SxProps<Theme>,

  summaryDiscount: {
    color: 'success.main',
  } as SxProps<Theme>,

  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 2,
  } as SxProps<Theme>,

  summaryTotalLabel: {
    fontWeight: 600,
  } as SxProps<Theme>,

  summaryTotalPrice: {
    fontWeight: 600,
    color: 'primary.main',
  } as SxProps<Theme>,

  actionsStack: {
    mt: 2,
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 2,
  } as SxProps<Theme>,

  checkoutButton: {
    py: 1.5,
    fontWeight: 600,
  } as SxProps<Theme>,

  disclaimer: {
    mt: 2,
    textAlign: 'center',
    color: 'text.secondary',
  } as SxProps<Theme>,
};

export default cartPageStyles;