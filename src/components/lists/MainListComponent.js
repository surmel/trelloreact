import React from 'react';
import './css/List.css';
import MenuComponent from "../Menu/MenuComponent";
import ListsComponent from "../../containers/lists/listsComponent";

const styles = {
    container: {
        padding: '10px'
    },
};

class MainListComponent extends React.Component {

    render() {
        return (
            <div style={styles.container}>
                <div className='clearfix'>
                    <MenuComponent/>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <ListsComponent />
                    </div>
                </div>
            </div>
        )
    }
}


export default MainListComponent;