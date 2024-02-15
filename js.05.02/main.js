// 1.1

// let elem = document.querySelector('.class_test')

// elem.classList.add("www")

// elem.classList.remove("www")

// elem.classList.contains("www")

// elem.classList.length

// elem.classList.forEach(function(className) {
//     alert(className);
// });


// 2.1

// let elem = document.querySelector('.class_test')

// elem.style.cssText = 'color:red;font-size:30px;border: 1px solid black'

// 3.1

// let elem = document.querySelector('.class_test')

// elem.addEventListener('click', () => console.log(elem.tagName))

// elem.addEventListener('click', () => console.log(elem.tagName.toLowerCase()))

// let elem2 = document.querySelector(".www")

// let tagname = elem2.tagName.toLowerCase()
// elem2.textContent += tagname

// 4.1

// let elem = document.querySelector(".ol")

// let new_li = document.createElement("li")

// new_li.textContent = "пункт"
// elem.appendChild(new_li)

// 4.2
// let mass = ['Привет', 'Мир']
// let elem = document.querySelector(".ul")

// for (let i = 0; i < mass.length; i++){
//     let li = document.createElement("li")
//     li.textContent = mass[i]
//     elem.appendChild(li)
// }

// 5.1

// let elem = document.querySelector(".class_test")

// elem.insertAdjacentHTML("beforebegin", "<span>!!!</span>")

// elem.insertAdjacentHTML("afterend", "<span>!!!</span>")

// elem.insertAdjacentHTML("afterbegin", "<span>!!!</span>")

// elem.insertAdjacentHTML("beforeend", "<span>!!!</span>")

// 6.1

// let elem = document.querySelector(".child")
// let btn = document.querySelector(".btn")
// btn.addEventListener("click", () => {
//     elem.removeChild(elem.firstChild)
// })

// 6.2

// let elem = document.querySelector(".parent")
// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     let lastchild = elem.lastElementChild
//     if (lastchild){
//         elem.removeChild(lastchild)
//     }
// })

// 6.3

// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () =>{
//     btn.remove()
// })

// 6.4

// let elements = document.querySelectorAll('.pars li');

// elements.forEach(li => {
//     li.addEventListener('click', () => {
//         li.remove();
//     });
// });

// 6.5

// let elem = document.querySelector(".inp");
//             let div = document.querySelector(".clon");
//             let btn = document.querySelector(".btn");

//             btn.addEventListener("click", () => {
//                 let clon = elem.cloneNode(true);
//                 div.appendChild(clon);
//             });

// 7.1

// const elem = document.querySelector('.div_class');

// const firstChild = elem.firstElementChild;
// firstChild.style.color = 'red';

// 7.2
// const lastChild = elem.lastElementChild;
// lastChild.style.color = 'red';

// 7.3
// const children = elem.children;
// for (let child of children) {
//     child.textContent += '!';
// }

// 8.1
// const prevSibling = elem.previousElementSibling;
// if (prevSibling) {
//     prevSibling.textContent += '!';
// }

// 8.2
// const nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//     nextSibling.textContent += '!';
// }

// 8.3
// const nextNextSibling = nextSibling.nextElementSibling;
// if (nextNextSibling) {
//     nextNextSibling.textContent += '!';
// }

// 9.1
// const parent = elem.parentElement;
// if (parent) {
//     parent.style.color = 'red';
// }

// 9.2
// const grandParent = elem.parentNode.parentNode;
// if (grandParent) {
//     grandParent.style.color = 'red';
// }


// 10.1

// let elem2 = document.querySelector(".btn")

// elem2.addEventListener("click", () => {
//     alert(elem2.clientTop)
// })


// 10.2

// elem2.addEventListener("click", () => {
//     alert(elem2.clientLeft)
// })

// 11.1


// elem2.addEventListener("click", () =>{
//     alert(elem2.offsetHeight)
// })



// 12.1

// let elem2 = document.querySelector(".btn")


// elem2.addEventListener("click", () =>{
//     alert(elem2.clientWidth)
// })

// 12.2

// elem2.addEventListener("click", () =>{
//     alert(elem2.clientHeight)
// })


// 13.1

// elem2.addEventListener("click", () => {
//     let info = window.getComputedStyle(elem2)
//     console.log(info.width, info.height)
// })


// 14.1

// let elem3 = document.querySelector(".cont")

// console.log(elem3.scrollTop)

// 14.2


// console.log(elem3.scrollLeft)

// 14.3

// let elem5 = document.querySelector(".btn")

// elem5.addEventListener("click", () =>{
//     elem3.scrollTop = 100
// })

// 14.4
// let elem3 = document.querySelector(".cont")
// let elem5 = document.querySelector(".btn")

// elem5.addEventListener("click", () =>{
//     elem3.scrollLeft = 100
// })


// 15.1-15.2-15.3

// let elem5 = document.querySelector(".btn")
// let elem3 = document.querySelector(".cont")

// elem5.addEventListener("click", () =>{
//     alert(elem3.scrollHeight)
//     alert(elem3.scrollWidth)
//     elem3.scrollTop = elem3.scrollHeight = elem3.scrollHeight - 100
// })


// 16.1-16.2

// let elem5 = document.querySelector(".btn")
// let elem3 = document.querySelector(".cont")

// elem5.addEventListener("click", () => {
//     let info = window.pageXOffset + elem3.scrollLeft
//     alert(info)
//     let info2 = window.pageYOffset + elem3.scrollTop
//     alert(info2)
// })

// 17.1

// let elem5 = document.querySelector(".btn")
// let elem3 = document.querySelector(".cont")

// elem5.addEventListener("click", () =>{
//     elem3.scrollTo({top:500})
// })

// elem5.addEventListener("click", () =>{
//     elem3.scrollBy({left: 300})
// })


// 17.2

// let elem5 = document.querySelector(".btn")
// let elem3 = document.querySelector(".cont")

// elem3.scrollBy(0,300)


// 18.1
// let elem6 = document.querySelector(".btn")
// elem6.addEventListener("click", () =>{
//     window.scrollTo(0, document.body.scrollHeight);
// })



// 18.2
// let elem6 = document.querySelector(".btn")
// elem6.addEventListener("click", () =>{
//     window.scrollTo(0, 300);
// })


// 18.3

// window.addEventListener("scroll", function() {
//     if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
//         window.scrollTo(0, 100);
//     }
// });


// 18.4


let elem = document.querySelector(".btn")

elem.addEventListener("click", () =>{
    elem.style.width = (elem.offsetWidth * 2) + 'px'
    elem.style.height = (elem.height * 2) + 'px'
})








