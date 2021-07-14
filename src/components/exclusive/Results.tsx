import { GlobalContext } from 'globalState/GlobalStateContext';
import { useContext } from 'preact/hooks';

// Components
import Accordion from 'components/shared/Accordion/Accordion';
import Table from 'components/shared/Table/Table';

// Types
import { TramOrBusEntity, CapInfo } from 'globalState/dataTypes';

const Results = (): JSX.Element => {
  const [state] = useContext(GlobalContext);
  const { data } = state;

  /* Table Data */
  const addNewLine = (col1: string, col2: string, col2Link: string, col3: string) => {
    const dataLine = [];
    dataLine.push(
      <span>
        <b>{col1}</b>
      </span>
    );
    if (col2Link !== null && col2Link !== '') {
      dataLine.push(
        <a href={col2Link} className="wmnds-link">
          {col2}
        </a>
      );
    } else {
      dataLine.push(<span>{col2}</span>);
    }
    dataLine.push(<span>{col3}</span>);
    return dataLine;
  };
  /* End of Table Data */

  const addCompanyAccordion = (company: TramOrBusEntity): JSX.Element => {
    const tableData: JSX.Element[][] = [];
    return (
      <Accordion title={company.Company} className="wmnds-m-b-md">
        {company.Items.filter(
          (it: CapInfo) => it.Period.toLowerCase() === state.ticketLength?.substring(1)
        ).map((item: CapInfo) => {
          const price = state.ticketType === 'adult' ? item.Price : item.ChildPrice;
          tableData.push(addNewLine(item.CapName, item.Area, item.AreaLink, price));
          return true;
        })}
        {company.Description && <p>{company.Description}</p>}
        <Table
          title=""
          caption=""
          headers={['Cap name', 'Area', 'Price']}
          classes="umbraco-cap-prices-finder__table"
          cellClasses={['bold', 'bold', 'bold']}
          values={tableData}
        />
      </Accordion>
    );
  };

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
          {data.Tram && data.Tram.map((company: TramOrBusEntity) => addCompanyAccordion(company))}
          <h3 className="wmnds-m-b-lg">Bus</h3>
          {data.Bus && data.Bus.map((company: TramOrBusEntity) => addCompanyAccordion(company))}
        </div>
      )}
    </>
  );
};

export default Results;
