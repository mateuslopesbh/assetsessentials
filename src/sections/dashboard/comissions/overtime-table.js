import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { Scrollbar } from 'src/components/scrollbar';

export const OvertimeTable = (props) => {
  const { comissions } = props;

  return (
        <Table sx={{ minWidth: '100%' }}>
          <TableBody>            
                <TableRow>                   
                    <TableCell>
                        <Typography
                            noWrap
                            variant="h6"
                        >
                            Comissions
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            noWrap
                            variant="body2"
                        >
                            {comissions.total}
                        </Typography>
                    </TableCell>
                   
                </TableRow>
                <TableRow>                   
                    <TableCell>
                        <Typography
                            noWrap
                            variant="h6"
                        >
                            Carry Forwardbalance
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            noWrap
                            variant="body2"
                        >
                            {comissions.carryFwdBalance}
                        </Typography>
                    </TableCell>
                   
                </TableRow>
                <TableRow>                   
                    <TableCell>
                        <Typography
                            noWrap
                            variant="h6"
                        >
                            Adjustments
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            noWrap
                            variant="body2"
                        >
                            {comissions.total}
                        </Typography>
                    </TableCell>
                   
                </TableRow>
                <TableRow>                   
                    <TableCell>
                        <Typography
                            noWrap
                            variant="h6"
                        >
                            Deductions
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            noWrap
                            variant="body2"
                        >
                            {comissions.total}
                        </Typography>
                    </TableCell>
                   
                </TableRow>
                <TableRow>                   
                    <TableCell>
                        <Typography
                            noWrap
                            variant="h6"
                        >
                            Tax Deductions
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography
                            noWrap
                            variant="body2"
                        >
                            {comissions.total}
                        </Typography>
                    </TableCell>
                   
                </TableRow>
          </TableBody>
        </Table>   
  );
};

OvertimeTable.propTypes = {
  comissions: PropTypes.array.isRequired
};
