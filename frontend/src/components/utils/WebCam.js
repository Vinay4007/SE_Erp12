import React, { useState } from 'react';
import Webcam from "react-webcam";

import {saveAs} from "file-saver"
import { Button, Typography } from '@mui/material';


// const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 600,
    height: 800,
    facingMode: "user"
};

export function WebcamComponent () {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });

        const saveImage = (event) => {
            saveAs(image,"mypng");
        }


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={600}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={800}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>

                
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</button>
                }
            </div>

            <Button variant='contained' color='primary' aria-label='save image' onClick={saveImage}>
                <Typography variant='button'>Save Image</Typography>
            </Button>
        </div>
    );
};