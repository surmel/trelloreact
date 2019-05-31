import React from 'react';

class MainMenuComponent extends React.Component {
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
                <p className="menuItem" onClick={(e) => this.onClickHandler(e, 'backgroundMenu')}><span className="backgroundThumb" style={{background: this.props.bodyBackground}}></span>Change Background</p>
                <p className="menuItem" onClick={(e) => this.onClickHandler(e, 'aboutBoard')}>About This Board</p>
            </div>
        );
    }
}

export default MainMenuComponent;