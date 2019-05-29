import React from "react";
import './Menu.css';
import BackgroundComponent from './Background/BackgroundComponent';
import AboutBoardComponent from './AboutBoard/AboutBoardComponent';
import MainMenuComponent from './MainMenu/MainMenuComponent';
import ChangeBackgroundComponent from './Background/ChangeBackground/ChangeBackgroundComponent';

class MenuComponent extends React.Component {
    state = {
        style: 'slideRight sideMenu',
        mode: 'closed',
        mainMenu: true,
        menuItems : {
            aboutBoard: {
                title: 'About This Board',
                opened: false
            },
            backgroundMenu: {
                title: 'Change Background',
                opened: false
            },
            changeImage: {
                title: 'Choose Image',
                opened: false
            },
            changeColor: {
                title: 'Choose Color',
                opened: false
            }
        },
    };


    constructor(props) {
        super(props);
        this.onToggleHandler = this.onToggleHandler.bind(this);
        this.onOpenMenuContentHandler = this.onOpenMenuContentHandler.bind(this);
    }

    onOpenMenuContentHandler(e, key) {
        e.persist();
        this.turnOffAllMenus();
        console.log(this.state.menuItems);
        console.log(this.state.menuItems[key]);
        if (this.state.menuItems[key].opened) {
            this.setState({
                menuItems : {
                    ...this.state.menuItems,
                    [key]: {
                        ...this.state.menuItems[key],
                        opened: false
                    }
                }
            })
        } else {
            this.setState({
                mainMenu: false,
                menuItems: {
                    ...this.state.menuItems,
                    [key]: {
                        ...this.state.menuItems[key],
                        opened: true,

                    }
                }
            })
        }

    }

    turnOffAllMenus () {
        let newState = {};
        Object.keys(this.state.menuItems).map((key) => {
            console.log(key);
            let newValues = {
                [key] : {
                    ...this.state.menuItems[key],
                    opened :false
                }
            }
            console.log(newValues);
            newState[key] = newValues;
        });

        return newState;

    }

    onToggleHandler(e) {
        e.persist();
        let newState = this.turnOffAllMenus();
        if (this.state.mode === 'open') {
            this.setState({
                mainMenu: true,
                style: 'slideRight sideMenu',
                mode: 'closed',
                menu: true,
                menuItems : newState
            })
        } else {
            this.setState({
                style: 'slideLeft sideMenu',
                mode: 'open',
                menu: false
            })
        }
    }

    render() {
        const {backgroundMenu, aboutBoard, changeImage} = this.state.menuItems;
        return (
            <div>
                <span className="menuButton" onClick={this.onToggleHandler}>Menu</span>
                <div className={this.state.style}>
                    {/*<span className="backButton">&#8592;</span>*/}
                    <span className="menuHeader">Menu</span>
                    {
                        this.state.mainMenu ? <MainMenuComponent clickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                    {
                        backgroundMenu.opened ? <BackgroundComponent clickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                    {
                        aboutBoard.opened ? <AboutBoardComponent clickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                    {
                        changeImage.opened ? <ChangeBackgroundComponent clickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                </div>
            </div>


        )
    }
}

export default MenuComponent;