type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
} & typeof defaultProps;

const defaultProps = {
  className: '',
};

const Accordion = ({ title, children, className }: AccordionProps): JSX.Element => (
  <div className={`wmnds-accordion wmnds-is--open ${className}`}>
    <button
      aria-controls={title.replace(' ', '-')}
      className="wmnds-accordion__summary-wrapper"
      aria-expanded="true"
      type="button"
    >
      {/* {/* <!-- accordion summary --> */}
      <div className="wmnds-accordion__summary">
        <h4 className="wmnds-m-b-none">{title}</h4>
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
    <div className="wmnds-accordion__content" id={title.replace(' ', '-')}>
      {children}
    </div>
  </div>
);

Accordion.defaultProps = defaultProps;

export default Accordion;
