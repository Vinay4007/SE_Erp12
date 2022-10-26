import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { FormComponent } from '../utils/Form'
import { LoadingPage } from './LoadingPage';
// import { DateTimePicker } from '../utils/DateTimePicker'
// import { FileUpload } from '../utils/FileUpload'
// import { PdfViewer } from '../utils/PdfViewer'
import { WebcamComponent } from '../utils/WebCam'
import { ObjectDetection } from '../utils/ObjectDetection';

export function MISReports() {

  return (
    <div>
      {/* <DateTimePicker />
      <FileUpload />
      <WebcamComponent /> */}
      {/* <FormComponent /> */}
      {/* <LoadingPage /> */}
      <ObjectDetection />
      {/* <WebcamComponent /> */}
    </div>
  )
}
