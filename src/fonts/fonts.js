import { createGlobalStyle } from 'styled-components';

import SairaCondensedEot from './saira-condensed-v6-latin-200.eot';
import SairaCondensedWoff2 from './saira-condensed-v6-latin-200.woff2';
import SairaCondensedWoff from './saira-condensed-v6-latin-200.woff';
import SairaCondensedTtf from './saira-condensed-v6-latin-200.ttf';
import SairaCondensedSvg from './saira-condensed-v6-latin-200.svg';

import BitterEot from './bitter-v17-latin-300.eot';
import BitterWoff2 from './bitter-v17-latin-300.woff2';
import BitterWoff from './bitter-v17-latin-300.woff';
import BitterTttf from './bitter-v17-latin-300.ttf';
import BitterSvg from './bitter-v17-latin-300.svg';

import LatoEot from './lato-v17-latin-regular.eot';
import LatoWoff2 from './lato-v17-latin-regular.woff2';
import LatoWoff from './lato-v17-latin-regular.woff';
import LatoTtf from './lato-v17-latin-regular.ttf';
import LatoSvg from './lato-v17-latin-regular.svg';

export const fonts = {
	sairaCondensed: 'Saira Condensed',
	bitter: 'Bitter',
	lato: 'Lato'
};

export default createGlobalStyle`
  /* Setting background here isn't font-related, but I don't want to create another global style for miniscule stuff */
  body {
    ${(props) => `background-color: ${props.theme.background}`};
    overflow: -moz-scrollbars-vertical; 
    overflow-y: scroll;
  }

  /* saira-condensed-200 - latin */
  @font-face {
    font-family: ${fonts.sairaCondensed};
    font-style: normal;
    font-weight: 200;
    src: url(${SairaCondensedEot}); /* IE9 Compat Modes */
    src: local(''),
        url(${SairaCondensedEot}) format('embedded-opentype'), /* IE6-IE8 */
        url(${SairaCondensedWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${SairaCondensedWoff}) format('woff'), /* Modern Browsers */
        url(${SairaCondensedTtf}) format('truetype'), /* Safari, Android, iOS */
        url(${SairaCondensedSvg}) format('svg'); /* Legacy iOS */
  }
  /* bitter-300 - latin */
  @font-face {
    font-family: ${fonts.bitter};
    font-style: normal;
    font-weight: 300;
    src: url(${BitterEot});
    src: local(''),
        url(${BitterEot}) format('embedded-opentype'),
        url(${BitterWoff2}) format('woff2'),
        url(${BitterWoff}) format('woff'),
        url(${BitterTttf}) format('truetype'),
        url(${BitterSvg}) format('svg');
  }

  /* lato-regular - latin */
  @font-face {
    font-family: ${fonts.lato};
    font-style: normal;
    font-weight: 400;
    src: url(${LatoEot});
    src: local(''),
        url(${LatoEot}) format('embedded-opentype'),
        url(${LatoWoff2}) format('woff2'),
        url(${LatoWoff}) format('woff'),
        url(${LatoTtf}) format('truetype'),
        url(${LatoSvg}) format('svg');
  }
`;
