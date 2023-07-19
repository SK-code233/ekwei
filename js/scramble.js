
axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
.then(
   response=> {
    console.log(response.data)
   },err=> {
    console.log(err);
   }
    )

    // const data = await response.json();
const randomWord = data[0].word;
console.log(randomWord);

// .
// .
// .

// const apiUrl = "https://api.example.com/v1/users";
// const data = {
//   name: "John Doe",
//   email: "john.doe@example.com",
// };
// const response = await axios.post(apiUrl, data);

// .
// .
// .





// const url = "https://api.dictionaryapi.dev/api/v2/entries/en/&q=${word}";
const apiUrl = "https://api.dictionaryapi.dev/v2/entries/en/random";
const value = outerArray[0][1][2];
const data = {
  validWord: "John Doe",
};
// Send the request to the API.
const response = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
// Get the response body.
const body = await response.json();
// Assign the response to a variable.
const message = body.message;


// .
// .
// .
// .


//GAME CODE
const initGame = () => {
  // let response = words
  let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
  let wordArray = randomObj.word.split(""); // splitting each letter of random word
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // getting random number
    // shuffling and swiping wordArray letters randomly
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  console.log(wordArray, randomObj.word);
};

const scramble = () => {
  return <div>scramble</div>;
};



// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
// https://api.dictionaryapi.dev/api/v2/entries/en/hello