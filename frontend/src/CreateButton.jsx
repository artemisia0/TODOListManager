import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


export default function CreateButton() {
	return (
		<Button variant="outlined" size="small">
			<FavoriteBorderIcon />
			Create
		</Button>
	);
}
