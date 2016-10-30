import React, { Component } from 'react'
import {Card, CardHeader} from 'material-ui/Card'

const mapStateToProps = ()=> {
}

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  textAlign: 'center',
}

class Box extends Component{
  render(){
    const { pageCounter } = this.props
      return (
        <div style={{...style }}>
          <Card style={{marginBottom: '.5rem', backgroundColor: '#C5CAE9'}}>
            <CardHeader
              title="この下にドロップして並び替えてください"
            />
          </Card>
          {this.props.children}
        </div>
      );
  }
}

export default Box
