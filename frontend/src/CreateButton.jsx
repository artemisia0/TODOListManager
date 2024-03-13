import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';


export default function CreateButton({updateTable, contents}) {
	const callback = async () => {
	  const query = `
	  mutation {
	    createItem(contents: "${contents}")
    }
	  `;

	  const requestBody = {query};

	  await fetch("http://localhost:8080/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

	  await updateTable();
  };

	return (
		<Button variant="outlined" size="small" onClick={callback}>
			<CreateIcon />
			Create
		</Button>
	);
}

