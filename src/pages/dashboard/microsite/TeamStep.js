import React, { useState } from 'react';
import { Typography, TextField, Button, FormControlLabel, Radio, RadioGroup, Box } from '@mui/material';

// Actual image URLs
const profileImageUrls = [
  'https://images.ctfassets.net/co0pvta7hzrh/1jJowymFqm1uVHEljFVHrH/96846b4b026b365980904338778299af/steph-liverani-unsplash.jpg?fm=webp', // Profile Image 1 URL
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80', // Profile Image 2 URL
  'https://s3.amazonaws.com/www-inside-design/uploads/2019/03/featureuserpersona-983x740.jpg', // Profile Image 3 URL
];

const TeamStep = ({ formData, setFormData }) => {
  const [teamMembers, setTeamMembers] = useState(formData.teamMembers || [{ name: '', title: '', profileImage: '', content: '' }]);

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index] = {
      ...updatedTeamMembers[index],
      [field]: value,
    };
    setTeamMembers(updatedTeamMembers);
    setFormData((prevData) => ({
      ...prevData,
      team: {
        ...prevData.team,
        teamMembers: updatedTeamMembers,
      },
    }));
  };

  const handleAddMember = () => {
    if (teamMembers.length >= 5) return; // Limit the repeater to a maximum of 5 team members
    setTeamMembers([...teamMembers, { name: '', title: '', profileImage: '', content: '' }]);
  };

  const handleRemoveMember = (index) => {
    const updatedTeamMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedTeamMembers);
    setFormData((prevData) => ({
      ...prevData,
      team: {
        ...prevData.team,
        teamMembers: updatedTeamMembers,
      },
    }));
  };

  return (
    <div>
      <Typography variant="h6">Team</Typography>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <TextField
            name={`name-${index}`}
            label="Member Name"
            value={member.name || ''}
            onChange={(e) => handleInputChange(e, index, 'name')}
            fullWidth
            margin="normal"
          />
          <TextField
            name={`title-${index}`}
            label="Member Title"
            value={member.title || ''}
            onChange={(e) => handleInputChange(e, index, 'title')}
            fullWidth
            margin="normal"
          />
          <Typography variant="subtitle2">Member Image:</Typography>
          <RadioGroup
            row
            name={`profileImage-${index}`}
            value={member.profileImage || ''}
            onChange={(e) => handleInputChange(e, index, 'profileImage')}
          >
            {profileImageUrls.map((url, i) => (
              <FormControlLabel
                key={i}
                value={url}
                control={<Radio />}
                label={
                  <Box component="img" src={url} alt={`Profile Image ${i + 1}`} height={80} />
                }
              />
            ))}
          </RadioGroup>
          <TextField
            name={`content-${index}`}
            label="Member Content"
            value={member.content || ''}
            onChange={(e) => handleInputChange(e, index, 'content')}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          {index > 0 && (
            <Button variant="outlined" onClick={() => handleRemoveMember(index)}>
              Remove Member
            </Button>
          )}
        </div>
      ))}
      {teamMembers.length < 5 && (
        <Button variant="outlined" onClick={handleAddMember}>
          Add Member
        </Button>
      )}
    </div>
  );
};

export default TeamStep;
