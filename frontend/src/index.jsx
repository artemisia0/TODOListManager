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
		<Grid container spacing={2}>
			<Grid item xs={6} justifyContent="center" display="flex">
				<ButtonGroup variant="outlined" size="small">
					<CreateButton />
					<ReadButton />
					<UpdateButton />
					<DeleteButton />
				</ButtonGroup>
			</Grid>

			<Grid item xs={6} justifyContent="center" display="flex">
				<Stack spacing={1} direction="row">
					<IndexInput />
					<ContentsInput />
				</Stack>
			</Grid>
			
			<Grid item xs={12} justifyContent="center" display="flex">
				<ContentsTable />
			</Grid>
		</Grid>
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
