function hiddenElement(cssSelector){
    
    let element = document.querySelector(cssSelector)
    if(element) element.style.display = "none"
    
}

function hidden(element){
    if(element != null)element.style.display = "none"
}

/* hiddenElement(".headline") */