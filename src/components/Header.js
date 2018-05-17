import React from 'react';
import AppBar from 'material-ui/AppBar';


const styles = {
    appBar: {
        backgroundColor: '#CD0B38',
    },
};

const Header = (props) => (
    <AppBar 
        showMenuIconButton={false}
        style={styles.appBar}
        title="Pokedex"
    />
);

export default Header;