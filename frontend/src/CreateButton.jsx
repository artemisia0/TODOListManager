import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';


export default function CreateButton({updateTable, contents}) {
	const callback = () => {
	  console.log("CreateButton pressed!");
	  updateTable();
  };

	return (
		<Button variant="outlined" size="small" onClick={callback}>
			<CreateIcon />
			Create
		</Button>
	);
}

