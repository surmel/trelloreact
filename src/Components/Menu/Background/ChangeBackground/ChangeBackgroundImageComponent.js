import React from 'react';
import images from "./BackgroundsData/ImagesData";

class ChangeBackgroundImageComponent extends React.Component {
    constructor(props){
        super(props);
        this.backgroundColorHandler = this.backgroundColorHandler.bind(this);
    }

    backgroundColorHandler(image){
        localStorage.setItem('userBackground', image);
        localStorage.setItem('backgroundType', 'image');
        document.body.style.backgroundImage = "url(" + image + ")";
        document.body.style.backgroundSize = 'cover';
    }
    render() {
        return (
            <div>
                {images.map((image, index)=> {
                    return  <div key={index} className="colorBlock" style={{backgroundImage: "url(" + image + ")"}} onClick={() => this.backgroundColorHandler(image)}></div>;
                })}
            </div>
        );
    }
}

export default ChangeBackgroundImageComponent;