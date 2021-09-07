'use strict'

    function getAmount() {

        function sizesRender(btn, input) {

            const parent = btn.parentElement
            const amountValue = input.value
            if (amountValue !== '' && amountValue > 0) {
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
                    <p><input id="sizes_input_${i}" type="text" class="input" data-name="${i}" ></p>
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
        amountBtn.addEventListener("click", function handler(event) {
            sizesRender(event.target, amountInput)

        })
    }

    function getSizes() {

        function boxRender(btn, length) {
            const inputNodes = btn.parentElement.querySelectorAll('input')
            const rack = document.getElementById('rack')


            const boxes = Array.from(inputNodes).map(item => +item.value).sort((a, b) => b - a)


            const position = getArr(boxes, length)

            console.log(position)

            rack.innerHTML = '';

            position.forEach(shelfItem => {
                const shelf = document.createElement('div');
                shelf.classList.add('shelf');
                shelf.style.height = rack.clientHeight / (position.length + 1) + "px"
                shelfItem.forEach(boxItem => {
                    const box = document.createElement('div');
                    box.classList.add('box')
                    box.style.flex = `0 1 ${boxItem}px`;
                    //    box.style.height = shelf.style * 70 / 100 + '%'
                    box.innerText = `${boxItem}мм`
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

            if (inputArrToCheck.indexOf('') >= 0) {
                alert("ВВедите все значения")

            } else {

                const toLong = inputArrToCheck.some(item => item > maxWidth)

                if (toLong) {
                    alert(`Коробка больше ${maxWidth}`)
                } else {
                    boxRender(event.target, maxWidth)
                }
            }

        })
    }

    getAmount();

    function sum(arr) {

        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }

    function getArr(arr, length) {
        let rack = [];
        let count = 0;
        function rec(arr) {

            let temp = arr.slice(1)
            if (arr.length === 0) {
                return rack
            }

            rack[count] = []
            rack[count][0] = arr[0];


            for (let i = 0; i < temp.length; i++) {
                if (sum(rack[count]) + temp[i] < length) {
                    rack[count].push(temp[i])
                    temp[i] = null
                }
            }
            let changeArr = temp.filter(el => el !== null)
            count++
            return rec(changeArr)
        }

        return rec(arr)
    }

