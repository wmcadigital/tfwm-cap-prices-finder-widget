type FilterProps = {
  text: string;
  name: string;
  id: string;
  className?: string;
  inputClasses?: string;
  handleClick: (e: MouseEvent) => void;
  isChecked?: boolean;
} & typeof defaultProps;

const defaultProps = {
  className: '',
  inputClasses: '',
  isChecked: false,
};

const Filter = ({
  text,
  name,
  id,
  handleClick,
  className,
  inputClasses,
  isChecked,
}: FilterProps): JSX.Element => (
  <label className={className} htmlFor={id}>
    <input
      type="radio"
      className={`${inputClasses} wmnds-screenreaders-only`}
      name={name}
      id={id}
      onClick={handleClick}
      checked={isChecked}
    />
    <div className="wmnds-btn wmnds-btn--secondary wmnds-btn--block">{text}</div>
  </label>
);

Filter.defaultProps = defaultProps;

export default Filter;
