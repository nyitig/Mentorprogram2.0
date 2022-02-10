const button = document.getElementById('MP2SECbutton');
const textInput = document.getElementById('WYName');
const MP2FST = document.getElementById('MP2FST');
const MP2SEC = document.getElementById('MP2SEC');
const MP2THR = document.getElementById('MP2THR');
const div = document.createElement('div');
textInput.addEventListener("keyup", valid);
textInput.addEventListener("keypress", validEnt);
button.addEventListener("click", nextPage);

function fist () {
	MP2FST.classList.remove('displayFlex');
    MP2FST.classList.add('hide');
    MP2SEC.classList.remove('hide');
	MP2SEC.classList.add('displayFlex');
}

function valid () {
   const text = document.getElementById('MP2SECbuttonText');
   let name = document.getElementById('WYName').value;
if (name.length >2) {
    button.style.backgroundColor="#222222";
    button.style.cursor="pointer";
    text.style.backgroundColor="#222222";
    text.style.cursor="pointer";
}
else {
    button.style.backgroundColor="#999999";
    button.style.cursor="unset";
    text.style.backgroundColor="#999999";
    text.style.cursor="unset;"
	}
}

function validEnt (event) {
	if (event.keyCode == 13) {
		nextPage();
		}
}
/*let mockedData = [
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
];*/
/*Feladat_04 */
let mockedData={};
const numberOf =20; // résztvevők száma
const url = 'https://randomuser.me/api/?nat=us&results=' + numberOf;
const startData = fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((res) => {
        //console.log("res: "+res);
        return res.json();
    })
    .then((data) => {
        const result = data.results.map((element) => {
            // console.log(element.name.first, element.name.last);
            return {
                name: element.name.first + ' ' + element.name.last,
                img: element.picture.thumbnail,
            };
        });
        //console.log(result);
        return result;
    });

startData.then((data) => {
  
	for (let i = 0; i < numberOf; i++) {
		kiir(data,i);
		}
});

function kiir(temp,index) {
	const urlChuck = "https://api.chucknorris.io/jokes/random";
	const getChuckJoke = fetch(urlChuck, {
        headers: {
            "Accept": "application/json"
        }
    }).then(response => response.json())
        .then(adat => {
			temp[index].message=adat.value;
				}).then( izeke =>{
					mockedData=temp;
								}
		);
};

/*Feladat_02 */

function nextPage () {
    let text = textInput.value;
	if (text.length >2) {
		MP2SEC.classList.remove('displayFlex');
    	MP2SEC.classList.add('hide');
    	MP2THR.classList.remove('hide');
		MP2THR.classList.add('displayFlex');
		let divMPList = `
	<div id="homeHeader">
        <span id="iName">Hi, ${text}</span>
        <span id="homeHeaderMenu"></span>
    </div>
    <div id="startNCH">
        <h2>Start a new chat</h2>
    </div>
    <div id="newChat">
        <div id="profPic"></div>
        <span id="newChatText">New chat</span>
        <span id="newChatSer"></span>
    </div>
    <div id="parti">
		${mockedData.map(mockedData => ` 
	<div class=" displayFlexParti chatMessage">
		<img class="profPic" src=${mockedData.img}></img>
	<div class="textContainer">
		<div class="userName">${mockedData.name}</div>
		<p class="userMessage userMessageId">${mockedData.message} </p>
		</div>
	</div>
`).join('')}
    </div>`;
	div.innerHTML = divMPList;
	MP2THR.innerHTML= divMPList;
	userMessageAction(); // Résztvevők kattinthatók legyenek

	// FELADAT_03 0. feladat: Ha klikk a "Search" mezőre, akkor... 
	document.getElementById('newChat').addEventListener('click', searchPageGenerate);
	}
};

function userMessageAction() {
	const userMessageDiv= document.querySelectorAll(".profPic");
	const displayFlexPartiDiv=document.querySelectorAll(".chatMessage");
	for (let i = 0; i < userMessageDiv.length; i++) {
		// A résztvevők container-e clikk eventet kap, ha clikk=>chatablak creat
		let x=userMessageDiv[i].innerHTML;
		displayFlexPartiDiv[i].addEventListener('click', createChatMessage);
	}
};

