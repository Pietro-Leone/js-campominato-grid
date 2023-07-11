'use strict'

const container = document.getElementById("block-container");
const select = document.getElementById("difficulty");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const selectDifficulty = parseInt(select.value);

    const difficulty = selectRow(selectDifficulty);

    container.innerHTML = "";

    for (let i = 0; i < difficulty; i++) {

        createBlock(container, difficulty);

    }

})

function createBlock(containerBlock, y) {
    let block = document.createElement("div");
    block.classList.add("block");
    block.style.flexBasis = `calc(100% / ${Math.sqrt(y)})`;
    containerBlock.append(block);

    block.addEventListener("click", function () {
        block.classList.toggle("bg-success");
    })
}

function selectRow(x) {
    let blockInRow = 0;

    if (x === 1) {
        blockInRow = 100;
    }
    else if (x === 2) {
        blockInRow = 81;
    }
    else if (x === 3) {
        blockInRow = 49;
    }
    return blockInRow;
}