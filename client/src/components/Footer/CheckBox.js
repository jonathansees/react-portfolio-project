import React from 'react';

import { Field } from 'redux-form';

const CheckBox = ({ Name, Label }) => {
    return (
        <div className="input">
            <Field
                className="input__box input__box__checkbox"
                name= {Name}
                id= {Name}
                type="checkbox"
                component="input"
                autoComplete="none"
            />
            <label htmlFor={Name} className="input__label input__label__checkbox input__label__checkbox--left">{Label}</label>
        </div>
    );
};

export default CheckBox;