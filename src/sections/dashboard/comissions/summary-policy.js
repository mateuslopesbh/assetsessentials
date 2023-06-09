import { format, subDays, subHours } from 'date-fns';
import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const now = new Date();

const policyComissions = [
  {
    currency: '$',
    invoiceNumber: '097125',
    policyNumber: 'NPP80577725',
    businessType: 'New', 
    agentComission: 0.1,
    premium: 584.00 
  },
  {
    currency: '$',
    invoiceNumber: '149952-R',
    policyNumber: 'NN750784',
    businessType: 'Renew', 
    agentComission: 0.1,
    premium: 750.00 
  },
  {
    currency: '$',
    invoiceNumber: '164452-R',
    policyNumber: 'NN750784',
    businessType: 'Renew', 
    agentComission: 0.1,
    premium: 358.00 
  },
  {
    currency: '$',
    invoiceNumber: '115668',
    policyNumber: 'HUB00039697',
    businessType: 'New', 
    agentComission: 0.075,
    premium: 1515.00 
  },
  {
    currency: '$',
    invoiceNumber: '149952-R',
    policyNumber: 'NN750784',
    businessType: 'Renew', 
    agentComission: 0.1,
    premium: 750.00 
  },
  {
    currency: '$',
    invoiceNumber: '164452-R',
    policyNumber: 'NN750784',
    businessType: 'Renew', 
    agentComission: 0.1,
    premium: 358.00 
  }
]




export const SummaryPolicy = () => {

  const policyQty = policyComissions.length;
  const totalComission = numeral(policyComissions.map(i=>i.premium*i.agentComission).reduce((a,b)=>a+b)).format(`$0,0.00`);

      
  return (
  <Typography variant="h6">
      {policyQty} Policies Sold &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{totalComission} total comission 
  </Typography>
);

}