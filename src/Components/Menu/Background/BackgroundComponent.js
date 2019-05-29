import React from 'react';

class BackgroundComponent extends React.Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e, key){
        this.props.clickHandler(e, key);
    }

    render() {
        return (
            <div>
                <div className="imagesButton" onClick={(e) => this.onClickHandler(e, 'changeImage')}></div>
                <div className="colorsButton" onClick={(e) => this.onClickHandler(e, 'changeColor')}></div>
            </div>
        );
    }
}

export default BackgroundComponent;