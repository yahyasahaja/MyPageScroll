import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(libraries) {
        return (
            <ListItem data={libraries} />
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

function mapStateToProps(state, props) {
    return { libraries: state.libraries, selectedLibrary: state.selectedLibrary };
}

export default connect(mapStateToProps)(LibraryList);