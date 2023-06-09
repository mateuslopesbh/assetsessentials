import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import SvgIcon from '@mui/material/SvgIcon';
import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';


export const OverallComissions = (props) => {
  const { newBusiness, renewBusiness } = props;
  const totalRevenue = newBusiness + renewBusiness;

  return (
    <Card sx={{ width: '100%', minHeight: '380px' }}>
         <CardHeader
        title="Overall Comission"
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
                    py: 6
                    }}
                >
                    <div>
                        <MonetizationOnIcon fontSize='large' />                    
                    </div>
                    <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        Total Revenue
                    </Typography>
                    <Typography
                        color="text.primary"
                        variant="h4"
                    >
                        {totalRevenue}
                    </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack
                    alignItems="center"
                    direction={{
                    xs: 'column',
                    sm: 'row'
                    }}
                    spacing={3}
                    sx={{
                    px: 4,
                    py: 3
                    }}
                >
                    <div>
                        <NoteAddIcon fontSize='large' />
                    </div>
                    <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                       New Business
                    </Typography>
                    <Typography
                        color="text.primary"
                        variant="h4"
                    >
                        {newBusiness}
                    </Typography>
                    </Box>
                </Stack>
                <Stack
                    alignItems="center"
                    direction={{
                    xs: 'column',
                    sm: 'row'
                    }}
                    spacing={3}
                    sx={{
                    px: 4,
                    py: 3
                    }}
                >
                    <div>
                        <PublishedWithChangesIcon fontSize='large'  />
                    </div>
                    <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        Renewal Business
                    </Typography>
                    <Typography
                        color="text.primary"
                        variant="h4"
                    >
                        {renewBusiness}
                    </Typography>
                    </Box>
                </Stack>
            </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
};

OverallComissions.propTypes = {
  newBusiness: PropTypes.number.isRequired,
  renewBusiness: PropTypes.number.isRequired
};
