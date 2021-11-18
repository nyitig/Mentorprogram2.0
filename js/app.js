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
/*Feladat_02 */


function nextpage (name) {
    let text = name;
    document.getElementById('MP2SEC').classList.add('hide');
    document.getElementById('MP2THR').classList.remove('hide');

    let elemTagName = "h1"
    const para = document.createElement(elemTagName);
    const node = document.createTextNode(name);
    para.appendChild(node);
    const element = document.getElementById("MP2THR");
    element.appendChild(para);

    /*document.getElementById('MP2THRH1').innerHTML="Hi, "+text;
    function creatElement (elemTagName) {
        let a = elemTagName;
        let b = document.getElementById('MP2THR');
        b.appendChild.a;
        
    }*/

}




let mockedData = [
	{
		name: 'Aubrey Baker',
		img: 'https://randomuser.me/api/portraits/thumb/women/17.jpg',
		message:
			'Chuck Norris is the only man ever to beat a brick wall in a game of tennis.',
	},
	{
		name: 'Kent Dean',
		img: 'https://randomuser.me/api/portraits/thumb/men/71.jpg',
		message: "Chuck Norris ordered a Whopper at Mcdonald's, and got one!!!!!!",
	},
	{
		name: 'Alfredo Byrd',
		img: 'https://randomuser.me/api/portraits/thumb/men/16.jpg',
		message: 'Chuck Norris can shoot you without a gun...',
	},
	{
		name: 'Jeffery Holmes',
		img: 'https://randomuser.me/api/portraits/thumb/men/79.jpg',
		message: "Chuck Norris's mother left before he was born",
	},
	{
		name: 'Sophia Hamilton',
		img: 'https://randomuser.me/api/portraits/thumb/women/74.jpg',
		message:
			"Chuck Norris likes lots of honey on his Texas Toast. That's why he keeps 27 killer bee hives in his livingroom.",
	},
	{
		name: 'Theresa Barnett',
		img: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
		message: 'When Chuck Norris moves in next door to you your lawn will die.',
	},
	{
		name: 'Brent Terry',
		img: 'https://randomuser.me/api/portraits/thumb/men/58.jpg',
		message:
			"Yahweh strictly adheres to Chuck Norris' first commandment: having no other gods before him.",
	},
	{
		name: 'Kathryn Kuhn',
		img: 'https://randomuser.me/api/portraits/thumb/women/43.jpg',
		message:
			'The original Linux kernel was written in Persian by Chuck Norris. Linus Torvalds ported it to C.',
	},
	{
		name: 'Jack Shaw',
		img: 'https://randomuser.me/api/portraits/thumb/men/90.jpg',
		message:
			'Chuck Norris can cast Tenth Level Spells under First Edition rules.',
	},
];