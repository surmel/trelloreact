import React from 'react';
import welcome from '../../Images/Welcome-Were-Glad-Youre-Here.jpg'

const styles = {
    back: {
        width: '100%',
        height: '100%',
    },
};

class WelcomeComponent extends React.Component {


    render() {
        return (
            <div>
                <img style={styles.back} src={welcome} alt=""/>
            </div>
        );
    }
}

export default WelcomeComponent;