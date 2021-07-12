/* eslint-disable react/button-has-type */
import { GlobalContext } from 'globalState/GlobalStateContext';
import { useContext } from 'preact/hooks';

const Results = (): JSX.Element => {
  const [state] = useContext(GlobalContext);

  return (
    <>
      {state.ticketType !== null && state.ticketLength !== null && (
        <div className="umbraco-cap-prices-finder__results">
          <div className="umbraco-cap-prices-finder__controls wmnds-grid wmnds-grid--spacing-2-sm wmnds-grid--spacing-sm-2-md">
            <div className="wmnds-col-1-5">
              <button
                className="wmnds-btn wmnds-btn--primary wmnds-btn--block"
                type="button"
                aria-label="Open all"
              >
                Open all
              </button>
            </div>
            <div className="wmnds-col-1-5">
              <button
                className="wmnds-btn wmnds-btn--primary wmnds-btn--block"
                type="button"
                aria-label="Close all"
              >
                Close all
              </button>
            </div>
          </div>
          <h3 className="wmnds-m-b-lg wmnds-p-t-sm">Tram</h3>
          <div className="wmnds-accordion">
            <button
              aria-controls="accordion-01"
              className="wmnds-accordion__summary-wrapper"
              aria-expanded="false"
            >
              {/* {/* <!-- accordion summary --> */}
              <div className="wmnds-accordion__summary">
                <h4 className="wmnds-m-b-none">Accordion 1 heading</h4>
              </div>
              {/* <!-- plus icon --> */}
              <svg className="wmnds-accordion__icon">
                <use xlinkHref="#wmnds-general-expand" href="#wmnds-general-expand" />
              </svg>
              {/* <!-- minus icon --> */}
              <svg className="wmnds-accordion__icon wmnds-accordion__icon--minimise">
                <use xlinkHref="#wmnds-general-minimise" href="#wmnds-general-minimise" />
              </svg>
            </button>
            {/* <!-- accordion content --> */}
            <div className="wmnds-accordion__content" id="accordion-01">
              Lorem ipsum dolar sit...
            </div>
          </div>
          <h3 className="wmnds-m-b-lg">Bus</h3>
          <div className="wmnds-accordion">
            <button
              aria-controls="accordion-01"
              className="wmnds-accordion__summary-wrapper"
              aria-expanded="false"
            >
              {/* <!-- accordion summary --> */}
              <div className="wmnds-accordion__summary">
                <h4 className="wmnds-m-b-none">Accordion 2 heading</h4>
              </div>
              {/* <!-- plus icon --> */}
              <svg className="wmnds-accordion__icon">
                <use xlinkHref="#wmnds-general-expand" href="#wmnds-general-expand" />
              </svg>
              {/* <!-- minus icon --> */}
              <svg className="wmnds-accordion__icon wmnds-accordion__icon--minimise">
                <use xlinkHref="#wmnds-general-minimise" href="#wmnds-general-minimise" />
              </svg>
            </button>
            {/* <!-- accordion content --> */}
            <div className="wmnds-accordion__content" id="accordion-01">
              Lorem ipsum dolar sit...
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Results;
