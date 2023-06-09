import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Typography, TextField, Button, FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';
import aemApiClient from 'src/api/aem-assets/aemApiClient';

const BasicInformationStep = ({ formData, setFormData }) => {


  console.log(formData)

  const [pageName, setPageName] = useState(formData.pageName || '');
  const [pageTagline, setPageTagline] = useState(formData.pageTagline || '');
  const [bannerImage, setBannerImage] = useState(formData.bannerImage || '');
  const [teamImage, setTeamImage] = useState(formData.teamImage || '');
  const [briefDescription, setBriefDescription] = useState(formData.briefDescription || '');

  const [bannerImagesCache, setBannerImagesCache] = useState([]);
  const [introImagesCache, setIntroImagesCache] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBannerImages = useCallback(async () => {
    try {
      const imageEntities = await aemApiClient.getImages('/securfinancial/advisors/approved-content/page-banner.json');
      setBannerImagesCache(imageEntities);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchIntroImages = useCallback(async () => {
    try {
      const imageEntities = await aemApiClient.getImages('/securfinancial/advisors/approved-content/intro.json');
      setIntroImagesCache(imageEntities);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchBannerImages();
  }, [fetchBannerImages]);

  useEffect(() => {
    setIsLoading(true);
    fetchIntroImages();
  }, [fetchIntroImages]);


  if (isLoading) {
    return <div>Loading...</div>; // Render a loading state while waiting for the API calls to complete
  }

  const handleInputChange = (e, field) => {
    const { value } = e.target;

    switch (field) {
      case 'pageName':
        setPageName(value);
        break;
      case 'pageTagline':
        setPageTagline(value);
        break;
      case 'bannerImage':
        setBannerImage(value);
        break;
      case 'teamImage':
        setTeamImage(value);
        break;
      case 'briefDescription':
        setBriefDescription(value);
        break;
      default:
        break;
    }
    setFormData((prevData) => ({
      ...prevData,
      pageName: field === 'pageName' ? value : prevData.pageName,
      pageTagline: field === 'pageTagline' ? value : prevData.pageTagline,
      bannerImage: field === 'bannerImage' ? value : prevData.bannerImage,
      teamImage: field === 'teamImage' ? value : prevData.teamImage,
      briefDescription: field === 'briefDescription' ? value : prevData.briefDescription,
    }));
  };

  return (
    <div>
      <Typography variant="h6">Who we are</Typography>
      <TextField
        name="pageName"
        label="Page Name"
        value={pageName}
        onChange={(e) => handleInputChange(e, 'pageName')}
        fullWidth
        margin="normal"
      />
      <TextField
        name="pageTagline"
        label="Page Tagline"
        value={pageTagline}
        onChange={(e) => handleInputChange(e, 'pageTagline')}
        fullWidth
        margin="normal"
      />
      <Typography variant="subtitle2">Banner Image:</Typography>
      <RadioGroup row name="bannerImage" value={bannerImage} onChange={(e) => handleInputChange(e, 'bannerImage')}>
        {bannerImagesCache.map((image) => (
          <FormControlLabel
            key={image.properties.name}
            value={image.links.find((link) => link.rel.includes('content')).href}
            control={<Radio />}
            label={
              <Box component="img" src={image.links.find((link) => link.rel.includes('content')).href} alt={image.properties.name} height={80} />
            }
          />
        ))}
      </RadioGroup>
      <Typography variant="subtitle2">Team Image:</Typography>
      <RadioGroup row name="teamImage" value={teamImage} onChange={(e) => handleInputChange(e, 'teamImage')}>
        {introImagesCache.map((image) => (
          <FormControlLabel
            key={image.properties.name}
            value={image.links.find((link) => link.rel.includes('content')).href}
            control={<Radio />}
            label={
              <Box component="img" src={image.links.find((link) => link.rel.includes('content')).href} alt={image.properties.name} height={80} />
            }
          />
        ))}
      </RadioGroup>
      <TextField
        name="briefDescription"
        label="Brief Description"
        value={briefDescription}
        onChange={(e) => handleInputChange(e, 'briefDescription')}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
    </div>
  );
};

export default BasicInformationStep;
