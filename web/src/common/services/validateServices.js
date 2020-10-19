import React from 'react';
import { withLocalize } from 'react-localize-redux';

const FormErrors = ({ formErrors, translate, nameForm, nameInput }) => {
    let elementError
    Object.keys(formErrors).forEach((fieldName, i) => {
        if(nameInput === fieldName){
            if (formErrors[fieldName].length > 0) {
                return elementError = (
                    <p style={{ color: 'red' }} key={i}>
                        {translate(`auth.${nameForm}.${fieldName}`)} {formErrors[fieldName]}
                    </p>
                )
            } else {
                return elementError = '';
            }
        }
    })
    return  (<div className='formErrors'>
                {elementError}
            </div>)
}
export default withLocalize(FormErrors);