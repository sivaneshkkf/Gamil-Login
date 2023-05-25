const fetchedDetails=[];
const tableEl=document.querySelector("table tbody");
	const tcEl=document.createElement("tc")

document.addEventListener("DOMContentLoaded",(e)=>{
	if(!localStorage.getItem("formInput")){
		return;
	}
	else{
	const fetched=[...JSON.parse(localStorage.getItem("formInput"))];
	fetched.forEach((value)=>{
	fetchedDetails.push(value);
})
	for (let i=0; i<fetchedDetails.length;i++){
	var tr=tableEl.insertRow();
	var cell1=tr.insertCell();
	var cell2=tr.insertCell();
	var cell3=tr.insertCell();

	cell1.innerText=fetchedDetails[i].firstname;
	cell2.innerText=fetchedDetails[i].lastname;
	cell3.innerText=fetchedDetails[i].gmail;

	}
}
})



const Btn=document.querySelector(".btn");
Btn.addEventListener("click",()=>{
	window.location.reload();
})

document.addEventListener("DOMContentLoaded",()=>{
	if(!localStorage.getItem("formInput")){
		document.querySelector("table").hidden=true;
	}
	else{
		document.querySelector("h2").hidden=true;
	}
})



// Clear Data

const clearBtn=document.getElementById("clearbtn");

clearBtn.addEventListener("click",()=>{

	localStorage.clear();

});