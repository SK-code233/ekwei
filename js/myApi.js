// console.log(fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello"));
// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
// https://api.dictionaryapi.dev/api/v2/entries/en/hello

// console.log(window);

// FETCH API

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((response) => {
    return response.json();
    // console.log(response);
  })
  .then((json) => {
    // console.log(json);
  });

// second approach

async function getWords() {
  let response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  );
  let data = await response.json();

  return data;
}

getWords().then((response) => {
  // console.log(response);
  // return response(json)
});

// console.log ()
// const Words =

// AXIOS Third Party JS library

// const apiUrl = "https://api.dictionaryapi.dev/v2/entries/en/random";
axios.get("https://api.dictionaryapi.dev/v2/entries/en/random").then(
  (response) => {
    // console.log(response.data)

    const randomWord = data[0].word;
    console.log(randomWord);
  },
  (err) => {
    console.log(err);
  }
);

// const randomWord = data[0].word;
// console.log(randomWord);
