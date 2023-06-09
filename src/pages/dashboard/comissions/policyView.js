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

import { OverviewBanner } from 'src/sections/dashboard/overview/overview-banner';
import { OverviewDoneTasks } from 'src/sections/dashboard/overview/overview-done-tasks';
import { OverviewEvents } from 'src/sections/dashboard/overview/overview-events';
import { OverviewInbox } from 'src/sections/dashboard/overview/overview-inbox';
import { OverviewTransactions } from 'src/sections/dashboard/overview/overview-transactions';
import { OverviewPendingIssues } from 'src/sections/dashboard/overview/overview-pending-issues';
import { OverviewSubscriptionUsage } from 'src/sections/dashboard/overview/overview-subscription-usage';
import { OverviewHelp } from 'src/sections/dashboard/overview/overview-help';
import { OverviewJobs } from 'src/sections/dashboard/overview/overview-jobs';
import { OverviewOpenTickets } from 'src/sections/dashboard/overview/overview-open-tickets';
import { OverviewTips } from 'src/sections/dashboard/overview/overview-tips';


import { AnalyticsStats } from 'src/sections/dashboard/analytics/analytics-stats';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import ArrowDownIcon from '@untitled-ui/icons-react/build/esm/ArrowDown';
import ArrowUpIcon from '@untitled-ui/icons-react/build/esm/ArrowUp';

import { EcommerceCostBreakdown } from 'src/sections/dashboard/ecommerce/ecommerce-cost-breakdown';
import { EcommerceSalesByCountry } from 'src/sections/dashboard/ecommerce/ecommerce-sales-by-country';
import { EcommerceSalesRevenue } from 'src/sections/dashboard/ecommerce/ecommerce-sales-revenue';
import { EcommerceProducts } from 'src/sections/dashboard/ecommerce/ecommerce-products';
import { OverviewStats } from 'src/sections/dashboard/overview/overview-stats';

import { SummaryPolicy } from 'src/sections/dashboard/comissions/summary-policy';
import { TablePolicy } from 'src/sections/dashboard/comissions/table-policy';



const now = new Date();

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Comissions by Policy" />
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
                    Comissions By Policy
                  </Typography>
                  <SummaryPolicy />
                </div>
                
              </Stack>
            </Grid>
            
            <Grid xs={12} md={12}>

              <Button variant="contained">Export Report</Button>
              <TablePolicy />
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
