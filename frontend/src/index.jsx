import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

import CreateButton from './CreateButton.jsx';
import ReadButton from './ReadButton.jsx';
import UpdateButton from './UpdateButton.jsx';
import DeleteButton from './DeleteButton.jsx';
import IndexInput from './IndexInput.jsx';
import ContentsInput from './ContentsInput.jsx';
import ContentsTable from './ContentsTable.jsx';

import './index.css';

import ButtonGroup from '@mui/material/ButtonGroup';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Box, Stack, Container} from '@mui/material';


async function fetchTableData() {
  const gqlRequest = `
  query {
    list {
      index,
      contents
    }
  }
  `;

  const requestBody = {
    "query": gqlRequest
  };

  const response = await fetch("http://localhost:8080/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  });

  const jsonData = await response.json();

  return jsonData.data.list;
}

function App() {
  const [contents, setContents] = useState("");
  const [index, setIndex] = useState(0);
  const [tableData, setTableData] = useState([]);

  const updateTable = () => {
    fetchTableData()
      .then(
        res => setTableData(res)
      );
  };

  console.log("rerendered");

	return (
		<Box>
			<Container>
				<Stack spacing={4} alignItems="center">

					<Box>
						<ButtonGroup variant="outlined">
							<CreateButton updateTable={updateTable}
		                        contents={contents} />
              <ReadButton   tableData={tableData}
                            index={index}
                            setContents={setContents} />
              <UpdateButton updateTable={updateTable}
                            index={index}
                            contents={contents} />
              <DeleteButton updateTable={updateTable}
                            index={index} />
            </ButtonGroup>
          </Box>

          <Box>
            <Stack spacing={1}>
              <Container>
								<IndexInput index={index} setIndex={setIndex} />
							</Container>
							<Container>
								<ContentsInput contents={contents} setContents={setContents} />
							</Container>
						</Stack>
					</Box>
					
					<Box>
						<ContentsTable tableData={tableData} />
					</Box>

				</Stack>
			</Container>
		</Box>
	);
}

function Index() {
	const theme = createTheme({
		palette: {                                                            
			mode: 'light',
		}
	});
	
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
