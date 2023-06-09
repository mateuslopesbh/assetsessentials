import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import numeral from 'numeral';

export const BigNumber = (props) => {
  const { comission, policiesSold } = props;

  return (
    <Card sx={{ width: '100%' }}>
      
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
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            color="text.primary"
            variant="h4"
          >
            {numeral(comission).format(`$0,0`)}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Comission
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            color="text.primary"
            variant="h4"
          >
            {policiesSold}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Policies Sold
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};

BigNumber.propTypes = {
  comission: PropTypes.number.isRequired,
  policiesSold: PropTypes.number.isRequired
};
