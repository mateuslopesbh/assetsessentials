import { useCallback, useState } from 'react';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
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

const initialCover = '/assets/covers/abstract-1-4x3-large.png';

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
      <Seo title="Microsite: Campaign Creation" />
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
              Campaign Creation
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
                href={paths.dashboard.campaigns.create}
                variant="subtitle2"
              >
                Campaign Manager
              </Link>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Create
              </Typography>
            </Breadcrumbs>
          </Stack>
          
          <Stack sx={{
              mb: 8,
              mt: 6}} spacing={3}>
            
            
            <Card>
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={4}
                  >
                    <Typography variant="h6">
                      Content
                    </Typography>
                  </Grid>
                  <Grid 
                    xs={12}
                    md={8}
                  >
                    <Stack spacing={3}>
                      

                      <TextField
                        fullWidth
                        label="Email Subject"
                        name="subject"
                        required
                        value="Dear FirstName, Update your Information"
                      />
                      <QuillEditor
                        
                        value={"Dear FirstName, Congratulation on you LifeEvent<br><br>Etiam porta neque eget rhoncus lobortis. Sed et turpis ut leo pellentesque venenatis. Aliquam congue vitae dolor elementum convallis. Fusce nisi mauris, euismod at cursus vel, vulputate sed magna. Fusce posuere mi odio, a iaculis purus suscipit sed. Phasellus in semper justo, non mollis magna. Pellentesque at ex suscipit, volutpat augue sed, efficitur lorem. Donec sit amet dolor egestas, pretium dui eu, dictum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus diam ut diam vehicula eleifend.<br><br>Best<br>John Doe"}
                        sx={{ height: 330 }}
                      />
                       <Button
                          component={RouterLink}
                          href={paths.dashboard.campaigns.createCampaign}
                          variant="contained"
                        >
                          Send Campaign
                        </Button>
                    </Stack>
                  </Grid>
                </Grid>
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
