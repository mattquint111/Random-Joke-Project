const jokeDisplay = document.querySelector("#display-joke")
const button = document.querySelector("#get-joke")

button.addEventListener('click', () => {
    getJoke();
})


function getJoke() {
    const ajax = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random"

    ajax.open("GET", url)
    ajax.send()
    ajax.onreadystatechange = function() {
        let data = JSON.parse(this.responseText);
        let joke = data.value
        jokeDisplay.textContent = joke
    }
    console.log('clicked')
}