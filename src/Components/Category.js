import React, { Component } from 'react';
import { Datasource } from './Datasource';
import { withData } from './Hoc';

class Category extends Component {
    render() {
        return (
            <div>
                <p>{this.props.data.name}</p>
            </div>
        );
    }
}

const HighterOrderCompoents = withData(Category,(props) => Datasource.getCateGory(props.id));

export default HighterOrderCompoents;