import React from 'react'

export function ErrorPage(props) {

    const errorMessage = props.msg ;
    return (
    <div>ErrorPage Msg {errorMessage}</div>
  )
}
