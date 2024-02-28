/*
window.onload = (event) => {
let elements = document.getElementsByTagName("article")
console.log(elements);
console.log(elements.length);
for(let i = 0; i++; i< elements.length){

}
};

*/

document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        alert("hi 1");
    }

    if (event.target.readyState === "complete") {
        console.log("hi 2");
        let elements = document.getElementsByTagName("article")
        console.log(elements.length);
        const first = elements[0];
       
        for(let i = 0; i < elements.length; i++) {
            console.log(i + ": " + elements[i].id);
            

        }

        }
});