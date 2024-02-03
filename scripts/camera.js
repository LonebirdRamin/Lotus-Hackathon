(function () {
  var video = document.getElementById("video"),
    canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    snapButton = document.getElementById("snap");

  // Get access to the camera
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } }) // or { facingMode: { exact: "environment" } } for rear camera
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function (error) {
        console.log("Error accessing the camera: ", error);
      });
  }

  // Trigger photo take
  snapButton.addEventListener("click", function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    // Optionally, you can stop the camera after taking the photo
    // video.srcObject.getTracks().forEach(track => track.stop());
  });
})();
