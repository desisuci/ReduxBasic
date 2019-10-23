import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement } from './action/index';

class Counter extends Component {
    addIncrement = () => {
        console.log(this.props);
        this.props.incrementAction();
    };

    minIncrement = () => {
        console.log(this.props);
        this.props.decrementAction();
    };

    render() {
        return (
            <View>
                <Text>Contoh Redux</Text>
                <Text>Counter : {this.props.count} </Text>
                <Button title="Tambah" onPress={this.addIncrement} />
                <Button title="Kurang" onPress={this.minIncrement} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    //console.log(state); //lihat data reducer
    return {
        count: state.count,
    };
}

function matchDispatchToProps(dispatch) { //convert dari action menjadi props
    //fungsi bindActionCreators : mengkombinasikan semua action ke single object
    return bindActionCreators(
        { incrementAction: increment, decrementAction: decrement },
        dispatch,
    );
}
export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(Counter);