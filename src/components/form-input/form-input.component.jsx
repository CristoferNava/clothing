import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" id={label} {...otherProps} />
      <label
        className={`${
          otherProps.value.length > 0 ? "shrink" : ""
        } form-input-label`}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
