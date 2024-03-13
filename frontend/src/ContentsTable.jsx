import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export default function ContentsTable({tableData}) {
  if (tableData.length > 0) {
    const rows = tableData.map(item =>
      <TableRow key={item.index}>
        <TableCell>{item.index}</TableCell>
        <TableCell>{item.contents}</TableCell>
      </TableRow>
    );

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Contents</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return <Typography variant="overline">Table is empty.</Typography>;
}

