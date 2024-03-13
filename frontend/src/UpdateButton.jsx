import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';


export default function UpdateButton({updateTable, index, contents}) {
  const callback = () => {
    updateTable();
  };

	return (
		<Button variant="outlined" size="small" onClick={callback}>
			<UpdateIcon />
			Update
		</Button>
	);
}
