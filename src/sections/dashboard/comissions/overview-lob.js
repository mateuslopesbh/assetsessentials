import Slider from 'react-slick';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

export const OverviewLOB = (props) => {
  const { sx, comissions } = props;

  return (
    
          <Slider {...sliderSettings}>
            {comissions.map((comission) => (
              <div key={comission.type}>
                <Card sx={{ width: '95%' }}>
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
                        <img
                            src={`/assets/comission/lob/${comission.icon}`}
                            width={48}
                        />
                        </div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                color="text.secondary"
                                variant="h6"
                            >
                                {comission.type}
                            </Typography>
                            <Typography
                                color="text.primary"
                                variant="h4"
                            >
                                {numeral(comission.total).format(`$0,0.00`)}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                {comission.newBusiness} New Business
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                {comission.renewBusiness} Renewal Business
                            </Typography>
                        </Box>
                    </Stack>
                </Card>                
              </div>
            ))}
          </Slider>
  );
};

OverviewLOB.propTypes = {
  sx: PropTypes.object,
  comissions: PropTypes.array.isRequired
};
