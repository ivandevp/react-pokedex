import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import actions from '../actions';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

class Pokedex extends Component {
    static defaultProps = {
        pokemons: []
    };

    static propTypes = {
        pokemons: PropTypes.array.isRequired,
    };

    componentDidMount() {
        this.props.getPokemons();
    }

    render() {
        const { pokemons } = this.props;

        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                {pokemons.map(({ id, name }) => (
                    <GridTile
                        key={id}
                        title={name}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    >
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
                    </GridTile>
                ))}
                </GridList>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
    getPokemons: (offset) => dispatch(actions.getPokemons(offset)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);