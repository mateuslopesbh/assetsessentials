import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

export const BigNumber = (props) => {
  const { amount, description } = props;

  return (
    <Card sx={{ width: '100%' }}>

      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            color="text.primary"
            variant="h4"
          >
            ${amount}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

BigNumber.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};
