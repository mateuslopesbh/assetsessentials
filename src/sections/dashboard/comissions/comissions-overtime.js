import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';

import { Chart } from 'src/components/chart';

const chartSeries = [
  {
    name: 'New Business',
    data: [1031, 1040, 1108, 1900, 800, 600, 1050, 1120, 1080, 1142, 920, 940]
  },
  {
    name: 'Renewal Business',
    data: [2850, 6050, 800, 5000, 2504, 605, 2030, 18000, 4096, 5140, 3130, 2100]
  }
];

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.warning.main
    ],
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'solid',
      opacity: 0
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    markers: {
      strokeColors: theme.palette.background.paper,
      size: 6
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  };
};

export const ComissionsOvertime = () => {
  const chartOptions = useChartOptions();

  return (
    
      <Card>
        <CardContent>
          <Chart
            height={330}
            options={chartOptions}
            series={chartSeries}
            type="area"
          />
        </CardContent>
      </Card>
  );
};
