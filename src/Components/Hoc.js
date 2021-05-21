import React, { Component } from 'react';


export function withData(WrapComponents , fetchData){
    class Hoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: {}
            }
        }
        componentDidMount() {
            this.setState({
                data: fetchData(this.props)
            })
        }
        
        render() {
            return <WrapComponents data={this.state.data} {...this.props}/>
        }
    }
    return Hoc
}