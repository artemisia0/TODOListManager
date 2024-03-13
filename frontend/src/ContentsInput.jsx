import TextField from '@mui/material/TextField';


export default function ContentsInput({contents, setContents}) {
	return <TextField variant="outlined" label="Item contents" size="small" 
	                  onChange={(e) => setContents(e.target.value)}
	                  value={contents} />;
}

