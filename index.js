'use strict'
let SHELF_LENGTH = 0

function getAmount() {

    function sizesRender(btn, inputAmount, inputSize) {
        const parent = btn.parentElement
        const amountValue = inputAmount.value
        const size = inputSize.value
        if (amountValue !== '' && amountValue > 0) {
            if (/^[1-9]\d*$/.test(size) === false) {
                alert('Введите корректный размер полки')
                return
            } else SHELF_LENGTH = +size;

            if (amountValue > 10) {
                alert("Введите целое число меньше 11")
            } else {
                parent.innerHTML = '';
                for (let i = 1; i <= amountValue; i++) {

                    parent.insertAdjacentHTML
                    ('beforeend', `
             <div class="input_item input_sizes">
                <label>
                    <p>Введите длину ${i}-й коробки </p>
                    <p><input id="sizes_input_${i}" type="text" class="input" data-name="${i}"></p>
                </label>
             </div>
        `)
                }
                const btn = document.createElement('button')
                btn.innerText = ' Разместить'
                btn.classList.add("btn_sizes")
                parent.appendChild(btn)
                getSizes()
            }
        }
    }

    const amountInput = document.querySelector('#amount_input')
    const amountBtn = document.querySelector("#btn_amount")
    const shelfSize = document.querySelector('#width_input')
    amountBtn.addEventListener("click", function handler(event) {
        sizesRender(event.target, amountInput, shelfSize)
    })
}

function getSizes() {

    function boxRender(btn) {
        const inputNodes = btn.parentElement.querySelectorAll('input')
        const rack = document.getElementById('rack')

        const boxes = [];
        inputNodes.forEach(node => {
            boxes.push({
                name: node.dataset.name,
                length: +node.value
            })
        })
        let checked = lengthCheck(permutation(boxes))
        //let sorting = checked.sort((a, b) => b.length - a.length)
        //let sorting = checked.sort((a, b) => sum(b) - sum(a))
        const unique = uniq2(checked)
        rack.innerHTML = '';

        unique.forEach(shelfItem => {
            const shelf = document.createElement('div');
            shelf.classList.add('shelf');
            shelf.style.height = rack.clientHeight / (unique.length + 1) + "px"
            shelfItem.forEach(boxItem => {
                const box = document.createElement('div');
                box.classList.add('box')
                box.style.flex = `0 1 ${boxItem.length * 100 / SHELF_LENGTH}%`;
                //    box.style.height = shelf.style * 70 / 100 + '%'
                box.innerText = `${boxItem.length}мм`
                shelf.appendChild(box)
            })
            rack.appendChild(shelf)

        })

    }

    const btnSizes = document.querySelector(".btn_sizes")
    btnSizes.addEventListener('click', function handler(event) {

        const inputsArr = Array.from(event.target.parentElement.querySelectorAll('input'))

        const maxWidth = +event.target.parentElement.parentElement.style.maxWidth.replace('px', '')

        const inputArrToCheck = inputsArr.map(item => item.value)

        if (inputArrToCheck.some(el=> /^[1-9]\d*$/.test(el) === false)) {
            alert("ВВедите корректные значения длин")

        } else {

            const toLong = inputArrToCheck.some(item => item > SHELF_LENGTH)

            if (toLong) {
                alert(`Коробка больше ${SHELF_LENGTH}`)
            } else {
                boxRender(event.target)
            }
        }

    })
}

getAmount();

function permutation(inputArr) {
    let results = [];

    function permute(arr, memo) {
        let cur;
        let mem = memo || [];

        for (let i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(mem.concat(cur));
            }
            permute(arr.slice(), mem.concat(cur));
            arr.splice(i, 0, cur[0]);
        }
        return results;
    }

    return permute(inputArr);
}

function sum(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length
    }
    return sum
}

function lengthCheck(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        while (sum(arr[i]) > SHELF_LENGTH) {
            arr[i].pop()
        }
        if (arr[i].length > 0) {
            result.push(arr[i])
        }
    }
    window.checkedArr = result
    return result
}

// function getUnique(arr, sourceArr) {
//
//     let shelf = []
//     let keys = []
//     arr[0].forEach(item => {
//         keys.push(item.name)
//     })
//     shelf[0] = arr[0];
//
//     let rest = arr.filter((el, index, arr) => {
//
//         for (let i = 0; i < el.length; i++) {
//             if (keys.includes(el[i].name)) {
//                 return false;
//             }
//         }
//         el.forEach(item => {
//             keys.push(item.name)
//         })
//         return true
//     })
//
//     shelf = shelf.concat(rest);
//
//     let arrToCompare = []
//
//     shelf.forEach(el => {
//         arrToCompare.push(...el)
//     })
//
//
//     sourceArr.forEach(el => {
//         const f = arrToCompare.find(item => item.name === el.name)
//         if (f === undefined) {
//             shelf.push([el])
//         }
//     })
//
//     return shelf
// }

const uniq2 = (arr) => {

    arr.sort((a,b) => a.length - b.length)
    arr.sort((a, b)=>sum(b)-sum(a))

    const shelves = arr.splice(0,1)
    let keys = shelves[0].map(({name}) => name)

    while (arr.length > 0) {
        arr.sort((a, b)=>sum(b)-sum(a))
        arr.forEach((elAr)=>{
            keys.forEach(key=>{
                let index
                index = elAr.findIndex(({name})=>name===key)
                if(index !== -1) {
                    elAr.splice(index,1)
                }
            })
        })
        arr = arr.filter(el=>el.length>0).sort((a, b)=>sum(b)-sum(a))
        if (arr.length > 0) {

            const mem = arr.shift()
            shelves.push(mem)
            keys.push(...mem.map(({name}) => name))
        }
    }
    return shelves
}
//uniq2(window.checkedArr)