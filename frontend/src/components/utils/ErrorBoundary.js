import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'ErrorBoundary'
      }
    }

    static getDerivedStateFromProps(props,state){
        return null
    }
    
    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(prevProp,prevState,snapshot){}

    
    getSnapshotBeforeUpdate(prevProp,prevState){
      var snapshot = {};
      return snapshot;
    }

    static getDerivedStateFromError(error){return {};}
    componentDidCatch(error){}

    render() {
    return (
      <div>ErrorBoundary</div>
    )
  }
}

export default ErrorBoundary