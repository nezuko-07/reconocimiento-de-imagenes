      
Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  // Inicializa el método de clasificación de imagen con MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2ipEBTuSL/model.json',modelLoaded);

  // Cuando se cargue el modelo
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
      
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }


// Función que se ejecuta cuando obtenemos algún error en los resultados
function gotResult(error, results) {
  // Muestra el error en la consola
  if (error) {
    console.error(error);
  } else {
    // Los resultados están en un array ordenado por presición.
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
