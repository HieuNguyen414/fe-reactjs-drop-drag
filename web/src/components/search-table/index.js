import React from 'react';
import './styles.scss';

const AppSearch = (props) => {
    const { onChange, placeholder, showSearch = true } = props;
    return (
        <div>
            {
                showSearch ?
                    <input
                        className="form-control"
                        id="myInput" type="text"
                        placeholder={placeholder}
                        onChange={(event) => onChange(event.target.value)} /> : ''
            }
        </div>
    )
}

export default AppSearch;