function createChatMessage(e) {
			/* klikkel áthozom a részvevő képét, nevét, üzenetét*/
	let profPicsrc=this.querySelector(".profPic").getAttribute('src');
	let userNametext=this.querySelector(".userName").innerHTML;
	let userMessagetext = this.querySelector(".userMessageId").innerHTML;

	// a megjelenő chat ablak html-je template-je
	let chatMessageDiv = `
	<div id="displayFlexChat">
		<div id="backHeader">
			<img src="assets/back.png" alt="" id="backButton">
		</div>
		<div id="bottomContainer">
			<div id="callPerson" class="displayFlexPartiChat">
				<img class="profPic" src="${profPicsrc}" alt="">
				<div class="userName">${userNametext}</div>
				<span id="chatSpan">  <i class="tiny material-icons center">chevron_right</i> </span>
		</div>
		<div id="Today">today</div>
		<div id="userMessageBox">
			<div id="userMessageBoxText">${userMessagetext}</div>
		</div>
		<div id="messageTextBox">
			<input type="text" class="graybackground" id="typeMessage" placeholder="Type a message">
			<img class="graybackground" src="assets/camera.png" alt="">
			<img  class="graybackground" src="assets/mic.png" alt="">
		</div>
		<div id="actionReaction" >
			<div class="emojiChat">😍</div>
			<div class="emojiChat">😂</div>
			<div class="emojiChat">😱</div>
			<div><img src="assets/dots.png" alt=""></div>
			<div class="reactText">GIF</div>
			<div class="reactText">STICKERS</div>
		</div>
		</div>
	</div>`;
	div.innerHTML=chatMessageDiv;
	MP2THR.innerHTML=chatMessageDiv;
	// Ha a back nyílra kattint, akkor újra legenerálja a chat fő ablakát
	document.getElementById('backHeader').addEventListener('click', nextPage);
};

// FELADAT_03


function searchPageGenerate() {
// először is a mockedData tömböt abc sorrandbe teszem. NEM SAJÁT KÓD, ÚGY TALÁLTAM!
const sortedUsers = mockedData.sort(function(a, b) {
	let nameA = a.name.toUpperCase(); // ignore upper and lowercase
	let nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
	  return -1; //nameA comes first
	}
	if (nameA > nameB) {
	  return 1; // nameB comes first
	}
	return 0;  // names must be equal
  });
  abc(sortedUsers);
}
  function abc(sortedUsers) {
// Ha megvan, jöhet az abc tömbös kialakítás. EZ SEM SAJÁT KÓD!!
	let data = sortedUsers.reduce((r, e) => {
	// get first letter of name of current element
	let abc = e.name[0];
  	// if there is no property in accumulator with this letter create it
	if (!r[abc]) r[abc] = { abc, record:[e] }
  	// if there is push current element to children array for that letter
	else r[abc].record.push(e);
  	// return accumulator
	return r;
  }, {});
  let result = Object.values(data);
 getToScreen(result);
  // Kész a megfelelő tömb, jöhet a HTML-be importálás. Na, ez már saját kód. :)
  }
 
