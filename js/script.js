let searchInput = document.querySelector(".form--txt");
let btnInput = document.querySelector(".form--submit");

/*let nameAge = [
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
})*/

function superSum(a,b){
    alert(a + b)
}

arr = [12,6,3,4,65,23,7,9,8]

function minmaxArr(arr){
    let min = arr[0]
    let max = arr[0]
    for(i = 0; i < arr.length; i++){
        min = min < arr[i] ? min : arr[i]
        max = max > arr[i] ? max : arr[i]
    }

    alert("min = " + min + "\n" + "max = " + max)
}

btnInput.addEventListener('click', minmaxArr(arr))