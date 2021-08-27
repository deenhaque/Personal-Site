import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Fonts from '../../fonts/fonts';
import Theme from '../../Theme';
import { About, Footer, Header, Projects } from '../indexIsABoringName';
import Palette from '../Palette/Palette';
import { Focus } from './AppStyling';

const palettes = ['Blue', 'Red', 'Green', 'Dark'];

const App = () => {
  const [palette, setPalette] = useState(
    window.localStorage.getItem('palette') || 'blue'
  );

  const updatePalette = ({ target: { textContent } }) => {
    window.localStorage.setItem('palette', textContent);
    // TODO: Set the meta tag's theme colour to the theme's background
    return setPalette(textContent);
  };

  return (
    <Theme palette={palette}>
      <Fonts />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Focus>
              <About />
            </Focus>
          </Route>
          <Route exact path='/projects'>
            <Focus>
              <Projects />
            </Focus>
          </Route>
          <Route exact path='/palettes'>
            <Focus>
              <Palette
                palette={palette}
                palettes={palettes}
                updatePalette={updatePalette}
              />
            </Focus>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </Theme>
  );
};

export default App;
