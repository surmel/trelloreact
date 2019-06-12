import React from 'react';

class BackgroundComponent extends React.Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e, key){
        this.props.onMenuItemClickHandler(e, key);
    }

    render() {
        return (
            <div>
                <div className="imagesButton" onClick={(e) => this.onClickHandler(e, 'changeImage')} style={{ cursor: 'pointer' }} />
                <div className="colorsButton" onClick={(e) => this.onClickHandler(e, 'changeColor')} style={{ cursor: 'pointer' }} />
            </div>
        );
    }
}

export default BackgroundComponent;