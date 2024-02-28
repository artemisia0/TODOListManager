import {useState, React} from 'react';
import {createRoot} from 'react-dom/client';
import "./index.css";


function App() {
		const [tableRows, setTableRows] = useState();

		/*
		fetch("http://localhost:8080/api").then(
				res => res.json()
		).then(
				res => {
						const rows = [];
						res.forEach(elem => rows.push(
								<tr>
										<td>elem.id</td>
										<td>elem.contents</td>
								</tr>
						));
						setTableRows(rows);
						console.log(rows);
				}
		);
		*/
		
		return (
				<div>
						<div>
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
						<div>
								<input type="text" placeholder="ID">
								</input>
								<input type="text" placeholder="Contents">
								</input>
						</div>
						<br></br>
						<div>
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
