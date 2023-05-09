function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4s0IAYyd7/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}