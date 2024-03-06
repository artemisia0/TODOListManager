import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';


export default function CreateButton() {
	return (
		<Button variant="outlined" size="small">
			<CreateIcon />
			Create
		</Button>
	);
}
