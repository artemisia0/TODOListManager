import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteButton({updateTable, index}) {
  const callback = () => {
    updateTable();
  };

	return (
		<Button variant="outlined" size="small" onClick={callback}>
			<DeleteIcon />
			Delete
		</Button>
	);
}
