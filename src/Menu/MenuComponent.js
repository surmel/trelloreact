import React from "react";
import './Menu.css';
class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'slideLeft sideMenu',
            mode: 'open'
        }
    }


    render() {
        const valod = () => {
            if(this.state.mode === 'open'){
                this.setState({
                    style : 'slideRight sideMenu',
                    mode : 'closed'
                })
            }
            else {
                this.setState({
                    style : 'slideLeft sideMenu',
                    mode : 'open'
                })
            }

        }
        return (
            <div>
                <span className="menuButton" onClick={valod}>Menu</span>
                <div className={this.state.style}>
                    <span className="menuHeader">Menu</span>
                </div>
            </div>


        )
    }
}

export default MenuComponent;