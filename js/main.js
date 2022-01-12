// let createElement = function (selector, tag, text) {
//     let container = document.querySelector(selector);
//     let element = document.createElement(tag);
//     element.innerHTML = text;

// };
// const titles = $(`h2.title`);
// titles.html(`hello!!!!!`)
// title.html(`<u>Jquery</u>`)
// for (let i = 0; i < 5; i++) {
//   let element = $(`<li>`)
//   element.text(`product #` + (i + 1))
//   element.css({
//     color: `gray`
//   }).addClass(`product-item`)
//   $(`ul.product`).append(element);
// }
// ДЗ
//1 project
// let tasks = [
//   'Сходить в магазин',
//   'Приготовить обед',
//   'Поесть',
//   'Отдохнуть',
//   'Работать'
// ];
// for (let i = 0; i < tasks.length; i++) {
//   let element = $(`<li>`)
//   element.text(tasks[i])
//   element.css({
//     color: `gray`
//   }).addClass(`task`)
//   $(`ul.products`).append(element);
// }
//2 project
for (;;) {
  let text = prompt(`укажите задание`);
  if (text === null) {
    break;
  } else {
    // confirm(`это важно для тебя?`)
    let ask = confirm(`это важно для тебя?`)
    if (ask === !null) {
      let element = $(`<li>`)
      element.css({
        color: `red`
      })
      element.text(text)
      .addClass(`exercise`)
      $(`ul.products`).append(element);
    } else {
      let element = $(`<li>`)
      element.text(text)
      .addClass(`exercise`)
      $(`ul.products`).append(element);
    }
  }
}
// for (;;) {
//   let text = prompt(`укажите задание`);

//   let element = $(`<li>`)
//   element.css({
//     color: `red`
//   })
//   element.text(text)
//   .addClass(`exercise`)
//   $(`ul.products`).append(element);
// }


//3 project
// let people = {
//   name: `Paul Mccarthy`,
//   followers: 1500,
// }
// $(`#alo`).remove();
// $(`#jack`).html(<li id="jack">Paul Mccarthy <a href="#london">#london</a> followers: <strong>1500</strong></li>);

