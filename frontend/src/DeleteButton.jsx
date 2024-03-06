import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteButton() {
	return (
		<Button variant="outlined" size="small">
			<DeleteIcon />
			Delete
		</Button>
	);
}
