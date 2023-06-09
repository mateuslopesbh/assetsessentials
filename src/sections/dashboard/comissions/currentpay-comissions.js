import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import SvgIcon from '@mui/material/SvgIcon';
import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { PolicyPerformance } from './policy-performance';
import { OvertimeTable } from './overtime-table'


import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';


export const CurrentPay = (props) => {
  const { newBusiness, renewBusiness } = props;
  const totalRevenue = newBusiness + renewBusiness;

  return (
    <Card sx={{ width: '100%' }}>
         <CardHeader
        title="Current Pay Period"
        sx={{ pb: 0 }}
      />
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack
                        alignItems="left"
                        direction={{
                        xs: 'column',
                        sm: 'column'
                        }}
                        spacing={0}
                        sx={{
                        px: 4,
                        py: 0
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                Payout
                            </Typography>
                            <Typography
                                color="text.primary"
                                variant="h4"
                            >
                                {totalRevenue}
                            </Typography>
                            <PolicyPerformance />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
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
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
};

CurrentPay.propTypes = {
  newBusiness: PropTypes.number.isRequired,
  renewBusiness: PropTypes.number.isRequired
};
