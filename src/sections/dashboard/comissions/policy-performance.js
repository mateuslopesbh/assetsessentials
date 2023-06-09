import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const PolicyPerformance = () => (
  <Box
    sx={{
     
      pt: 3
    }}
  >
        <Stack spacing={2}>
          <LinearProgress
            value={5}
            variant="determinate"
          />
          <Typography
            color="text.primary"
            variant="h5"
          >
            5 Policies sold
          </Typography>
          <Typography
            color="text.secondary"
            variant="subtitle2"
          >
            Sell 95 more policies to enter the top seller board
          </Typography>
        </Stack>
  </Box>
);
