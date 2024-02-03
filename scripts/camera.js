(function() {
    var video = document.getElementById('video');
    var snapButton = document.getElementById('snap');

    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        const promise = navigator.mediaDevices.getUserMedia({video: {faceingMode: 'environment'}})
        promise.then(function(stream) {
            video.srcObject = stream;
            video.play();
        }).catch(function(err) {
            console.error(err);
        });
    }

    snapButton.addEventListener('click', function() {
        console.log('snap');
    });
})();