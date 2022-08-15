let url = 'http://numbersapi.com/';
let number = 3;


async function part1() {
    let data = await $.getJSON(`${url}${number}?json`);
    console.log(data);
}

part1();



const second_number = [25, 39, 50];
async function part2(){
  let data = await $.getJSON(`${url}${second_number}?json`);
  console.log(data);
}

part2();


async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${url}${number}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();