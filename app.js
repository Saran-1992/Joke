const button = document.getElementById("button");
const jokeContent = document.getElementById("jokecontent");
const joke = document.getElementById("joke");

button.onclick = () =>
{
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then(function(response)
{
    button.textContent= "Aduthu";
    joke.textContent = " ";
    jokeContent.textContent = response.data.setup;
    setTimeout(function ()
    {
        joke.textContent = response.data.punchline;
    },1500);
})
    .catch(function(error)
{
     console.log(error)
})
};

