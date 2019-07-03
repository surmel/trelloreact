import React from 'react';
import images from "./BackgroundsData/ImagesData";

class ChangeBackgroundImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.backgroundColorHandler = this.backgroundColorHandler.bind(this);
    }

    backgroundColorHandler(image) {
        localStorage.setItem('userBackground', image);
        localStorage.setItem('backgroundType', 'image');
        let backgroundImage = "url(" + image + ")";
        document.getElementById('mainListBackground').style.backgroundImage = backgroundImage;
        document.getElementById('mainListBackground').style.backgroundSize = 'cover';
        this.props.thumbnailChangeHandler(backgroundImage);
    }

    render() {
        return (
            <div>
                {images.map((image, index) => {
                    return <div key={index} className="colorBlock"
                                style={{backgroundImage: "url(" + image + ")", cursor: 'pointer'}}
                                onClick={() => this.backgroundColorHandler(image)}></div>;
                })}
            </div>
        );
    }
}

export default ChangeBackgroundImageComponent;