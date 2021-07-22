import { GlobalContext } from 'globalState/GlobalStateContext';
import { useContext } from 'preact/hooks';
// Component
import Filter from 'components/exclusive/Filter/Filter';

const FilterQuestions = (): JSX.Element => {
  const [state, dispatch] = useContext(GlobalContext);

  const setTicketTypeFilter = (e: MouseEvent): void => {
    const target = e.target as HTMLInputElement;
    if (target) dispatch({ payload: target?.id, type: 'SET_TICKET_TYPE' });
  };

  const setTicketLengthFilter = (e: MouseEvent): void => {
    const target = e.target as HTMLInputElement;
    if (target) dispatch({ payload: target?.id, type: 'SET_TICKET_LENGTH' });
  };

  return (
    <>
      <div className="tfwm-cap-prices-finder__ticket-type wmnds-m-b-lg">
        <h3 className="wmnds-m-b-md">Who will be travelling?</h3>
        <div className="wmnds-col-1 wmnds-grid wmnds-grid--spacing-2-sm wmnds-grid--spacing-sm-2-md">
          <Filter
            text="Adult"
            name="ticketType"
            id="adult"
            className="wmnds-col-1-3 wmnds-col-lg-1-5"
            inputClasses="tfwm-cap-prices-finder__radio"
            handleClick={setTicketTypeFilter}
            isChecked
          />
          {/*           
            <Filter
              text="Young person (5-18)"
              name="ticketType"
              id="child"
              className="wmnds-col-2-3 wmnds-col-lg-auto"
              inputClasses="tfwm-cap-prices-finder__radio"
              handleClick={setTicketTypeFilter}
            /> 
            */}
        </div>
      </div>
      {state.ticketType != null && (
        <div className="tfwm-cap-prices-finder__ticket-length wmnds-m-b-lg">
          <h3 className="wmnds-m-b-md">Select your ticket length</h3>
          <div className="wmnds-col-1 wmnds-grid wmnds-grid--spacing-3-sm wmnds-grid--spacing-sm-3-md">
            <Filter
              text="1 day"
              name="ticketLength"
              id="1day"
              className="wmnds-col-1-3 wmnds-col-lg-1-5"
              inputClasses="tfwm-cap-prices-finder__radio"
              handleClick={setTicketLengthFilter}
            />
            <Filter
              text="3 day"
              name="ticketLength"
              id="3days"
              className="wmnds-col-1-3 wmnds-col-lg-1-5"
              inputClasses="tfwm-cap-prices-finder__radio"
              handleClick={setTicketLengthFilter}
            />
            <Filter
              text="1 week"
              name="ticketLength"
              id="1week"
              className="wmnds-col-1-3 wmnds-col-lg-1-5"
              inputClasses="tfwm-cap-prices-finder__radio"
              handleClick={setTicketLengthFilter}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FilterQuestions;
