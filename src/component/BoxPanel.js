import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

var color = ['#6EBBE7', '#FF5E5E', '#B61616', '#5DEF5D', '#39DEBD', '#F9F588', '#C564F2'];

class BoxPanel extends Component {
    state = { canScroll: true }
    componentDidMount() {
        this.props.selectLibrary(3);
    }

    renderBox() {
        const arr = [];
        const style = () => { return { 
            backgroundColor: color[Math.floor(Math.random() * color.length)],
            width: 100,
            height: 100,
            margin: 5
        }};
        
        for (var i = 0; i < 30; i++) arr.push(<View key={i} style={ style() }/>);
        return arr;
    }

    render() {
        var xBegin = 0;
        var xEnd = 0;
        const { scrollViewStyle, boxesWrapper } = styles;
        console.log(this.props.selectedLibrary);
        return (
            <View onResponderMove={()=>console.log("RESPONDER")}><ScrollView 
                style={scrollViewStyle}
                
                onScroll={e => {
                    if (Math.abs(xEnd - xBegin) > 0) {
                        this.setState({canScroll: false});
                    }

                    console.log("scrolling", e.timeStamp, e.nativeEvent)
                }}
                onTouchStart={e => {
                    xBegin = e.nativeEvent.locationX;
                }}

                onTouchMove={e => {
                    xEnd = e.nativeEvent.locationX;
                    console.log(xBegin, xEnd, e.nativeEvent.changedTouches, e.nativeEvent.touches)
                }}
                scrollEnabled={this.state.canScroll}
            > 
                <View style ={boxesWrapper}>
                    { this.renderBox() }
                </View>
            </ScrollView></View>
        );
    }
}

var styles = {
    scrollViewStyle: {
        backgroundColor: '#F0F0F0',
        zIndex: 1000,
    },

    boxesWrapper: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: 'wrap'
    }
};

const mapState = (state, props) => {
    return { libraries: state.libraries, selectedLibrary: state.selectedLibrary };
};

export default connect(mapState, actions)(BoxPanel);