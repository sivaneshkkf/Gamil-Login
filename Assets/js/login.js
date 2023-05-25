const formEl=document.forms.login;
let gmail=[];
let Data=[];
console.log(gmail);
document.addEventListener("DOMContentLoaded",()=>{
	formEl.gmail.focus();
	if(localStorage.getItem("formInput")){
		const fetchedDetails=[...JSON.parse(localStorage.getItem("formInput"))]
 fetchedDetails.forEach((data)=>{
 	gmail.push(data.gmail);
 	Data.push(data);
	});
	}
	else{
		return;
 	}

});

// bottons and spans
const loginBtn=document.querySelector("#btn");
const nameSpan1=document.querySelector(".inputname #span1");
const nameSpan2=document.querySelector(".inputname #span2");
const nameI1=document.querySelector(".inputname #i1");
const nameI2=document.querySelector(".inputname #i2");
const passSpan1=document.querySelector(".inputpassword #span1");
const passSpan2=document.querySelector(".inputpassword #span2");
const passI1=document.querySelector(".inputpassword #i1");
const passI2=document.querySelector(".inputpassword #i2");


// login button Action
			
				// input gmail
loginBtn.addEventListener("click",(e)=>{
	e.preventDefault()
	if(!formEl.gmail.value){
		nameSpan1.setAttribute("class","span1");
		nameI1.hidden=false;
	}
	else{
		nameSpan1.classList.remove("span1")
		nameI1.hidden=true;
	}
})

formEl.gmail.addEventListener("change",()=>{
	if(!formEl.gmail.value){
		nameSpan1.setAttribute("class","span1");
		nameSpan2.classList.remove("span2")
		nameI1.hidden=false;
	}
	else{
		nameSpan1.classList.remove("span1")
		nameI1.hidden=true;
	}
})


				// input password
loginBtn.addEventListener("click",(e)=>{
	e.preventDefault()
	if(!formEl.password.value){
		passSpan1.setAttribute("class","span1");
		passSpan2.classList.remove("span2")
		passI1.hidden=false;
	}
	else{
		passSpan1.classList.remove("span1")
		passI1.hidden=true;
		
	}
})

formEl.password.addEventListener("change",()=>{
	if(!formEl.password.value){
		passSpan1.setAttribute("class","span1");
		passSpan2.classList.remove("span2")
		passI1.hidden=false;
	}
	else{
		passSpan1.classList.remove("span1")
		passI1.hidden=true;
	}
})


// comparing gmail input
const compareGmail=()=>{
	if(formEl.gmail.value){
		for(let i of gmail){
			if(i==formEl.gmail.value){
				nameSpan2.classList.remove("span2")
				nameI1.hidden=true;
				break;
			}
			else{
				nameSpan2.setAttribute("class","span2");
				nameI1.hidden=false;
			}
		}
	
	}
	else{
		nameSpan1.setAttribute("class","span1");
		nameI1.hidden=false;
	}
};


const passwordValidation=(gmailId)=>{
	if(formEl.gmail.value){
		for(let i of gmail){
			if(i==formEl.gmail.value){
				const index=gmail.indexOf(gmailId);
				console.log(index);
				const user=Data[index];
				console.log(user);
				if(user.password==formEl.password.value){
					console.log("login success");
					setlocalStorage(user);
					success(userperson);
					hiddenlogin();
					showsuccess();
					
				}
				else{
					passSpan2.setAttribute("class","span2");
					passI1.hidden=false;
				}
			}
			else{
				console.log("invalid gmail")
			}
			}
		}
		else{
			console.log("gmailId Nil")
		}

	};


loginBtn.addEventListener("click",(e)=>{
	e.preventDefault()
	compareGmail();
	passwordValidation(formEl.gmail.value);
})


// signup button action

const signupBtn=document.querySelector(".signupbtn");

signupBtn.addEventListener("click",()=>{
	window.location.assign("index.html")
})




// Login Success!

const successusername=document.querySelector("#username");

let userperson;
function setlocalStorage(user){
	localStorage.setItem("person",JSON.stringify(user));
	userperson=JSON.parse(localStorage.getItem("person"))
};
console.log(userperson);

function success(user){

	
successusername.innerHTML=`Welcome ${user.firstname}${user.lastname}`;
}

function hiddenlogin(){
	document.querySelector(".login").classList.add("hidden");		
};
function showlogin(){
	document.querySelector(".login").classList.remove("hidden");		
};
function showsuccess(){
	document.querySelector(".loginsuccess").classList.remove("hidden");
};
function hiddensuccess(){
	document.querySelector(".loginsuccess").classList.add("hidden");
};

document.addEventListener("DOMContentLoaded",()=>{
	if(localStorage.getItem("person")){
		let successuser=JSON.parse(localStorage.getItem("person"));
		console.log(successuser);
		success(successuser);
		hiddenlogin();
		showsuccess();
	}
	else{
		return;
	}
})


// Logout function

const logoutBtn=document.querySelector("#logoutBtn");
logoutBtn.onclick=()=>{
	if(localStorage.getItem("person")){
		localStorage.removeItem("person");
		showlogin();
		hiddensuccess();
		window.location.reload();

	}
	else{
		return;
	}
}


// show password

document.querySelector(".iconshow").onclick=()=>{
	if(document.querySelector(".iconshow i").classList.contains("bi-eye-fill")){
		document.querySelector(".iconshow i").classList.remove("bi-eye-fill");
		document.querySelector(".iconshow i").classList.add("bi-eye-slash-fill");
		formEl.password.setAttribute("type","text");
	}
	else{
		document.querySelector(".iconshow i").classList.add("bi-eye-fill");
		document.querySelector(".iconshow i").classList.remove("bi-eye-slash-fill");
		formEl.password.setAttribute("type","password");
	}
};