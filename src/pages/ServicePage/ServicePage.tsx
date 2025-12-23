import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useAppSelector } from '../../hooks/redux';
import { IService } from '../../models/IServices';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import servicesPageStyles from './ServicePage.styles';

const ServicesPage: React.FC = () => {
  const { services } = useAppSelector((state) => state.servicesReducer);

  return (
    <Container maxWidth="lg" sx={servicesPageStyles.container}>
      <Typography variant="h4" component="h1" gutterBottom sx={servicesPageStyles.pageTitle}>
        Наши услуги
      </Typography>

      {services.length === 0 ? (
        <Typography>Услуги временно недоступны</Typography>
      ) : (
        <Grid container spacing={3} sx={servicesPageStyles.gridContainer}>
          {services.map((service: IService) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}  sx={servicesPageStyles.gridItem}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={servicesPageStyles.infoBox}>
        <Typography sx={servicesPageStyles.infoText}>
          * FooterPlaceholder
        </Typography>
      </Box>
    </Container>
  );
};

export default ServicesPage;