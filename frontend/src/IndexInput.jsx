import TextField from '@mui/material/TextField';


export default function IndexInput({index, setIndex}) {
	return <TextField variant="outlined" label="Item index" size="small"
	                  onChange={(e) => setIndex(parseInt(e.target.value))}
                    value={index} />
}
