import React from 'react';
import './form-input.styles.css';

const FormInput = ({ handleChange, label, ...otherFormProps }) => {
    console.log("-",otherFormProps)
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherFormProps}/>
                {
                label ?
                    (<label
                        className={`${
                            otherFormProps.value.length ? 'shrink' : ''
                        } form-input-label`}
                      >
                        {label}
                      </label>)
                    : null
                }
        </div>
    )
}

export default FormInput;