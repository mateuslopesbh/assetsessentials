import { format, subDays, subHours } from 'date-fns';
import numeral from 'numeral';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Box from '@mui/material/Box';
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


const sortOptions = [
  {
    label: 'All',
    value: 'businessType|all'
  },
  {
    label: 'New',
    value: 'businessType|new'
  },
  {
    label: 'Renew',
    value: 'businessType|renew'
  }
];


export const TablePolicy = () => (
  <Box
  >
    <Card>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={2}
        sx={{ p: 3 }}
      >
        <OutlinedInput
          fullWidth
          placeholder="Search Product Comission"
          startAdornment={(
            <InputAdornment position="start">
              <SvgIcon>
                <SearchMdIcon />
              </SvgIcon>
            </InputAdornment>
          )}
          sx={{
            maxWidth: '100%',
            width: 500
          }}
        />
        <TextField
          fullWidth
          label="BusinessType"
          name="business"
          select
          SelectProps={{ native: true }}
          sx={{
            maxWidth: '100%',
            width: 240
          }}
        >
          {sortOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </TextField>        
      </Stack>

      <Scrollbar>
        <Table sx={{ minWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                Invoice Number
              </TableCell>
              <TableCell>
                Policy Number
              </TableCell>
              <TableCell>
                Business Type
              </TableCell>
              <TableCell>
                Premium
              </TableCell>
              <TableCell>
                Earned Commission
              </TableCell>
              <TableCell>
                Agent Commission
              </TableCell>             
            </TableRow>
          </TableHead>
          <TableBody>
            {policyComissions.map((comission) => {
              const premium = numeral(comission.premium).format(`${comission.currency}0,0.00`);
              const earnerComission = numeral(comission.premium*comission.agentComission).format(`${comission.currency}0,0.00`);
              const agentComission = numeral(comission.agentComission).format(`0.0%`);

              return (
                <TableRow
                  hover
                  key={comission.invoiceNumber}
                >
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>                    
                      {comission.invoiceNumber}
                  </TableCell>
                  <TableCell>
                    {comission.policyNumber}
                  </TableCell>
                  <TableCell>
                    {comission.businessType}
                  </TableCell>
                  <TableCell>
                    {premium}
                  </TableCell>
                  <TableCell>
                    {earnerComission}
                  </TableCell>
                  <TableCell>
                    {agentComission}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={policyComissions.length}
        onPageChange={() => {
        }}
        onRowsPerPageChange={() => {
        }}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  </Box>
);
