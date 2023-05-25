const nextButton=document.getElementById("nextbutton");
const formEl=document.forms.signin;

const formData= [];

// setItem in LocalStorage
const handleNextButton=(e)=>{
	
	const object={
		firstname:formEl.firstname.value,
		lastname:formEl.lastname.value,
		gmail:formEl.gmail.value,
		password:formEl.password.value,
		confirm:formEl.confirm.value,
	}
	formData.push(object);
	console.log(object.firstname,object.lastname,object.gmail);

		localStorage.setItem("formInput",JSON.stringify(formData));
	
		alert("Account Created");
		window.location.reload();
	
}



// GetItem from LocalStorage

document.addEventListener("DOMContentLoaded",(e)=>{
	formEl.firstname.focus();
	if(!localStorage.getItem("formInput")){
		return;
	}
	else{
		const fetchedDetails=[...JSON.parse(localStorage.getItem("formInput"))];
	fetchedDetails.forEach((value)=>{
		formData.push(value);
	})
}
	
})



// next Button Enter Event

function inputvalue(){
	if(formEl.firstname.value=="" 
		|| formEl.lastname.value=="" 
		|| formEl.gmail.value=="" 
		|| formEl.password.value=="" 
		|| formEl.confirm.value==""){
		return;
	}
	else{
		handleNextButton();
	}
}

nextButton.addEventListener("click",(e)=>{
	e.preventDefault();
	inputvalue();
});
document.addEventListener("keyup",(e)=>{
	e.preventDefault();
	if(e.key=="Enter"){
		inputvalue();
	};

});


// gmail

const gmailEl=formEl.elements.gmail;
gmailEl.addEventListener("change",()=>{
	if(!formEl.gmail.value){
		return;
	}
	else{
		formEl.gmail.value+="@gmail.com"
	}
	
})



// Error Msg


nextButton.addEventListener("click",()=>{
	if(!formEl.firstname.value || !formEl.lastname.value){
		document.querySelector("#namespan1").hidden=false;
	}
	else{
		document.querySelector("#namespan1").hidden=true;
	};

	if(!formEl.gmail.value){
		document.querySelector("#gmailspan2").hidden=false;
		document.querySelector("#gmailspan1").style.visibility="hidden";
	}
	else{
		document.querySelector("#gmailspan1").hidden=true;
		document.querySelector("#gmailspan2").style.visibility="visible";
	};

	if(!formEl.password.value || !formEl.confirm.value){
		document.querySelector("#passspan1").hidden=false;
		document.querySelector("#passspan3").style.visibility="hidden";
	}
	else{
		document.querySelector("#passspan1").hidden=true;
		document.querySelector("#passspan3").style.visibility="visible";
	};

});




// form validation


const fetchedDetails=[...JSON.parse(localStorage.getItem("formInput"))];

const firstName=[];

fetchedDetails.forEach((name)=>{

	firstName.push(name.firstname+" "+name.lastname);
	

})




const lastinput=formEl.lastname;
lastinput.addEventListener("change",()=>{
	firstName.forEach((name)=>{
		if(name===formEl.firstname.value+" "+formEl.lastname.value){
		document.querySelector("#namespan2").hidden=false;
		document.querySelector("#namespan1").hidden=true;
		formEl.firstname.value="";
		formEl.lastname.value="";
		formEl.firstname.focus();
	}
	})
	if(!formEl.firstname.value || !formEl.lastname.value){
		return;
	}
	else{
		document.querySelector("#namespan2").hidden=true;
		document.querySelector("#namespan1").hidden=true;
	}
})



const gmail=[];
fetchedDetails.forEach((name)=>{
	gmail.push(name.gmail);
});
const gmailinput=formEl.gmail;
gmailinput.addEventListener("change",()=>{
	gmail.forEach((name)=>{
		if(name===formEl.gmail.value){
		document.querySelector("#gmailspan3").hidden=false;
		document.querySelector("#gmailspan1").style.visibility="hidden";
		document.querySelector("#gmailspan2").hidden=true;
		formEl.gmail.value="";
		formEl.gmail.focus();
	}
	})
	if(!formEl.gmail.value){
		return;
	}
	else{
		document.querySelector("#gmailspan3").hidden=true;
		document.querySelector("#gmailspan2").hidden=true;
		document.querySelector("#gmailspan1").style.visibility="visible";
	}
})



const confirm=formEl.confirm;
confirm.addEventListener("change",()=>{
	if(formEl.password.value!=formEl.confirm.value){
		document.querySelector("#passspan2").hidden=false;
		document.querySelector("#passspan3").style.visibility="hidden";
		document.querySelector("#passspan1").hidden=true;

		formEl.password.value="";
		formEl.confirm.value="";
		formEl.password.focus();	
	}
	if(!formEl.password.value){
		return;
	}
	else{
		document.querySelector("#passspan2").hidden=true;
		document.querySelector("#passspan3").style.visibility="visible";
	}
});


// show password
formEl.showpassword.addEventListener("click",()=>{
if(formEl.showpassword.checked==true){
	formEl.password.setAttribute("type","number");
	formEl.confirm.setAttribute("type","number")
}
else{
	formEl.password.setAttribute("type","password");
	formEl.confirm.setAttribute("type","password");
}
});