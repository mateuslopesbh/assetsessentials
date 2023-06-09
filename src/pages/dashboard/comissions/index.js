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


import { OverallComissions } from 'src/sections/dashboard/comissions/overall-comissions';

import { CurrentPay } from 'src/sections/dashboard/comissions/currentpay-comissions';
import { BigNumber } from 'src/sections/dashboard/comissions/big-number';


import { TablePolicy } from 'src/sections/dashboard/comissions/table-policy';
import { OverviewLOB } from 'src/sections/dashboard/comissions/overview-lob';
import { ComissionsOvertime } from 'src/sections/dashboard/comissions/comissions-overtime';
import { OvertimeTable } from 'src/sections/dashboard/comissions/overtime-table'



const now = new Date();

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Comissions Overview" />
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
                    Comissions Overview
                  </Typography>
                </div>
                
              </Stack>
            </Grid>


            <Grid xs={12} md={6}>
                <OverallComissions newBusiness={425} renewBusiness={420} />
            </Grid>
            <Grid xs={12} md={6}>
                <CurrentPay newBusiness={425} renewBusiness={420} />
            </Grid>
            
            


            <Grid xs={12} md={12}>
                <div>
                  <Typography variant="h6">
                    Comissions Over Time
                  </Typography>
                </div>
            </Grid>
            <Grid xs={12} md={8}>
              <ComissionsOvertime />
            </Grid>
            <Grid xs={12} md={4}>
              <Stack
                direction="column"
                justifyContent="space-between"
                spacing={4}
              >
                <item>
                  <BigNumber label="Comission" comission={55308} policiesSold={74} />
                </item>
                <item>
                  <OvertimeTable 
                    comissions={
                      { 
                        total: 18332, 
                        carryFwdBalance: 2243, 
                        adjustments: 1422, 
                        deductions: 484, 
                        taxDeductions: 2332 
                      }
                      } 
                  />
                </item>
              </Stack>
            </Grid>

         
            <Grid xs={12} md={12}>
                <div>
                  <Typography variant="h6">
                    Comissions based on LOB
                  </Typography>
                </div>
                <OverviewLOB 
                sx={{ height: '100%' }}
                comissions={[
                  {
                    icon: 'home-owners.svg',
                    type: 'Homeowners',
                    total: 22701.40,
                    newBusiness: 3,
                    renewBusiness: 17
                  },
                  {
                    icon: 'personal-package.svg',
                    type: 'Personal - Package',
                    total: 23405.04,
                    newBusiness: 9,
                    renewBusiness: 12
                  },
                  {
                    icon: 'umbrella-personal.svg',
                    type: 'Umbrella Personal',
                    total: 303.00,
                    newBusiness: 1,
                    renewBusiness: 1
                  }
                ]}
                />       
            </Grid>
            
            
            <Grid xs={12} md={12}>
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
