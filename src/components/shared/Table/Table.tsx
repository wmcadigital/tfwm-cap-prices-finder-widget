/* eslint-disable react/no-array-index-key */
type TableProps = {
  title: string | null;
  caption: string | null;
  headers: string[];
  values: JSX.Element[][];
  classes: string | null;
  cellClasses: string[];
} & typeof defaultProps;

const defaultProps = {
  title: '',
  caption: '',
  classes: '',
};

const Table = ({
  title,
  caption,
  headers,
  values,
  classes,
  cellClasses,
}: TableProps): JSX.Element => {
  const noHeadersClass = headers && headers?.length > 0 ? '' : 'wmnds-table--without-header';

  return (
    <>
      {title && <h3>{title}</h3>}
      <table className={`wmnds-table ${classes} ${noHeadersClass}`}>
        {caption && <caption className="wmnds-table__caption">{caption}</caption>}
        {headers && headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((value, index) => (
                <th scope="col" key={index}>
                  {value}
                </th>
              ))}
            </tr>
          </thead>
        )}

        {values && (
          <tbody>
            {values.map((line: JSX.Element[], lineIndex: number) => (
              <tr key={`line${lineIndex}`}>
                {line &&
                  line.map((col: JSX.Element, index: number) => {
                    if (index === 0)
                      return (
                        <th
                          key={index}
                          scope="row"
                          className={cellClasses[index]}
                          data-header={headers[index]}
                        >
                          {col}
                        </th>
                      );
                    return (
                      <td key={index} className={cellClasses[index]} data-header={headers[index]}>
                        {col}
                      </td>
                    );
                  })}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};

export default Table;
