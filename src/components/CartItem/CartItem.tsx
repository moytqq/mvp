import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  TextField,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useAppDispatch } from '../../hooks/redux';

import cartItemStyles from './CartItem.styles';
import { removeItemCompletely, updateQuantity } from '../../store/reducers/CartItemSlice';
import { CartItemWithDetails } from '../../utils/cartHelper';

interface CartItemProps {
  item: CartItemWithDetails;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({
      serviceId: item.serviceId,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        serviceId: item.serviceId,
        quantity: item.quantity - 1
      }));
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      dispatch(updateQuantity({
        serviceId: item.serviceId,
        quantity: newQuantity
      }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItemCompletely(item.serviceId));
  };

  if (!item.service) return null;

  return (
    <Card sx={cartItemStyles.card}>
      <CardContent sx={cartItemStyles.cardContent}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={cartItemStyles.serviceInfo}>
            <Typography variant="h6" sx={cartItemStyles.serviceName}>
              {item.service.name}
            </Typography>

            <Typography sx={cartItemStyles.serviceDescription}>
              {item.service.description}
            </Typography>

            <Typography sx={cartItemStyles.servicePrice}>
              Цена: {item.service.price.toLocaleString('ru-RU')} ₽
            </Typography>
          </Box>

          <Box sx={cartItemStyles.quantityControl}>
            <Typography variant="body2" sx={cartItemStyles.quantityLabel}>
              Количество
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                size="small"
                onClick={handleDecrease}
                disabled={item.quantity <= 1}
                sx={cartItemStyles.quantityButton}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <TextField
                size="small"
                value={item.quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                sx={cartItemStyles.quantityInput}
              />

              <IconButton
                size="small"
                onClick={handleIncrease}
                sx={cartItemStyles.quantityButton}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Button
              startIcon={<DeleteIcon />}
              onClick={handleRemove}
              size="small"
              color="error"
              sx={cartItemStyles.deleteButton}
            >
              Удалить
            </Button>
          </Box>
        </Box>

        <Divider sx={cartItemStyles.divider} />

        <Box sx={cartItemStyles.itemTotal}>
          <Typography variant="body2" sx={cartItemStyles.itemTotalLabel}>
            Сумма за {item.quantity} {item.quantity === 1 ? 'единицу' : 'единицы'}
          </Typography>

          <Typography variant="h6" sx={cartItemStyles.itemTotalPrice}>
            {item.totalPrice.toLocaleString('ru-RU')} ₽
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;