let url = 'http://numbersapi.com/';
let number = 3;

$.getJSON(`${url}${number}?json`).then(data => {
    console.log(data);
});


let second_number = [25, 39, 50];
$.getJSON(`${url}${second_number}?json`)
.then(data => (console.log(data)))

Promise.all(
  Array.from({ length: 4 }, () => {
  return $.getJSON(`${url}${number}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  