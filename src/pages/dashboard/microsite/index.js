import { useCallback, useEffect, useState } from 'react';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { blogApi } from 'src/api/blog';
import { BreadcrumbsSeparator } from 'src/components/breadcrumbs-separator';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { paths } from 'src/paths';
import { PostNewsletter } from 'src/sections/dashboard/blog/post-newsletter';
import { PostCard } from 'src/sections/dashboard/blog/post-card';

import { MultiStepForm } from 'src/pages/dashboard/microsite/MultiStepForm';
import aemApiClient from 'src/api/aem-assets/aemApiClient';


const Page = () => {

  usePageView();

  return (
    <>
      <Seo title="Microsite: Manage Content" />
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
              Microsite
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
            </Breadcrumbs>
          </Stack>
          <MultiStepForm />
          


          
                  
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