function getToScreen(result) {
  		let searchDisplayTemplate=`
	<div id="searchBack">
		<i class="material-icons">close</i>
	</div>
	<div id="searchInputDiv">
		<input type="text" name="searchInput" id="searchInput" class="searchInput" placeholder="search" autocomplete="off" value="">
	</div>`;
		let searchContactArrayTemplate = `<div id="searchContactArray">`;
		searchDisplayTemplate +=searchContactArrayTemplate;
for (let i = 0, len=result.length; i < len; i++) {
/*Itt ketté kell választani a template létrehozását:
 - ha a result[i].record.lenght nagyobb, mint 0, akkor ...
 - ha a lenght ==0 akkor...
*/
let resultRecordLen=result[i].record.length;
let alphabetSearchContactArrayDiv= ` <div id="searchContactAlphabetArray">`;
		searchDisplayTemplate +=alphabetSearchContactArrayDiv;
if(resultRecordLen>0) {
	for (let k = 0; k < resultRecordLen; k++) {
		let multisearchContactArrayTemplate=`
	<div id="searchContactArrayRow">`;
	searchDisplayTemplate +=multisearchContactArrayTemplate;
	if(k==0) {
		let zeroResultRecordLen =`
		<div id="searchAlphabet">${result[i].abc.toLowerCase()}</div>`;
		searchDisplayTemplate +=zeroResultRecordLen;
	}
	else {
		let nonZeroResultRecordLen =`
		<div id="searchAlphabet"></div>`;
		searchDisplayTemplate +=nonZeroResultRecordLen;
	}
	let profpicTemplate=`
		<div id="profcontainer" class="chatMessage">
			<div>
				<img class="profPic"  src="${result[i].record[k].img}" alt="">
			</div>
		<div id="username" class="userName">${result[i].record[k].name}</div>
		<div id="usermessageNone" class="userMessageId">${result[i].record[k].message}</div>
	</div>
</div> 
		`;
		searchDisplayTemplate +=profpicTemplate;
		}
};
}
let endOfSearchContactArrayTemplate=`</div>`;
searchDisplayTemplate +=endOfSearchContactArrayTemplate;
MP2THR.innerHTML=searchDisplayTemplate;
const searchInputTag = document.getElementById('searchInput');
userMessageAction(); // Résztvevők kattinthatók legyenek
document.getElementById('searchBack').addEventListener('click', nextPage); //visszatérés
searchInputTag.addEventListener("keyup", checkInputObject);
// search and check input ez is saját kód

function checkInputObject() {
	let searchTextInputValue = searchInputTag.value;
	let newContactArrayTemplate= "";
	const searchContacktArrayDiv= document.querySelector('#searchContactArray');
	const searchCreatDiv = document.createElement('div');
	if(searchTextInputValue.length !=0) {
		searchInputTag.classList.remove('searchInput');
		searchInputTag.classList.add('searchInputone');
		for (let i = 0; i < result.length; i++) {
			let resreclen= result[i].record.length;
			for (let k = 0; k < resreclen; k++) {
				let ezaz = result[i].record[k].name;
				if(ezaz.toLowerCase().indexOf(searchTextInputValue.toLowerCase()) != -1) {
					let newContactArrayTemplateTemp= `
					<div id="searchContactArrayRow">
						<div id="profcontainer" class="chatMessage">
							<div>
								<img class="profPic" src="${result[i].record[k].img}" alt="">
							</div>
							<div id="username" class="userName">${result[i].record[k].name}</div>
	
							<div id="usermessageNone" class="userMessageId">${result[i].record[k].message}</div>
						</div>
					</div> `;
					newContactArrayTemplate +=newContactArrayTemplateTemp;
					}
				}
			}
		searchContacktArrayDiv.innerHTML=newContactArrayTemplate;
		userMessageAction(); // Résztvevők kattinthatók legyenek
	}
	else {
		searchInputTag.classList.remove('searchInputone');
		searchInputTag.classList.add('searchInput');
		// itt most ki kell írni a komplett tömböt.
		let searchContactArrayTemplate = ``;
		for (let i = 0, len=result.length; i < len; i++) {
			/*
			Itt ketté kell választani a template létrehozását:
			 - ha a result[i].record.lenght nagyobb, mint 0, akkor ...
			 - ha a lenght ==0 akkor...
			*/
			let resultRecordLen=result[i].record.length;
			let alphabetSearchContactArrayDiv= ` <div id="searchContactAlphabetArray">`;
					searchContactArrayTemplate +=alphabetSearchContactArrayDiv;
			if(resultRecordLen>0) {
				for (let k = 0; k < resultRecordLen; k++) {
					
					let multisearchContactArrayTemplate=`
				<div id="searchContactArrayRow">`;
				searchContactArrayTemplate +=multisearchContactArrayTemplate;
				if(k==0) {
					let zeroResultRecordLen =`
					<div id="searchAlphabet">${result[i].abc.toLowerCase()}</div>`;
					searchContactArrayTemplate +=zeroResultRecordLen;
				}
				else {
					let nonZeroResultRecordLen =`
					<div id="searchAlphabet"></div>`;
					searchContactArrayTemplate +=nonZeroResultRecordLen;
				}
				let profpicTemplate=`
					<div id="profcontainer" class="chatMessage">
					<div>
					<img class="profPic" src="${result[i].record[k].img}" alt="">
					</div>
				<div id="username" class="userName">${result[i].record[k].name}</div>
				
				<div id="usermessageNone" class="userMessageId">${result[i].record[k].message}</div>
				</div>
			</div> `;
searchContactArrayTemplate +=profpicTemplate;
}};}
searchContacktArrayDiv.innerHTML=searchContactArrayTemplate;
}};};







