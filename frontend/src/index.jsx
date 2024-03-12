import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

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


function App() {
	return (
		<Box>
			<Container>
				<Stack spacing={4} alignItems="center">
					<Box>
						<ButtonGroup variant="outlined">
							<CreateButton />
							<ReadButton />
							<UpdateButton />
							<DeleteButton />
						</ButtonGroup>
					</Box>

					<Box>
						<Stack spacing={1}>
							<Container>
								<IndexInput />
							</Container>
							<Container>
								<ContentsInput />
							</Container>
						</Stack>
					</Box>
					
					<Box>
						<ContentsTable />
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
