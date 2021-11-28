let searchInput = document.querySelector(".form--txt");
let btnInput = document.querySelector(".form--submit");

let nameAge = [
    {
        name: "Valera",
        age: "20",
    },
    {
        name: "Andrey",
        age: "23",
    },
    {
        name: "Igor",
        age: "25",
    },
    {
        name: "Kolya",
        age: "30",
    },
];

btnInput.addEventListener('click', function(){
    inputValue = searchInput.value == "google" ? "Yandex круче. Но это не точно" : searchInput.value
    nameAge1 = nameAge[0].name

    alert(inputValue + nameAge1)
})