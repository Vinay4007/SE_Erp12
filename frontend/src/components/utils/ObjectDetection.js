// Import dependencies
import React, { useRef, useEffect, useState } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { DrawObjectBound } from "./DrawObjectBound"

import '@tensorflow/tfjs';
import Style from "./../modules/ObjectDetection.module.css"
import { Button, Stack, Typography } from "@mui/material";
import { saveAs } from "file-saver";

// const IMAGE_WIDTH = 640;
// const IMAGE_HEIGHT = 480;

export function ObjectDetection(_props) {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [personIdentified, setPersonIdentified] = useState(false)
    const [imageIdentified, setImageIdentified] = useState('')

    const runCoco = async () => {
        const net = await cocossd.load();

        setInterval(() => {
            detect(net);
        }, 10);
    };


    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const obj = await net.detect(video);
            const ctx = canvasRef.current.getContext("2d");
            const result = DrawObjectBound(obj, ctx)

            setPersonIdentified(result)
            console.log(`Result ${result}`)
        }
    };

    const savePhoto = () => {
        saveAs(imageIdentified, "myjpeg");
    }

    const takeScreenShot = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageIdentified(imageSrc);
    }

    useEffect(() => { runCoco() }, []);

    return (
        <div className={Style.lmainApp}>
            <Stack direction="column" gap={"10px"}>
                {imageIdentified === '' ?
                    (
                        <div className={Style.mainApp}>
                            <Webcam
                                ref={webcamRef}
                                muted={true}
                                screenshotFormat="image/jpeg"
                                className={StyleSheet.webcam}
                            />

                            <canvas
                                ref={canvasRef}
                                className={Style.canvas}
                            />
                        </div>
                    ) : <img src={imageIdentified} alt="oops no img available"/>}

                <Button variant="contained" color="primary" disabled={!personIdentified} onClick={(event) => {
                    savePhoto();
                }}>
                    <Typography variant="button">
                        {imageIdentified!=='' ? "Save Photo" : "Take Screenshot"}
                    </Typography>
                </Button>

                {
                    imageIdentified === '' ?
                        <Button variant="contained" color="secondary" onClick={(event) => {
                            event.preventDefault();
                            takeScreenShot();
                        }}
                        disabled={!personIdentified}>
                            <Typography variant="button">
                                Capture
                            </Typography>
                        </Button>
                        :
                        <Button variant="contained" color="secondary" onClick={(event) => {
                            event.preventDefault();
                            setImageIdentified('')
                        }}
                        disabled={!personIdentified}>
                            <Typography variant="button">
                                Retake
                            </Typography>
                        </Button>
                }
            </Stack>
        </div>
    );
}
