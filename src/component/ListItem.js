import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
    onClick() {
        const { expended, selectLibrary, data } = this.props;
        selectLibrary(expended ? null : data.id);
    }

    renderData() {
        const { descriptionStyle } = style;
        if (this.props.expended) {
            return (
                <CardSection style = {descriptionStyle}>
                    <Text>{this.props.data.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle, selectedTitleStyle, selectedTextTitleStyle } = style;

        return (
            <View>
                <TouchableOpacity
                        onPress={this.onClick.bind(this)}
                >
                    <View>
                        <CardSection  style={this.props.expended ? selectedTitleStyle : titleStyle}>
                            <Text style={this.props.expended ? selectedTextTitleStyle : {}}>{this.props.data.title}</Text>
                        </CardSection>

                        { this.renderData() }
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = {
    descriptionStyle: {
        padding: 20
    },

    titleStyle: {
        backgroundColor: '#F3F3F3'
    }, 

    selectedTitleStyle: {
        backgroundColor: '#959595'
    },

    selectedTextTitleStyle: {
        color: 'white'
    }
};

function mapStateToProps(state, props) {
    const expended = state.selectedLibrary == props.data.id;
    return { expended };
}

export default connect(mapStateToProps, actions)(ListItem);