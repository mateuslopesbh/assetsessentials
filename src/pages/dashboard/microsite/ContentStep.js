import React, { useState } from 'react';
import { Typography, TextField, Button, FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';

// Actual image URLs
const imageUrls = [
  'https://p1.pxfuel.com/preview/202/912/44/manhattan-new-york-ny-nyc.jpg', // Image 1 URL
  'https://cdn.vox-cdn.com/thumbor/3fkrVQDglO59JMc1P80adoOjyYw=/0x144:2000x1191/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/18842351/190219_10_19_04_5DSR5554.jpg', // Image 2 URL
  'https://cdn.vox-cdn.com/thumbor/FDb9KyS9ymLMCbz3ME4pirpdKN4=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13707492/171109_06_43_15_5DS_9875.jpg', // Image 3 URL
];

const ContentStep = ({ formData, setFormData }) => {
  const [sections, setSections] = useState(formData.sections || [{ title: '', content: '', image: '' }]);

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const updatedSections = [...sections];
    updatedSections[index] = {
      ...updatedSections[index],
      [field]: value,
    };
    setSections(updatedSections);
    setFormData((prevData) => ({
      ...prevData,
      content: {
        ...prevData.content,
        sections: updatedSections,
      },
    }));
  };

  const handleAddSection = () => {
    if (sections.length >= 5) return; // Limit the repeater to a maximum of 5 sections
    setSections([...sections, { title: '', content: '', image: '' }]);
  };

  const handleRemoveSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
    setFormData((prevData) => ({
      ...prevData,
      content: {
        ...prevData.content,
        sections: updatedSections,
      },
    }));
  };

  return (
    <div>
      <Typography variant="h6">Content</Typography>
      {sections.map((section, index) => (
        <div key={index}>
          <TextField
            name={`title-${index}`}
            label="Section Title"
            value={section.title || ''}
            onChange={(e) => handleInputChange(e, index, 'title')}
            fullWidth
            margin="normal"
          />
          <TextField
            name={`content-${index}`}
            label="Section Content"
            value={section.content || ''}
            onChange={(e) => handleInputChange(e, index, 'content')}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Typography variant="subtitle1">Section Image:</Typography>
          <RadioGroup
            row
            name={`image-${index}`}
            value={section.image || ''}
            onChange={(e) => handleInputChange(e, index, 'image')}
          >
            {imageUrls.map((url, i) => (
              <FormControlLabel
                key={i}
                value={url}
                control={<Radio />}
                label={
                  <Box component="img" src={url} alt={`Image ${i + 1}`} width={80} height={80} />
                }
              />
            ))}
          </RadioGroup>
          {index > 0 && (
            <Button variant="outlined" onClick={() => handleRemoveSection(index)}>
              Remove Section
            </Button>
          )}
        </div>
      ))}
      {sections.length < 5 && (
        <Button variant="outlined" onClick={handleAddSection}>
          Add Section
        </Button>
      )}
    </div>
  );
};

export default ContentStep;
