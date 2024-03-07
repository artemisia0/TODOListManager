import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ContentsTable() {
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
					<TableRow>
						<TableCell>0</TableCell>
						<TableCell>Hello!!</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
