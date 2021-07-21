const Controls = (): JSX.Element => {
  const openAll = () => {
    const accordions = document.querySelectorAll(
      '.tfwm-cap-prices-finder__results > .wmnds-accordion'
    );
    accordions.forEach((accordion: Element) => {
      accordion?.classList.add('wmnds-is--open');
      accordion
        .querySelector('.wmnds-accordion__summary-wrapper')
        ?.setAttribute('aria-expanded', 'true');
    });
  };

  const closeAll = () => {
    const accordions = document.querySelectorAll(
      '.tfwm-cap-prices-finder__results > .wmnds-accordion'
    );
    accordions.forEach((accordion: Element) => {
      accordion.classList.remove('wmnds-is--open');
      accordion
        .querySelector('.wmnds-accordion__summary-wrapper')
        ?.setAttribute('aria-expanded', 'false');
    });
  };

  return (
    <div className="tfwm-cap-prices-finder__controls wmnds-grid wmnds-grid--spacing-2-sm wmnds-grid--spacing-sm-2-md">
      <div className="wmnds-col-1-2 wmnds-col-md-1-5">
        <button
          className="wmnds-btn wmnds-btn--primary wmnds-btn--block"
          type="button"
          aria-label="Open all"
          onClick={openAll}
        >
          Open all
        </button>
      </div>
      <div className="wmnds-col-1-2 wmnds-col-md-1-5">
        <button
          className="wmnds-btn wmnds-btn--primary wmnds-btn--block"
          type="button"
          aria-label="Close all"
          onClick={closeAll}
        >
          Close all
        </button>
      </div>
    </div>
  );
};

export default Controls;
