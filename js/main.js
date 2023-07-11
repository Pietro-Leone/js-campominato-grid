'use strict'

const container = document.getElementById("block-container");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {

        let block = document.createElement("div");
        block.classList.add("block");
        block.innerHTML = i.toString();
        container.append(block);

        block.addEventListener("click", function () {
            block.classList.toggle("bg-success");
        })
    }

})