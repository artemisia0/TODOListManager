import {useState, React} from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";


function App() {
	const [tableRows, setTableRows] = useState();

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
	fetch("http://localhost:8080/api", {
		method: "POST",
		mode: "same-origin",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(jsonBody)
	}).then(
		res => res.json()
	).then(
		res => {
			const inputList = res.data.list;
			const rows = [];
			inputList.forEach(elem => rows.push(
				<tr>
					<td>{elem.id}</td>
					<td>{elem.contents}</td>
				</tr>
			));
			setTableRows(rows);
		}
	);
	
	return (
		<div>
			<div className="with-shadow">
				<button>
					Create
				</button>
				<button>
					Read
				</button>
				<button>
					Update
				</button>
				<button>
					Delete
				</button>
			</div>
			<br></br>
			<div className="with-shadow">
				<input type="text" placeholder="ID">
				</input>
				<br></br>
				<input type="text" placeholder="Contents">
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
