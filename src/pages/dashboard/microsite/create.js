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
              Create a new microsite
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
                href={paths.dashboard.microsite.index}
                variant="subtitle2"
              >
                Microsite Manager
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
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              mb: 8,
              mt: 6,
              px: 3,
              py: 2
            }}
          >
            <Typography variant="subtitle1">
              Hello, Admin
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Button
                color="inherit"
                component={RouterLink}
                href={paths.dashboard.microsite.index}
              >
                Cancel
              </Button>
              <Button
                component={RouterLink}
                href={paths.dashboard.microsite.index}
                variant="contained"
              >
                Request microsite approval
              </Button>
              <IconButton>
                <SvgIcon>
                  <DotsHorizontalIcon />
                </SvgIcon>
              </IconButton>
            </Stack>
          </Card>
          <Stack spacing={3}>
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
                      Basic Information
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    md={8}
                  >
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Page Name"
                        name="userName"
                      />
                      <TextField
                        fullWidth
                        label="Page Tagline"
                        name='profileTagline'
                      />
                      <QuillEditor
                      placeholder="Brief Description"
                      sx={{ height: 150 }}
                    />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

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
                      Contact
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    lg={8}
                  >
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="title"
                      />
                      <TextField
                        fullWidth
                        label="Phone Number"
                      />
                      <TextField
                        fullWidth
                        label="Zip Code"
                        name="zipcode"
                      />
                      <TextField
                        fullWidth
                        label="Street Address"
                      />
                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                      />
                      <TextField
                        fullWidth
                        label="State"
                      />
                      </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            
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
                          label="Section Title"
                          name="sectionTitle"
                        />
                      <QuillEditor
                        placeholder="Write something"
                        sx={{ height: 330 }}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>


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
                      Team Members
                    </Typography>
                  </Grid>
                  <Grid 
                    xs={12}
                    md={8}
                  >
                    <Stack spacing={3}>
                      <TextField
                          fullWidth
                          label="Member Name"
                          name="sectionTitle"
                        />
                      <QuillEditor
                        placeholder="Description"
                        sx={{ height: 330 }}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>



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
                      Meta
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    lg={8}
                  >
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="SEO title"
                        name="title"
                      />
                      <TextField
                        fullWidth
                        label="SEO description"
                      />
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
