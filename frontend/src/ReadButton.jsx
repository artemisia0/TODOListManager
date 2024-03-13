import Button from '@mui/material/Button';
import GetAppIcon from '@mui/icons-material/GetApp';


export default function ReadButton({tableData, index, setContents}) {
  const callback = () => {
    setContents(tableData[index].contents);
  };

	return (
		<Button variant="outlined" size="small" onClick={callback}>
			<GetAppIcon />
			Read
		</Button>
	);
}

