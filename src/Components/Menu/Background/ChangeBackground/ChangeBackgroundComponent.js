import React from 'react';

class ChangeBackgroundComponent extends React.Component {
    constructor(props){
        super(props);
        this.backgroundColorHandler = this.backgroundColorHandler.bind(this);
    }

    backgroundColorHandler(){
        document.body.style.backgroundColor = 'red';
    }
    render() {
        return (
            <div>
                <div className="redColor" onClick={() => this.backgroundColorHandler()}></div>
            </div>
        );
    }
}

export default ChangeBackgroundComponent;