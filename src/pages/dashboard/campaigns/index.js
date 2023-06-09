import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { LogisticsDeviatedVehicles } from 'src/sections/dashboard/campaigns/logistics-deviated-vehicles';
import { LogisticsErrorVehicles } from 'src/sections/dashboard/campaigns/logistics-error-vehicles';
import { LogisticsLateVehicles } from 'src/sections/dashboard/campaigns/logistics-late-vehicles';
import { LogisticsRouteVehicles } from 'src/sections/dashboard/campaigns/logistics-route-vehicles';
import { LogisticsVehiclesCondition } from 'src/sections/dashboard/campaigns/logistics-vehicles-condition';
import { LogisticsVehiclesList } from 'src/sections/dashboard/campaigns/logistics-vehicles-list';
import { LogisticsVehiclesOverview } from 'src/sections/dashboard/campaigns/logistics-vehicles-overview';

import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Campaign Dashboard" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <div>
                  <Typography variant="h4">
                    My Campaigns
                  </Typography>
                </div>
                <div>
                  <Stack
                    direction="row"
                    spacing={4}
                  >
                    <Button
                      startIcon={(
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      )}
                      variant="contained"
                      component={RouterLink}
                      href={paths.dashboard.campaigns.create}
                    >
                      Create a Campaign
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsRouteVehicles amount={3} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsErrorVehicles amount={27} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsDeviatedVehicles amount={1} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsLateVehicles amount={2} />
            </Grid>
            <Grid
              xs={12}
              lg={6}
            >
              <LogisticsVehiclesOverview
                chartSeries={[38, 50, 32]}
                labels={['Nurture', 'Engagement', 'Sales']}
              />
            </Grid>
            <Grid
              xs={12}
              lg={6}
            >
              <LogisticsVehiclesCondition
                bad={12}
                excellent={181}
                good={24}
              />
            </Grid>
            <Grid xs={12}>
              <LogisticsVehiclesList
                vehicles={[
                  {
                    id: 'Life Insurance Pipeline',
                    endingRoute: 'Sales',
                    startingRoute: 'May 28, 2023 - 10:11:26',
                    status: 'success',
                    temperature: 80,
                    temperatureLabel: 'Very Good'
                  },
                  {
                    id: 'Monthly Webinar Series',
                    endingRoute: 'Engagement',
                    startingRoute: 'May 29, 2023 - 08:15:13',
                    status: 'warning',
                    temperature: 45,
                    temperatureLabel: 'Good',
                    warning: '23 Invalid emails found'
                  },
                  {
                    id: 'Auto Insurance Offer',
                    endingRoute: 'Renew',
                    startingRoute: 'May 30, 2023 - 08:00:00',
                    status: 'success',
                    temperature: 95,
                    temperatureLabel: 'Excelent'
                  },
                  {
                    id: 'Customer Acquisition',
                    endingRoute: 'Nurture',
                    startingRoute: 'May 31, 2023 - 22:12:00',
                    status: 'error',
                    temperature: 8,
                    temperatureLabel: 'Bad',
                    warning: 'Blacklisted emails found'
                  }
                  
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
