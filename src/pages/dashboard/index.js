import { addDays, subDays, subHours, subMinutes } from 'date-fns';
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

import { OverviewEvents } from 'src/sections/dashboard/overview/overview-events';
import { OverviewTransactions } from 'src/sections/dashboard/overview/overview-transactions';

import { SalesLOB } from 'src/sections/dashboard/overview/sales-lob';
import { BigNumber } from 'src/sections/dashboard/overview/big-number';


import { AnalyticsStats } from 'src/sections/dashboard/analytics/analytics-stats';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import ArrowDownIcon from '@untitled-ui/icons-react/build/esm/ArrowDown';
import ArrowUpIcon from '@untitled-ui/icons-react/build/esm/ArrowUp';

import { EcommerceCostBreakdown } from 'src/sections/dashboard/ecommerce/ecommerce-cost-breakdown';
import { EcommerceSalesByCountry } from 'src/sections/dashboard/ecommerce/ecommerce-sales-by-country';
import { EcommerceSalesRevenue } from 'src/sections/dashboard/ecommerce/ecommerce-sales-revenue';
import { EcommerceProducts } from 'src/sections/dashboard/ecommerce/ecommerce-products';
import { OverviewStats } from 'src/sections/dashboard/overview/overview-stats';



const now = new Date();

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Overview" />
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
            disableEqualOverflow
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
                    Dashboard
                  </Typography>
                </div>
                
              </Stack>
            </Grid>
            
            <Grid xs={12} md={12}>
              <OverviewStats
                  sales={99700}
                  cost={13209}
                  profit={245100}
                  rating={4.5}
                />
            </Grid>

            <Grid xs={12} md={8}>
                <EcommerceSalesRevenue
                      chartSeries={[
                        {
                          name: 'New Business',
                          data: [3350, 1840, 2254, 5780, 9349, 5241, 2770, 2051, 3764, 2385, 5912, 8323]
                        },
                        {
                          name: 'Renewal Business',
                          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                        }
                      ]}
                />
            </Grid>
            <Grid xs={12} md={4}>
              <Stack
                spacing={1}
              >
                <BigNumber amount={3145} description='Average New business per policy' /> 
                <SalesLOB />
              </Stack>
            </Grid>


            <Grid xs={12} md={3}>
              <AnalyticsStats
                action={(
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon>
                        <ArrowDownIcon />
                      </SvgIcon>
                    )}
                    size="small"
                  >
                    32%
                  </Button>
                )}
                chartSeries={[
                  {
                    data: [0, 170, 242, 98, 63, 56, 85, 171, 209, 163, 204, 21, 264, 0]
                  }
                ]}
                title="Total Views"
                value="42,6K"
              />
            </Grid>

            <Grid xs={12} md={3}>
              <AnalyticsStats
                action={(
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon>
                        <ArrowUpIcon />
                      </SvgIcon>
                    )}
                    size="small"
                  >
                    7%
                  </Button>
                )}
                chartSeries={[
                  {
                    data: [0, 22, 55, 98, 63, 56, 85, 171, 209, 163, 204, 21, 264, 0]
                  }
                ]}
                title="Lead Generation"
                value="1,2K"
              />
            </Grid>

            <Grid xs={12} md={3}>
              <AnalyticsStats
                action={(
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon>
                        <ArrowUpIcon />
                      </SvgIcon>
                    )}
                    size="small"
                  >
                    13%
                  </Button>
                )}
                chartSeries={[
                  {
                    data: [25, 70, 142, 198, 163, 156, 85, 171, 209, 163, 204, 21, 264]
                  }
                ]}
                title="Newsletter Subscription"
                value="5,9K"
              />
            </Grid>

            <Grid xs={12} md={3}>
              <AnalyticsStats
                action={(
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    )}
                    size="small"
                  >
                    0.8%
                  </Button>
                )}
                chartSeries={[
                  {
                    data: [2.3, 2.1, 2.8, 3, 2, 1, 2.5, 2.2, 3]
                  }
                ]}
                title="Avg. Visit Time"
                value="00:02:36"
              />
            </Grid>

          
          
            <Grid
              xs={12}
              md={7}
            >
              <OverviewTransactions
                transactions={[
                  {
                    id: 'd46800328cd510a668253b45',
                    amount: 25000,
                    createdAt: addDays(now, 1),
                    currency: 'usd',
                    sender: 'Jason Barnett',
                    status: 'confirmed',
                    type: 'receive'
                  },
                  {
                    id: 'b4b19b21656e44b487441c50',
                    amount: 226843,
                    createdAt: addDays(now, 3),
                    currency: 'usd',
                    sender: 'Mark Johnson',
                    status: 'on_hold',
                    type: 'receive'
                  },
                  {
                    id: '56c09ad91f6d44cb313397db',
                    amount: 91823,
                    createdAt: addDays(now, 4),
                    currency: 'usd',
                    sender: 'David McCurrach',
                    status: 'failed',
                    type: 'send'
                  }
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              md={5}
            >
              <OverviewEvents
                events={[
                  {
                    id: '3bfa0bc6cbc99bf747c94d51',
                    createdAt: addDays(now, 1),
                    description: '17:00 to 18:00',
                    title: 'Meeting with Partners'
                  },
                  {
                    id: 'dd6c8ce8655ac222b01f24f9',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: '401k Webinar'
                  },
                  {
                    id: 'f274902e2bf226865b3cf947',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
                  },
                  {
                    id: 'd2a66e24110f52acb0cd0b9f',
                    createdAt: addDays(now, 7),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
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
