function changeBackground() {
    const user = JSON.parse(localStorage.getItem('user'));
    const schoolName = user.school === 'hse' ? 'HSE' : 'Fishers';
    if(schoolName == "Fishers"){

        document.body.style.backgroundImage = "url('img/wwww.jpg')";
    }else {

        document.body.style.backgroundImage = "url('img/ewww.jpg')";
    }
}
changeBackground();//call function fast and remove button
