import PropTypes from 'prop-types';
import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

export const LogisticsLateVehicles = (props) => {
  const { amount } = props;

  return (
    <Card>
      <Stack
        spacing={1}
        sx={{ p: 3 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: 'primary.alpha12',
              color: 'primary.main'
            }}
          >
            <SvgIcon>
              <ClockIcon />
            </SvgIcon>
          </Avatar>
          <Typography variant="h5">
            {amount}
          </Typography>
        </Stack>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          Pending campaigns
        </Typography>
      </Stack>
    </Card>
  );
};

LogisticsLateVehicles.propTypes = {
  amount: PropTypes.number.isRequired
};
