import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles



// Register the plugins

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageExifOrientation,
  FilePondPluginFileValidateType
);

// Our app
export function FileUpload() {
  const [files, setFiles] = useState([]);
  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false}
        required={true}
        allowReplace={true}
        name="files"
        acceptedFileTypes={["application/pdf"]}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        allowDrop={true}
        allowBrowse={true}
        credits={false}
        dropValidation={false}
        allowImagePreview={true}
        checkValidity={true}
        server={{
          url : "http://localhost:8080",
          process: {
            url: "/process",
            method : "POST",
            ondata: (formData) => {
              formData.append('extraField',"Bla");
              return formData;
            },
            onload: () => {
              console.log("onload")
            },
          }
        }}


        onaddfilestart={(file) => {
          console.log(`File Add Started ${file.filename}`)
        }}
      />
    </div>
  );
}
