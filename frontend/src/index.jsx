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
import Paper from '@mui/material/Paper';
import {green} from '@mui/material/colors';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Container, Grid, Stack, Box} from '@mui/material';


function App() {
	return (
		<Box display="flex" alignItems="center" justifyContent="center">
			<Stack spacing={3} display="flex" alignItems="center">
				<Box display="flex" alignItems="center">
					<ButtonGroup variant="outlined" size="small">
						<CreateButton />
						<ReadButton />
						<UpdateButton />
						<DeleteButton />
					</ButtonGroup>
				</Box>
				<Box>
					<Stack spacing={1} display="flex" alignItems="center">
						<IndexInput />
						<ContentsInput />
					</Stack>
				</Box>
				<Box display="flex" alignItems="center">
					<ContentsTable />
				</Box>
			</Stack>
		</Box>
	);
}

function Index() {
	const theme = createTheme({
		palette: {                                                            
			mode: 'dark',
		}
	});
	
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
