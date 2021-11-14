function fist () {
    document.getElementById('MP2FST').classList.add('hide');
    document.getElementById('MP2SEC').classList.remove('hide');
    
}


function valid () {
    const button = document.getElementById('MP2SECbutton');
    const text = document.getElementById('MP2SECbuttonText');

    let name = document.getElementById('WYName').value;

if (name.length > 2) {
    
    
    button.style.backgroundColor="#222222";
    button.style.cursor="pointer";
    text.style.backgroundColor="#222222";
    text.style.cursor="pointer;"
    button.addEventListener("click", function(){nextpage(name)}, false);
}
else {
    button.style.backgroundColor="#999999";
    button.style.cursor="unset";
    text.style.backgroundColor="#999999";
    text.style.cursor="unset;"
    button.removeEventListener("click", function(){nextpage(name)}, false);
}
}

function nextpage (name) {
    let text = name;
    document.getElementById('MP2SEC').classList.add('hide');
    document.getElementById('MP2THR').classList.remove('hide');
    document.getElementById('MP2THRH1').innerHTML=text;
}