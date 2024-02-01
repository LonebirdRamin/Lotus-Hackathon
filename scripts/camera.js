const video = document.getElementById('camera-feed');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture-btn');

// Access the device camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
        document.body.appendChild(video);
        video.play();
    })
    .catch((error) => {
        console.error('Error accessing the camera: ', error);
    });

// Function to capture photo
function capturePhoto() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = 'block';
    video.style.display = 'none';
}

// Event listener for capture button
captureBtn.addEventListener('click', capturePhoto);