import React from "react";
import './Menu.css';
import BackgroundComponent from './Background/BackgroundComponent';
import AboutBoardComponent from './AboutBoard/AboutBoardComponent';
import MainMenuComponent from './MainMenu/MainMenuComponent';
import ChangeBackgroundColorComponent from './Background/ChangeBackground/ChangeBackgroundColorComponent';
import ChangeBackgroundImageComponent from './Background/ChangeBackground/ChangeBackgroundImageComponent';

class MenuComponent extends React.Component {
    state = {
        style: 'slideRight sideMenu',
        mode: 'closed',
        currentMenu: '',
        prevMenu: '',
        menuTitle: 'Menu',
        menuItems : {
            mainMenu:{
                title: 'Menu',
                opened: true,
            },
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
        let currentMenu = this.state.currentMenu;
        this.setState({
            prevMenu: currentMenu,
            currentMenu: key,
            menuTitle: this.state.menuItems[key].title,
            menuItems : {
                ...this.state.menuItems,
                [currentMenu]: {
                    ...this.state.menuItems[currentMenu],
                    opened: false
                },
                [key]: {
                    ...this.state.menuItems[key],
                    opened: true,
                }
            }
        });
    }

    componentDidMount() {
        //Will be changed in future
        let bodyBackground = localStorage.getItem('userBackground');
        if(!bodyBackground){
            bodyBackground = '#0079BF';
        }
        if (localStorage.getItem('backgroundType') === 'image'){
            bodyBackground = "url(" + bodyBackground + ")";
            console.log(bodyBackground);
            document.body.style.backgroundImage = bodyBackground;
            document.body.style.backgroundSize = 'cover';
        } else {
            document.body.style.backgroundColor = bodyBackground;
        }
    }

    turnOffAllMenus () {
        let newState = {};
        let menuItems = this.state.menuItems;
        Object.keys(menuItems).map((key) => {
            let newValues = {
                ...this.state.menuItems[key],
                opened :false
            }
            newState[key] = newValues;
        });

        return newState;

    }

    onToggleHandler(e) {
        e.persist();
        if (this.state.mode === 'open') {
            let newState = this.turnOffAllMenus();
            this.setState({
                ...this.state,
                style: 'slideRight sideMenu',
                mode: 'closed',
                menuTitle: 'Menu',
                menuItems: newState,
            })
        } else {
            this.setState({
                style: 'slideLeft sideMenu',
                mode: 'open',
                currentMenu: 'mainMenu',
                menuItems: {
                    ...this.state.menuItems,
                    mainMenu: {
                        opened: true
                    }
                }
            })
        }
    }

    render() {
        const {mainMenu, backgroundMenu, aboutBoard, changeImage, changeColor} = this.state.menuItems;
        return (
            <div>
                <span className="menuButton" onClick={this.onToggleHandler}>Menu</span>
                <div className={this.state.style}>
                    {/*<span className="backButton">&#8592;</span>*/}
                    <span className="menuHeader">{this.state.menuTitle}</span>
                    {
                        mainMenu.opened ? <MainMenuComponent onMenuItemClickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                    {
                        backgroundMenu.opened ? <BackgroundComponent onMenuItemClickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                    {
                        aboutBoard.opened ? <AboutBoardComponent onMenuItemClickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                    {
                        changeImage.opened ? <ChangeBackgroundImageComponent onMenuItemClickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                    {
                        changeColor.opened ? <ChangeBackgroundColorComponent onMenuItemClickHandler={this.onOpenMenuContentHandler} /> : ''
                    }
                </div>
            </div>


        )
    }
}

export default MenuComponent;