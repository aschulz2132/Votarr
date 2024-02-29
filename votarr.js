
function increase(){
    console.log('i');
}
function decrease(){
    console.log('d');
}
async function modifyDOMCount(element,url) {
    console.log(url)
    let request = "https://ed35d561-c200-49d2-98a4-7f6388b11eb9-00-29ltzhq0df92x.spock.replit.dev/votes?url="+url
    console.log(request)
    let response = await fetch(request,{mode: 'cors',method:"GET"})
    if(response!=null){
    
    let json = await response.json()
    json = String(json).replaceAll("'",'"')
    const parsedJSON = await JSON.parse(json)
    console.log(element)
    console.log(json)
    console.log(parsedJSON.totalvotes);
    element.innerHTML =parsedJSON.totalvotes;
    }
    
 }

  
document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        alert("hi 1");
    }

    if (event.target.readyState === "complete") {
        console.log("hi 2");
        let elements = document.getElementsByTagName("article")
        console.log(elements.length);
        const newNode = document.createElement("div");
        newNode.className="div1"
        newNode.innerHTML="<button class='upvote'></button><div class='div2'></div><button class='downvote'></button>"
        newNode.childNodes[0].onclick=function(){increase()}
        newNode.childNodes[2].onclick=function(){decrease()}
        newNode.childNodes[1].innerHTML="<p class='p1' id=31>...</p>"
        const first = elements[0];
        let ptag = newNode.childNodes[1].childNodes[0]
    
        const url = first.childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML
        let urlStripped = url.replace('https://','');
        urlStripped = urlStripped.replace('http://','')
        let parsedDomain = psl.parse(urlStripped).domain

     console.log(parsedDomain)
        modifyDOMCount(ptag,parsedDomain)
      //console.log(urlresponse)
     // let upvotes =  urlresponse.upvotes
      //let downvotes  = urlresponse.downvotes
      //console.log(parsedDomain+" upvotes: "+String(upvotes)+" downvotes: " + String(downvotes)+" total votes: "+String(upvotes-downvotes))
     // newNode.childNodes[1].childNodes[0].innerHTML=

        const parentDiv = first.parentNode
        parentDiv.insertBefore(newNode,first)
        console.log("first: "+first)
        console.log("parent: "+parentDiv)
        console.log("appended: "+newNode)

        for(let i = 0; i < elements.length; i++) {
            console.log(i + ": " + elements[i].id);
            

        }

        }
});