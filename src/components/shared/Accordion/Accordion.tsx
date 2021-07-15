import Icon from 'components/shared/Icon/Icon';

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
} & typeof defaultProps;

const defaultProps = {
  className: '',
};

const Accordion = ({ title, children, className }: AccordionProps): JSX.Element => {
  const toggleAccordion = (e: MouseEvent) => {
    const accordionBtn = e.target as HTMLButtonElement;
    const accordion = accordionBtn.closest('div.wmnds-accordion');
    if (accordion?.classList.contains('wmnds-is--open')) {
      accordion.classList.remove('wmnds-is--open');
      accordionBtn.setAttribute('aria-expanded', 'false');
    } else {
      accordion?.classList.add('wmnds-is--open');
      accordionBtn.setAttribute('aria-expanded', 'true');
    }
  };

  return (
    <div className={`wmnds-accordion ${className}`}>
      <button
        aria-controls={title.replace(' ', '-')}
        className="wmnds-accordion__summary-wrapper"
        aria-expanded="false"
        type="button"
        onClick={toggleAccordion}
      >
        {/* {/* <!-- accordion summary --> */}
        <div className="wmnds-accordion__summary">
          <h4 className="wmnds-m-b-none">{title}</h4>
        </div>

        {/* <!-- plus icon --> */}
        <Icon className="wmnds-accordion__icon" iconName="general-expand" />

        {/* <!-- minus icon --> */}
        <Icon
          className="wmnds-accordion__icon wmnds-accordion__icon--minimise"
          iconName="general-minimise"
        />
      </button>
      {/* <!-- accordion content --> */}
      <div className="wmnds-accordion__content" id={title.replace(' ', '-')}>
        {children}
      </div>
    </div>
  );
};

Accordion.defaultProps = defaultProps;

export default Accordion;
