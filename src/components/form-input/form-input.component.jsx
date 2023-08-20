import "./form-input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    // if label exists then render this label
    <div className="group">
      <input {...otherProps} className="form-input"></input>
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shirnk" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
