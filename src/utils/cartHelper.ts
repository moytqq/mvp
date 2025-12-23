import { ICartItem } from '../models/ICartItem';
import { IService } from '../models/IServices';

export interface CartItemWithDetails extends ICartItem {
  service?: IService;
  totalPrice: number;
}

export const getCartItemsWithDetails = (
  cartItems: ICartItem[],
  services: IService[]
): CartItemWithDetails[] => {
  return cartItems.map(item => {
    const service = services.find(s => s.id === item.serviceId);
    return {
      ...item,
      service,
      totalPrice: service ? service.price * item.quantity : 0,
    };
  });
};

export const calculateCartTotal = (cartItems: CartItemWithDetails[]): number => {
  return cartItems.reduce((total, item) => total + item.totalPrice, 0);
};