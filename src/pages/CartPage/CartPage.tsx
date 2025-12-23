import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

import cartPageStyles from './CartPage.styles';
import { calculateCartTotal, getCartItemsWithDetails } from '../../utils/cartHelper';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { clearCart } from '../../store/reducers/CartItemSlice';
import CartItem from '../../components/CartItem/CartItem';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const services = useAppSelector((state) => state.servicesReducer.services);

  const cartItemsWithDetails = getCartItemsWithDetails(cartItems, services);
  const totalPrice = calculateCartTotal(cartItemsWithDetails);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    alert('Заказ оформлен!');
    dispatch(clearCart());
  };

  return (
    <Container maxWidth="lg" sx={cartPageStyles.container}>
      <Typography variant="h4" component="h1" sx={cartPageStyles.pageTitle}>
        Корзина покупок
      </Typography>

      {cartItems.length === 0 ? (
        <Box sx={cartPageStyles.emptyCart}>
          <Typography variant="h6" sx={cartPageStyles.emptyCartTitle}>
            Ваша корзина пуста
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Добавьте услуги, чтобы оформить заказ
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            sx={cartPageStyles.emptyCartButton}
          >
            Перейти к услугам
          </Button>
        </Box>
      ) : (
        <>
          <Box sx={cartPageStyles.cartItemsSection}>
            <Typography variant="h6" sx={cartPageStyles.cartItemsTitle}>
              Выбранные услуги ({cartItems.length})
            </Typography>

            {cartItemsWithDetails.map((item) => (
              <CartItem key={item.serviceId} item={item} />
            ))}
          </Box>

          <Paper elevation={1} sx={cartPageStyles.summaryPaper}>
            <Typography variant="h6" sx={cartPageStyles.summaryTitle}>
              Итог заказа
            </Typography>

            <Stack spacing={2}>
              <Box sx={cartPageStyles.summaryRow}>
                <Typography sx={cartPageStyles.summaryLabel}>
                  Стоимость услуг
                </Typography>
                <Typography>
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </Typography>
              </Box>

              <Box sx={cartPageStyles.summaryRow}>
                <Typography sx={cartPageStyles.summaryLabel}>
                  Скидка
                </Typography>
                <Typography sx={cartPageStyles.summaryDiscount}>
                  0 ₽
                </Typography>
              </Box>

              <Divider />

              <Box sx={cartPageStyles.summaryTotal}>
                <Typography variant="h6" sx={cartPageStyles.summaryTotalLabel}>
                  Итого к оплате:
                </Typography>
                <Typography variant="h5" sx={cartPageStyles.summaryTotalPrice}>
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Stack sx={cartPageStyles.actionsStack}>
                <Button
                  component={Link}
                  to="/"
                  variant="outlined"
                  fullWidth
                >
                  Продолжить покупки
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleClearCart}
                  fullWidth
                >
                  Очистить корзину
                </Button>

                <Button
                  variant="contained"
                  size="large"
                  onClick={handleCheckout}
                  fullWidth
                  sx={cartPageStyles.checkoutButton}
                >
                  Оформить заказ
                </Button>
              </Stack>

              <Typography variant="body2" sx={cartPageStyles.disclaimer}>
                Нажимая «Оформить заказ», вы соглашаетесь с условиями обработки персональных данных
              </Typography>
            </Stack>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default CartPage;