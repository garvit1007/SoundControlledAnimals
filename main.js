function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4s0IAYyd7/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        Animal_name = document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_label").style.color = "rgb(" +random_number_r+ ","+random_number_g+","+random_number_b+")";
        

        img = document.getElementById('default_img');
        if(results[0].label == "Barking") {
            img.src = 'dog_img.jpg';
            Animal_name.label = 'Dog';
        }
        else if(results[0].label == "Meowing") {
            img.src = 'cat_img.jpg';
            Animal_name.label = 'Cat';
        }
        else if(results[0].label == "Mooing") {
            img.src = 'cow_img.jpg';
            Animal_name.label = 'Cow';
        }
        else if(results[0].label == "Roar") {
            img.src = 'lion_img.jpg';
            Animal_name.label = 'Lion';
        }
        else{
            img.src = 'Default_ear_image.png'
            Animal_name.label = 'Not able to recognise'
        }
    }
}