function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/66t-Pl_UK//model.json', modelReady);
}

function modelReady() {
    classifier.calssify(gotResults);
}