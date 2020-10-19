import React from 'react';
import './styles.scss';

class Button extends React.Component {
    state = {
        show: false
    }

    showItemButton = () => {
        this.setState({ show: !this.state.show });

        if (!this.props.isDropdown) {
            this.props.addData();
        }
    }

    eventItemInButton = (i) => {
        this.props.indexEvent(i);
    }

    render() {
        return (
            <div className="content">
                <div className="button-custom" onClick={() => this.showItemButton()}>
                    {this.props.showIcon ?
                        <div className="img">
                            <img alt="plus" src={this.props.urlIcon ? this.props.urlIcon : '/img/plus_icon.png'} />
                        </div>
                        : null}
                    <span>{this.props.title}</span>
                    {
                        this.props.isDropdown ?
                            <div>
                                {
                                    this.state.show ? <div>
                                        {
                                            this.props.itemDropdown.map((value, key) => (
                                                <button key={key.toString()} onClick={() => this.eventItemInButton(key)}>{value}</button>
                                            ))
                                        }
                                    </div> : null
                                }
                            </div> : null
                    }
                </div>
            </div>
        )
    };
}

export default Button;