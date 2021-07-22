import { GlobalContextProvider } from 'globalState/GlobalStateContext';

// Components
import Widget from '../exclusive/Widget';

// Styles
import './App.scss';

const App = (): JSX.Element => (
  <GlobalContextProvider>
    <div className="tfwm-cap-prices-finder">
      <div className="wmnds-p-sm wmnds-col-1">
        <Widget />
      </div>
    </div>
  </GlobalContextProvider>
);

export default App;
