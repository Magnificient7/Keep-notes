/* <div class="text">
    <div class="textBox">
        <textarea class="textarea"></textarea>
        <button class="btn1">X</button>
        <button class="btn2">+</button>
    </div>
</div> */

const abutton = document.querySelector(".button");
// const text = document.querySelector("text");
const newOne = (text=" ")=>{
    const note = document.createElement("div");
    note.classList.add("text");
    const htmlData = `<div class="textBox">
    <textarea class="textarea"></textarea>
    <button class="btn1">X</button>
    <button class="btn2">+</button>
</div>
    `;
    note.insertAdjacentHTML("afterbegin",htmlData);

    document.body.append(note);
    const del = note.querySelector(".btn1");
    const add = note.querySelector(".btn2");
    const textBox = note.querySelector(".textBox");
    const textarea = note.querySelector(".textarea");
    del.addEventListener("click",()=>{
        note.remove();
    })

}
abutton.addEventListener("click",newOne);


