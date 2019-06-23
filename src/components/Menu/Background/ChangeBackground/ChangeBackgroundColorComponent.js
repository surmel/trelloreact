import React from 'react';
import colors from './BackgroundsData/ColorsData';

class ChangeBackgroundColorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.backgroundColorHandler = this.backgroundColorHandler.bind(this);
    }

    backgroundColorHandler(color) {
        localStorage.setItem('userBackground', color);
        localStorage.setItem('backgroundType', 'color');
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = color;
        this.props.thumbnailChangeHandler(color);

    }

    render() {
        return (
            <div>
                {colors.map((color, index) => {
                    return <div key={index} className="colorBlock" style={{backgroundColor: color, cursor: 'pointer'}}
                                onClick={() => this.backgroundColorHandler(color)}></div>;
                })}
            </div>
        );
    }
}

export default ChangeBackgroundColorComponent;