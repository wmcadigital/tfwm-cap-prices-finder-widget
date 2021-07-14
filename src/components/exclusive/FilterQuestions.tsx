import { GlobalContext } from 'globalState/GlobalStateContext';
import { useContext } from 'preact/hooks';

const FilterQuestions = (): JSX.Element => {
  const [state, dispatch] = useContext(GlobalContext);

  const setTicketTypeFilter = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target) dispatch({ payload: target?.id, type: 'SET_TICKET_TYPE' });
  };

  const setTicketLengthFilter = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target) dispatch({ payload: target?.id, type: 'SET_TICKET_LENGTH' });
  };

  return (
    <>
      <div className="umbraco-cap-prices-finder__ticket-type wmnds-m-b-lg">
        <h3 className="wmnds-m-b-md">Who will be travelling?</h3>
        <div className="wmnds-col-1 wmnds-grid wmnds-grid--spacing-2-sm wmnds-grid--spacing-sm-2-md">
          <label className="wmnds-col-1-3 wmnds-col-lg-1-5" htmlFor="adult">
            <input
              type="radio"
              className="umbraco-cap-prices-finder__radio wmnds-screenreaders-only"
              name="ticketOwner"
              id="adult"
              onClick={setTicketTypeFilter}
            />
            <div className="wmnds-btn wmnds-btn--secondary wmnds-btn--block">Adult</div>
          </label>
          <label className="wmnds-col-2-3 wmnds-col-lg-auto" htmlFor="child">
            <input
              type="radio"
              className="umbraco-cap-prices-finder__radio wmnds-screenreaders-only"
              name="ticketOwner"
              id="child"
              onClick={setTicketTypeFilter}
            />
            <div className="wmnds-btn wmnds-btn--secondary wmnds-btn--block">
              Young person (5-18)
            </div>
          </label>
        </div>
      </div>
      {state.ticketType != null && (
        <div className="umbraco-cap-prices-finder__ticket-length wmnds-m-b-lg">
          <h3 className="wmnds-m-b-md">Select your ticket length</h3>
          <div className="wmnds-col-1 wmnds-grid wmnds-grid--spacing-3-sm wmnds-grid--spacing-sm-3-md">
            <label className="wmnds-col-1-3 wmnds-col-lg-1-5" htmlFor="1day">
              <input
                type="radio"
                className="umbraco-cap-prices-finder__radio wmnds-screenreaders-only"
                name="ticketLength"
                id="1day"
                onClick={setTicketLengthFilter}
              />
              <div className="wmnds-btn wmnds-btn--secondary wmnds-btn--block">1 day</div>
            </label>
            <label className="wmnds-col-1-3 wmnds-col-lg-1-5" htmlFor="3day">
              <input
                type="radio"
                className="umbraco-cap-prices-finder__radio wmnds-screenreaders-only"
                name="ticketLength"
                id="3day"
                onClick={setTicketLengthFilter}
              />
              <div className="wmnds-btn wmnds-btn--secondary wmnds-btn--block">3 days</div>
            </label>
            <label className="wmnds-col-1-3 wmnds-col-lg-1-5" htmlFor="1week">
              <input
                type="radio"
                className="umbraco-cap-prices-finder__radio wmnds-screenreaders-only"
                name="ticketLength"
                id="1week"
                onClick={setTicketLengthFilter}
              />
              <div className="wmnds-btn wmnds-btn--secondary wmnds-btn--block">1 week</div>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterQuestions;
