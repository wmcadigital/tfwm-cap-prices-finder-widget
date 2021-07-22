import { GlobalContext } from 'globalState/GlobalStateContext';
import axios from 'axios';
import { useContext, useEffect } from 'preact/hooks';

// Components
import Intro from './Intro';
import FilterQuestions from './FilterQuestions';
import Results from './Results';

const Widget = (): JSX.Element => {
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get('https://tfwm.org.uk/shared-with-third-parties/cap-prices-data/')
      .then(response => {
        // handle success
        if (response.data) {
          dispatch({ payload: response?.data, type: 'SET_DATA' });
        }
      })
      .catch(error => {
        // handle error
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, [dispatch]);
  return (
    <>
      {state.data !== null && (
        <div className="tfwm-cap-prices-finder">
          <div className="wmnds-p-sm wmnds-col-1">
            <Intro />
            <FilterQuestions />
            <Results />
          </div>
        </div>
      )}
    </>
  );
};

export default Widget;
