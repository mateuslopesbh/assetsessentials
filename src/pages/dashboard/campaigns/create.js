import { useCallback, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { BreadcrumbsSeparator } from 'src/components/breadcrumbs-separator';
import { FileDropzone } from 'src/components/file-dropzone';
import { QuillEditor } from 'src/components/quill-editor';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { paths } from 'src/paths';
import { fileToBase64 } from 'src/utils/file-to-base64';
import { Divider } from '@mui/material';

const initialCover = '/assets/covers/abstract-1-4x3-large.png';

const campaignType = [
  { text: 'Nurture', value: 'nurture' },
  { text: 'Acquisition', value: 'acquisition' },
  { text: 'Retention', value: 'retention' },
  { text: 'Renewal', value: 'renewal' }
];

const audiences = [
  { text: 'Recent Married', value: 'JE' },
  { text: 'New Customers', value: 'JO' },
  { text: 'Pending Registration Data', value: 'KZ' },
  { text: 'Newsletter', value: 'KE' }
];

const channels = [
  { text: 'Email', value: 'email' },
  { text: 'SMS', value: 'sms' },
  { text: 'Push', value: 'push' }
];

const templates = [
  { text: 'Engagement', value: 'temp1' },
  { text: 'Welcome', value: 'temp2' },
  { text: 'Products', value: 'temp3' },
  { text: 'Newsletter', value: 'temp4' }
];


const Page = () => {
  const [cover, setCover] = useState(initialCover);

  usePageView();

  const handleCoverDrop = useCallback(async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  }, []);

  const handleCoverRemove = useCallback(() => {
    setCover(null);
  }, []);

  return (
    <>
      <Seo title="Microsite: Page Create" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Typography variant="h3">
              Create Campaign
            </Typography>
            <Breadcrumbs separator={<BreadcrumbsSeparator />}>
              <Link
                color="text.primary"
                component={RouterLink}
                href={paths.dashboard.index}
                variant="subtitle2"
              >
                Dashboard
              </Link>
              <Link
                color="text.primary"
                component={RouterLink}
                href={paths.dashboard.campaigns}
                variant="subtitle2"
              >
                Campaigns
              </Link>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Create
              </Typography>
            </Breadcrumbs>
          </Stack>
          <Card
            elevation={16}
            sx={{ p: 2, mt: 2, mb: 2 }}
          >
            <Grid
              container
              spacing={2}
            >

              <Grid
                xs={12}
                md={2}
              >
                <Autocomplete
                  getOptionLabel={(option) => option.text}
                  options={campaignType}
                  renderInput={(params) => (
                    <TextField {...params}
                      fullWidth
                      label="Campaign Type"
                      name="type"
                    />
                  )}
                />
              </Grid>
              <Grid
                xs={12}
                md={3}
              >
                <Autocomplete
                  getOptionLabel={(option) => option.text}
                  options={audiences}
                  renderInput={(params) => (
                    <TextField {...params}
                      fullWidth
                      label="Audience"
                      name="audience"
                    />
                  )}
                />
              </Grid>
              <Grid
                xs={12}
                md={2}
              >
                <Autocomplete
                  getOptionLabel={(option) => option.text}
                  options={channels}
                  renderInput={(params) => (
                    <TextField {...params}
                      fullWidth
                      label="Delivery Mode"
                      name="channel"
                    />
                  )}
                />
              </Grid>
              <Grid
                xs={12}
                md={2}
              >
                <Autocomplete
                  getOptionLabel={(option) => option.text}
                  options={templates}
                  renderInput={(params) => (
                    <TextField {...params}
                      fullWidth
                      label="Template Design"
                      name="template"
                    />
                  )}
                />
              </Grid>
              <Grid
                xs={12}
                md={3}
              >
                <Button
                  component={RouterLink}
                  href={paths.dashboard.campaigns.createCampaign}
                  variant="contained"
                >
                  Create Campaign
                </Button>
              </Grid>
            </Grid>
           

             
            
          </Card>

          <Typography variant="subtitle1" sx={{mt: 2, mb: 2}} >
              Suggested Campaigns
          </Typography>


          <Stack direction="row"  spacing={3}>
            <Card sx={{width: '33%'}}>
              <CardContent>
                <Typography variant="h6">
                   Email
                </Typography>
                <Divider sx={{mt: 2, mb: 2}} />
                <Typography variant="h5" sx={{mt: 2, mb: 2}}>
                   Schedule Personal Property and Water Inspection
                </Typography>
                <Typography variant="body2">
                   Audience: Recent Married
                </Typography>
                <Typography variant="body2">
                   One Time Campaign
                </Typography>
                <Button
                  sx={{mt: 2, mb: 2}}
                  component={RouterLink}
                  href={paths.dashboard.campaigns.createCampaign}
                  variant="contained"
                >
                  Run Campaign
                </Button>
              </CardContent>
            </Card>

            <Card sx={{width: '33%'}}>
              <CardContent>
                <Typography variant="h6">
                   Email
                </Typography>
                <Divider sx={{mt: 2, mb: 2}} />
                <Typography variant="h5" sx={{mt: 2, mb: 2}}>
                   Update your user information
                </Typography>
                <Typography variant="body2">
                   Audience: Pending registration data
                </Typography>
                <Typography variant="body2">
                   One Time Campaign
                </Typography>
                <Button
                  sx={{mt: 2, mb: 2}}
                  component={RouterLink}
                  href={paths.dashboard.campaigns.createCampaign}
                  variant="contained"
                >
                  Run Campaign
                </Button>
              </CardContent>
            </Card>

            


          </Stack>
          <Box
            sx={{
              display: {
                sm: 'none'
              },
              mt: 2
            }}
          >
            <Button
              component={RouterLink}
              href={paths.dashboard.blog.postDetails}
              variant="contained"
            >
              Publish changes
            </Button>
          </Box>
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
