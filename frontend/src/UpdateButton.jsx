import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';


export default function UpdateButton({updateTable, index, contents}) {
  const callback = async () => {
    const query = `
    mutation {
      updateItem(index: ${index}, contents: "${contents}")
    }
    `;

    await fetch("http://localhost:8080/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({query})
    });

    await updateTable();
  };

	return (
		<Button variant="outlined" size="small" onClick={callback}>
			<UpdateIcon />
			Update
		</Button>
	);
}
