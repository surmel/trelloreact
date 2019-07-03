import React from 'react';
import './css/List.css';
import MenuComponent from "../Menu/MenuComponent";
import ListsComponent from "../../containers/lists/listsComponent";

const styles = {
    container: {
        padding: '10px',
        marginTop: '45px'
    },
    mainListContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: '0',
        top: '0',
        zIndex: '-1'
    }
};

class MainListComponent extends React.Component {

    render() {
        return (
            <div id='mainListBackground' style={styles.mainListContainer}>
                <div style={styles.container}>
                    <div className='clearfix'>
                        <MenuComponent/>
                    </div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <ListsComponent/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MainListComponent;