import React, { Component } from 'react';
import './styles.scss';
class UploadFile extends Component {
    state = {
        urlImage: this.props.imgs
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({
            urlImage: nextProps.imgs
        })
    }

    cancel = () => {
        this.setState({
            urlImage: ''
        })
    }

    render() {
        const { changeFile, onSubmit } = this.props;
        return (
            <form className="upload" onSubmit={onSubmit}>
                <p>Upload services: </p>
                <div className="content">
                    <img src={this.state.urlImage} alt="" className="mr-2" />
                    <div className="top text-center">
                        {
                            !this.state.urlImage ?
                                <p>( *file extension allowed: .png, jpg ) </p> : ''}
                        <label htmlFor="inputFile" className="btn">Select</label>
                        {this.state.urlImage ? <label className="btn" onClick={this.cancel}>Cancel</label> : ''}
                    </div>
                    <input id="inputFile" style={{ display: 'none' }} type="file" onChange={(ev) => changeFile(ev)} />
                </div>
            </form>
        );
    }
}

export default UploadFile;