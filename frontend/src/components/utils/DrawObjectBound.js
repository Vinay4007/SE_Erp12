export function DrawObjectBound(detectionsArray, canvasContext) {

    let result = false;

    detectionsArray.forEach(prediction => {
        const [x, y, width, height] = prediction['bbox']
        let text = prediction['class']
        let color = 'green'

        if (text !== 'person') {
            text = 'no person detected'
            color = 'red'
        }else{
            result = true;
        }

        // canvasContext.lineWidth = 2;
        canvasContext.strokeStyle = color;
        canvasContext.fillColor = color;
        canvasContext.font = '18px Arial'

        canvasContext.beginPath()
        canvasContext.fillText(text, x, y - 10)
        canvasContext.lineWidth = 6;
        canvasContext.rect(x, y, width, height)
        canvasContext.stroke()
    })

    return result;
}
