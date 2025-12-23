import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { AddShoppingCart as AddCartIcon } from '@mui/icons-material';
import { IService } from '../../models/IServices';
import { useAppDispatch } from '../../hooks/redux';
import serviceCardStyles from './ServiceCard.styles';
import { addToCart } from '../../store/reducers/CartItemSlice';

interface ServiceCardProps {
  service: IService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(service.id));
  };

  return (
    <Box sx={serviceCardStyles.cardWrapper}>
      <Card sx={serviceCardStyles.card}>
        <CardContent sx={serviceCardStyles.cardContent}>
          <Typography variant="h6" component="h3" sx={serviceCardStyles.serviceName}>
            {service.name}
          </Typography>

          <Typography sx={serviceCardStyles.description}>
            {service.description}
          </Typography>

          <Box sx={serviceCardStyles.priceContainer}>
            <Typography variant="h5" sx={serviceCardStyles.price}>
              {service.price.toLocaleString('ru-RU')} ₽
            </Typography>
          </Box>
        </CardContent>

        <CardActions>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddCartIcon />}
            onClick={handleAddToCart}
            sx={serviceCardStyles.addButton}
          >
            Добавить в корзину
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ServiceCard;