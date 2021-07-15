import { GlobalContextProvider } from 'globalState/GlobalStateContext';
import Intro from '../exclusive/Intro';
import FilterQuestions from '../exclusive/FilterQuestions';
import Results from '../exclusive/Results';
import './App.scss';

const App = (): JSX.Element => (
  <GlobalContextProvider>
    <div className="tfwm-cap-prices-finder">
      <div className="wmnds-p-sm wmnds-col-1">
        <Intro />
        <FilterQuestions />
        <Results />
      </div>
    </div>
  </GlobalContextProvider>
);

export default App;
