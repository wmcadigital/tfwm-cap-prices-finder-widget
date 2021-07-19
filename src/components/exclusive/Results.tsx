import { GlobalContext } from 'globalState/GlobalStateContext';
import { useContext } from 'preact/hooks';

// Components
import Accordion from 'components/shared/Accordion/Accordion';
import Table from 'components/shared/Table/Table';
import Controls from 'components/shared/Controls/Controls';
import { ReplaceTextWithIcon } from 'components/shared/Icon/NIcon';

// Types
import { TramOrBusEntity, CapInfo } from 'globalState/dataTypes';

const Results = (): JSX.Element => {
  const [state] = useContext(GlobalContext);
  const { data } = state;

  /* Table Data */
  const addNewLine = (col1: string, col2: string, col2Link: string, col3: string) => {
    const column1 = <ReplaceTextWithIcon htmlElement={col1} />;
    const column2 = <ReplaceTextWithIcon htmlElement={col2} />;
    const dataLine = [];
    dataLine.push(
      <span>
        <b>{column1}</b>
      </span>
    );
    if (col2Link !== null && col2Link !== '') {
      dataLine.push(
        <a href={col2Link} className="wmnds-link">
          {column2}
        </a>
      );
    } else {
      dataLine.push(<span>{column2}</span>);
    }
    dataLine.push(<span>{col3}</span>);
    return dataLine;
  };
  /* End of Table Data */

  const addCompanyAccordion = (company: TramOrBusEntity): JSX.Element => {
    const tableData: JSX.Element[][] = [];
    const results: CapInfo[] = company.Items.filter(
      (it: CapInfo) =>
        it.Period.toLowerCase() === state.ticketLength?.substring(1) ||
        it.Period.toLowerCase() === state.ticketLength
    );
    return (
      <>
        {results.length > 0 && (
          <Accordion title={company.Company} className="wmnds-m-b-md">
            {results.map((item: CapInfo) => {
              const price = state.ticketType === 'adult' ? item.Price : item.ChildPrice;
              tableData.push(addNewLine(item.CapName, item.Area, item.AreaLink, price));
              return true;
            })}
            {company.Description && <p>{company.Description}</p>}

            <Table
              title=""
              caption=""
              headers={['Cap name', 'Area', 'Price']}
              classes="tfwm-cap-prices-finder__table"
              cellClasses={['bold', 'bold', 'bold']}
              values={tableData}
            />
          </Accordion>
        )}
      </>
    );
  };

  return (
    <>
      {state.ticketType !== null && state.ticketLength !== null && (
        <div className="tfwm-cap-prices-finder__results">
          <Controls />
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
