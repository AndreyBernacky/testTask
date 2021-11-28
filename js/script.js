let searchInput = document.querySelector(".form--txt");
let btnInput = document.querySelector(".form--submit");

btnInput.addEventListener('click', function(){
    inputValue = searchInput.value == "google" ? "Yandex круче. Но это не точно" : searchInput.value
    alert(inputValue)
})