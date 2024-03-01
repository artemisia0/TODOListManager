import {useState, React} from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";


let setTableRowsFunction = null;

async function fetchedRows() {	
	const gqlQuery = `
query {
  list {
    id,
    contents
  }
}
`;
	const jsonBody = {
		"query": gqlQuery
	};
	const response = await fetch("http://localhost:8080/api", {
		method: "POST",
		mode: "same-origin",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(jsonBody)
	});
	const jsonData = await response.json();	
	const inputList = jsonData.data.list;
	const rows = [];
	inputList.forEach(elem => rows.push(
		<tr>
			<td>{elem.id}</td>
			<td>{elem.contents}</td>
		</tr>
	));
	return rows;
}

function updateTableRows() {
	fetchedRows().then(res => setTableRowsFunction(res));
}

function App() {
	const [tableRows, setTableRows] = useState();
	setTableRowsFunction = setTableRows;

	const [IDInput, setIDInput] = useState();
	const [contentsInput, setContentsInput] = useState();
	
	console.log("!!! Rerendered !!!");	

	const gqlFetch = (gqlQuery) => {
		const jsonBody = {
			"query": gqlQuery
		};
		let returnValue = undefined;
		fetch("http://localhost:8080/api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			mode: "same-origin",
			body: JSON.stringify(jsonBody)
		});
		updateTableRows();
	};

	const onCreate = () => {
		gqlFetch(`
mutation {
  createItem(item: {id: ${IDInput}, contents: "${contentsInput}"}) {
    id,
    contents
  }
}
`);
	};
	
	const onRead = () => {
		console.log("Read:" + IDInput + "|" + contentsInput);
	};

	const onUpdate = () => {
		console.log(IDInput + "|" + contentsInput);
	};

	const onDelete = () => {
		console.log(IDInput + "|" + contentsInput);
	};
	
	const onIDInput = (e) => setIDInput(e.target.value);
	const onContentsInput = (e) => setContentsInput(e.target.value);
	
	return (
		<div>
			<div className="with-shadow">
				<button onClick={onCreate}>
					Create
				</button>
				<button onClick={onRead}>
					Read
				</button>
				<button onClick={onUpdate}>
					Update
				</button>
				<button onClick={onDelete}>
					Delete
				</button>
			</div>
			<br></br>
			<div className="with-shadow">
				<input type="text" placeholder="ID" onInput={onIDInput}>
				</input>
				<br></br>
				<input type="text" placeholder="Contents"
					   onInput={onContentsInput}>
				</input>
			</div>
			<br></br>
			<div className="with-shadow">
				<table className="bordered">
					<thead>
						<tr>
							<th>
								ID
							</th>
							<th>
								Contents
							</th>
						</tr>
					</thead>
					<tbody>
						{tableRows}
					</tbody>
				</table>
			</div>
		</div>
	);
}


createRoot(document.getElementById('root')).render(<App />);
updateTableRows();
