import React, { useState } from 'react';
import { Typography, TextField } from '@mui/material';

const SocialStep = ({ formData, setFormData }) => {
  const [linkedin, setLinkedin] = useState(formData.linkedin || '');
  const [twitter, setTwitter] = useState(formData.twitter || '');
  const [youtube, setYoutube] = useState(formData.youtube || '');

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    switch (field) {
      case 'linkedin':
        setLinkedin(value);
        break;
      case 'twitter':
        setTwitter(value);
        break;
      case 'youtube':
        setYoutube(value);
        break;
      default:
        break;
    }
    setFormData((prevData) => ({
      ...prevData,
      social: {
        ...prevData.social,
        linkedin: field === 'linkedin' ? value : prevData.social.linkedin,
        twitter: field === 'twitter' ? value : prevData.social.twitter,
        youtube: field === 'youtube' ? value : prevData.social.youtube,
      },
    }));
  };

  return (
    <div>
      <Typography variant="h6">Social</Typography>
      <TextField
        name="linkedin"
        label="Linkedin"
        value={linkedin}
        onChange={(e) => handleInputChange(e, 'linkedin')}
        fullWidth
        margin="normal"
      />
      <TextField
        name="twitter"
        label="Twitter"
        value={twitter}
        onChange={(e) => handleInputChange(e, 'twitter')}
        fullWidth
        margin="normal"
      />
      <TextField
        name="youtube"
        label="Youtube"
        value={youtube}
        onChange={(e) => handleInputChange(e, 'youtube')}
        fullWidth
        margin="normal"
      />
    </div>
  );
};

export default SocialStep;
