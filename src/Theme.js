import { ThemeProvider } from 'styled-components';
import { fonts } from './fonts/fonts';
const blueTheme = {
	primary: '#7EE9F1',
	background: '#021112',
	flowBackground: '#1b292a',
	active: '#FFE70A',
	fonts: { ...fonts },
	textColor: '#DAF9FB',
	footer: {
		footerIconDimension: '30px'
	}
};

const darkTheme = {
	...blueTheme,
	primary: '#FBFBFB',
	background: '#0B090A',
	flowBackground: '#11262D',
	textColor: '#E0E0E0'
};

const redTheme = {
	...blueTheme,
	primary: '#DA5863',
	background: '#110405',
	flowBackground: '#182521',
	textColor: '#E8A69B'
};

const greenTheme = {
	...blueTheme,
	primary: '#32DE8A',
	background: '#0F1A0F',
	flowBackground: '#182521',
	textColor: '#D8E9D8'
};

const Theme = (props) => {
	let theme = blueTheme;
	switch (props.palette) {
		case 'Red':
			theme = redTheme;
			break;
		case 'Green':
			theme = greenTheme;
			break;
		case 'Blue':
			theme = blueTheme;
			break;
		case 'Dark':
			theme = darkTheme;
			break;
		default:
			break;
	}
	return <ThemeProvider theme={theme} {...props} />;
};

export default Theme;
