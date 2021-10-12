var $ = function(id){
    return document.getElementById(id);
}

function openedText(){
    let faqs =$('faqs');
    let linkList = faqs.getElementsByTagName('a');
    let divOpen = faqs.getElementsByClassName('closed')
    let linkNode;
    for(let i = 0; i< linkList.length;i++)
    {
        linkNode = linkList[i];
        let div =divOpen[i];
        

        linkNode.onclick = function(){
            var link = this
            console.log(link);
            if(link.getAttribute('class') == "plus")
            {
                link.setAttribute('class', 'minus')
            }
            else{
                link.setAttribute('class','plus')
            }
            
            if(div.getAttribute('class') == 'closed')
            {
                div.setAttribute('class','opened');
            }
            else{
                div.setAttribute('class','closed');
            }

            link.addEventListener("click", function(event)
            {event.preventDefault()});
        }
    }
    
}

window.onload = function(){
    openedText();
}