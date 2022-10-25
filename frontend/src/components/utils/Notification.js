import React, { Component } from 'react'
import { faBanSmoking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Notification extends Component {

    // To generate to notification 
    // we need 
    // 
    // name
    // closeButtonText
    // okButtonText
    // closeButtonAction (closeProps)=>{}
    // closeProps
    // okButtonAction (okProps)=>{}
    // okProps
    // title
    // message

    // We store info in the state to get intellisense support

    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            closeButtonText: props.closeButtonText,
            okButtonText: props.okButtonText,
            closeButtonAction: props.closeButtonAction,
            okButtonAction: props.okButtonAction,
            closeProps: props.closeProps,
            okProps: props.okProps,
            title: props.title,
            message: props.message
        }
    }

    static getDerivedStateFromProps(_props, _state) {
        return null;
    }

    shouldComponentUpdate(_nextProp, _nextState) { }
    componentDidMount() { }
    componentWillUnmount() { }
    componentDidUpdate(_prevProp, _prevState, _snapshot) { }

    getSnapshotBeforeUpdate(_prevProp, _prevState) {
        var snapshot = {};
        return snapshot;
    }

    static getDerivedStateFromError(_error) { return {}; }

    render() {
        return (
            <div className='notifyMsg'>
                <div className='title'>
                    <FontAwesomeIcon icon={faBanSmoking} />
                    <label>{this.state.title}</label>
                </div>
                <div className='message'>
                    <p>{this.state.message}</p>
                </div>
                <div>
                    <button onClick={(_event) => { this.state.okButtonAction(this.state.okProps) }} className='okButton button'>{this.state.okButtonText}</button>
                    <button onClick={(_event) => { this.state.closeButtonAction(this.state.closeProps) }} className='closeButton button'>{this.state.closeButtonText}</button>
                </div>
            </div>
        )
    }
}

export default Notification