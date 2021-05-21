import React, { Component } from 'react';
import { Datasource } from './Datasource';
import { withData } from './Hoc';

class SomeCategory extends Component {
    render() {
        return (
            <div>
                <p>{this.props.data.content}</p>
            </div>
        );
    }
}

const hightorderComponents = withData(SomeCategory,(props) => Datasource.postCaTeGory(props.id));

export default hightorderComponents;