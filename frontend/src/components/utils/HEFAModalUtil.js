import React from 'react'
import { HEFAConfirm } from '../content-components/HEFAConfirm'
import { HEFAOtherDetails } from '../content-components/HEFAOtherDetails'
import { HEFASuccess } from '../content-components/HEFASuccess'
import { HEFAUploadDocs } from '../content-components/HEFAUploadDocs'

export function HEFAModalUtil(props) {
    const {step} = props
  
    switch(step) 
    {
        case 0 : 
        return (
            <HEFAOtherDetails />
        )
        case 1 :
        return (
            <HEFAUploadDocs />
        )
        case 2: 
        return (
            <HEFAConfirm />
        )

        default : 
        return (
            <HEFASuccess />
        )
    }
}
