import React from 'react';
import './styles.scss';

const itemSeach = [
    { icon: '/img/Giants.png', text: '大城 卓三', quantity: 11 },
    { icon: '/img/Giants.png', text: '若林 晃弘', quantity: 32 },
    { icon: '/img/Giants.png', text: '山本 泰寛', quantity: 54 }
]
const SearchAutoComplete = (props) => {
    const { onChange, placeholder, showDropdown, clickItemDropdown } = props;
    return (
        <div style={{position:'relative'}}>
            <div className="form-group">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                    className="form-control"
                    id="myInput" type="text"
                    placeholder={placeholder}
                    onChange={(event) => onChange(event.target.value)} />

{
                showDropdown ?
                    <div className="dropdown">
                        {itemSeach.map((value, key) => {
                            return (
                                <div key={key} className="items" onClick={() => clickItemDropdown(value)}>
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <img src={value.icon} alt="" />
                                    <span className="text">{value.text}</span>
                                    <span className="quantity">{value.quantity}</span>
                                </div>
                            )
                        })}
                    </div> : null
            }
            </div>
            
        </div>
    )
}

export default SearchAutoComplete;