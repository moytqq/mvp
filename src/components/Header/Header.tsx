import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { Home as HomeIcon, ShoppingCart as CartIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import headerStyles from './Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const totalItems = useAppSelector((state) =>
    state.cartReducer.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <AppBar position="sticky" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={() => navigate('/')}
          sx={headerStyles.homeButton}
        >
          <HomeIcon sx={headerStyles.icon} />
          <Typography variant="h6" component="span" sx={headerStyles.siteName}>
            AviaCompanyName
          </Typography>
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="cart"
          onClick={() => navigate('/cart')}
          sx={headerStyles.iconButton}
        >
          <Badge
            badgeContent={totalItems}
            color="error"
            max={99}
            sx={headerStyles.badge}
          >
            <CartIcon sx={headerStyles.icon} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;