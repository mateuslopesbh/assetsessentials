import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, Button, TextareaAutosize } from '@mui/material';

const ConfirmationStep = ({ formData, setFormData }) => {
  const [termsAccepted, setTermsAccepted] = useState(formData.termsAccepted || false);
  const [additionalText, setAdditionalText] = useState('');

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setTermsAccepted(checked);
    /*setFormData((prevData) => ({
      ...prevData,
      termsAccepted: checked,
    }));*/
  };

  const handleTextareaChange = (e) => {
    const { value } = e.target;
    setAdditionalText(value);
  };

  return (
    <div>
      <Typography variant="h6">Confirmation</Typography>
      
      <TextareaAutosize
        rows={6}
        placeholder="If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable), and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the entire understanding and agreement between us with respect to the subject matter contained herein and supersede any other agreement, proposals and communications, written or oral, between our representatives and you with respect to the subject matter hereof, including any terms and conditions on any of customer's documents or purchase orders."
        value={additionalText}
        onChange={handleTextareaChange}
        style={{ width: '100%', resize: 'vertical', marginTop: '1rem' }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={termsAccepted}
            onChange={handleCheckboxChange}
          />
        }
        label="I agree to the terms & conditions"
      />
    </div>
  );
};

export default ConfirmationStep;
