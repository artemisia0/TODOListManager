import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteButton({updateTable, index}) {
  const callback = async () => {
    const query = `
    mutation {
      deleteItem(index: ${index})
    }
    `;

    await fetch("http://localhost:8080/api", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query})
    });

    await updateTable();
  };

	return (
		<Button variant="outlined" size="small" onClick={callback}>
			<DeleteIcon />
			Delete
		</Button>
	);
}
