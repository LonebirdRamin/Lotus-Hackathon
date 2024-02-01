function setCookie(name, days){
    let expires = "";
    if (days){
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + expires + "; path=/";
}

function naviagateToRecipePage(){
    window.location.href = "foodrecipe.html";
}

function navigateToCameraPage(){
    window.location.href = "camera.html";
}