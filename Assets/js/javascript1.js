const formEl=document.forms.signin;
const formData=[];
// set in local storage
const handlenextButton=(e)=>{
    const object={
        firstname:formEl.firstname.value,
        lastname:formEl.lastname.value,
        gmail:formEl.gmail.value,
        password:formEl.password.value,
        confirm:formEl.confirm.value
    };
    formData.push(object);
    localStorage.setItem("formInput",JSON.stringify(formData));
}


// getItem from localstorage
document.addEventListener("DOMContentLoaded",(e)=>{
    if(!localStorage.getItem("formInput")){
        return;
    }
    else{
        const fetchedDetails=[...JSON.parse(localStorage.getItem("formInput"))];
    fetchedDetails.forEach((data)=>{
        formData.push(data);
    })};
    formEl.elements.firstname.focus();
});



// next Button Event
const nextBtn=document.querySelector("#nextbutton");
nextBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!formEl.firstname.value||
        !formEl.lastname.value||
        !formEl.gmail.value||
        !formEl.password.value||
        !formEl.confirm.value){
           return;

        }
    else{
        handlenextButton();
        alert("Account Created")
        window.location.assign("login.html")
    }
});



// Error Msg

nextBtn.addEventListener("click",()=>{
	if(!formEl.firstname.value || !formEl.lastname.value){
		document.querySelector("#namespan1").hidden=false;
        document.querySelector("#namespan2").hidden=true;
	}
	else{
		document.querySelector("#namespan1").hidden=true;
        document.querySelector("#namespan2").hidden=true;
	};

	if(!formEl.gmail.value){
		document.querySelector("#gmailspan2").hidden=false;
		document.querySelector("#gmailspan1").style.visibility="hidden";
        document.querySelector("#gmailspan3").hidden=true;
	}
	else{
		document.querySelector("#gmailspan2").hidden=true;
		document.querySelector("#gmailspan1").style.visibility="visible";
	};

	if(!formEl.password.value || !formEl.confirm.value){
		document.querySelector("#passspan2").hidden=false;
		document.querySelector("#passspan1").style.visibility="hidden";
        document.querySelector("#passspan3").hidden=true;
	}
	else{
		document.querySelector("#passspan2").hidden=true;
		document.querySelector("#passspan1").style.visibility="visible";
	};

});




// Change Events
formEl.lastname.addEventListener("change",()=>{
    if(!formEl.firstname.value || !formEl.lastname.value){
        document.querySelector("#namespan1").hidden=false;
        document.querySelector("#namespan2").hidden=true;
    }
    else{
        document.querySelector("#namespan1").hidden=true;
        document.querySelector("#namespan2").hidden=true;
    }
})
formEl.gmail.addEventListener("change",()=>{
    if(!formEl.gmail.value){
        document.querySelector("#gmailspan2").hidden=false;
		document.querySelector("#gmailspan1").style.visibility="hidden";
        document.querySelector("#gmailspan3").hidden=true;
    }
    else{
        document.querySelector("#gmailspan2").hidden=true;
		document.querySelector("#gmailspan1").style.visibility="visible";
        formEl.gmail.value+="@gmail.com"
    }
})
formEl.confirm.addEventListener("change",()=>{
    if(!formEl.password.value || !formEl.confirm.value){
        document.querySelector("#passspan2").hidden=false;
		document.querySelector("#passspan1").style.visibility="hidden";
        document.querySelector("#passspan3").hidden=true;
    }
    else{
        document.querySelector("#passspan2").hidden=true;
		document.querySelector("#passspan1").style.visibility="visible";
    }

});


// Form Validation

                //Set firstname and Gamil values in array

const firstName=[];
const gmail=[];

document.addEventListener("DOMContentLoaded",()=>{
    if(!localStorage.getItem("formInput")){
        return;
    }
    else{
        const fetchedDetails=[...JSON.parse(localStorage.getItem("formInput"))];
        fetchedDetails.forEach((data)=>{
            firstName.push(data.firstname+" "+data.lastname);
            gmail.push(data.gmail);
        })
    }
})
console.log(firstName);



            // first Name
formEl.lastname.addEventListener("change",()=>{
    for(let name of firstName){
        if(name==formEl.firstname.value+" "+formEl.lastname.value){
            document.querySelector("#namespan2").hidden=false;
            document.querySelector("#namespan1").hidden=true;
            formEl.firstname.value="";
            formEl.lastname.value="";
            formEl.firstname.focus();
            break;
        }
        else{
            document.querySelector("#namespan2").hidden=true;
            document.querySelector("#namespan1").hidden=true;
        }
    }
     
});



            // Gamil
formEl.gmail.addEventListener("change",()=>{
    for(let id of gmail){
        if(id==formEl.gmail.value){
            document.querySelector("#gmailspan3").hidden=false;
            document.querySelector("#gmailspan1").style.visibility="hidden";
            document.querySelector("#gmailspan2").hidden=true;
            formEl.gmail.value=""
            formEl.gmail.focus();
            break;

        }
        else{
            document.querySelector("#gmailspan3").hidden=true;
            document.querySelector("#gmailspan1").style.visibility="visible";
            document.querySelector("#gmailspan2").hidden=true;
        }
    }
})



            // Password
formEl.confirm.addEventListener("change",()=>{
    if(formEl.password.value!=formEl.confirm.value){
        document.querySelector("#passspan3").hidden=false;
        document.querySelector("#passspan2").hidden=true;
        document.querySelector("#passspan1").style.visibility="hidden"
        formEl.password.value="";
        formEl.confirm.value="";
        formEl.password.focus();
    }
    else{
        document.querySelector("#passspan3").hidden=true;
        document.querySelector("#passspan2").hidden=true;
        document.querySelector("#passspan1").style.visibility="visible"
    }
})



            // Show passWord
console.log(document.querySelector(".iconshow i"));
document.querySelector(".iconshow").addEventListener("click",()=>{
    if(document.querySelector(".iconshow i").classList.contains("bi-eye-fill")){
        document.querySelector(".iconshow i").classList.remove("bi-eye-fill");
        document.querySelector(".iconshow i").classList.add("bi-eye-slash-fill");
        formEl.password.setAttribute("type","number");
        formEl.confirm.setAttribute("type","number");
        }
        else{
            document.querySelector(".iconshow i").classList.remove("bi-eye-slash-fill");
            document.querySelector(".iconshow i").classList.add("bi-eye-fill");
            formEl.password.setAttribute("type","password");
            formEl.confirm.setAttribute("type","password");
        }
});

            // Password Length
formEl.confirm.addEventListener("change",()=>{
    if(formEl.password.value.length>=8 && formEl.confirm.value.length>=8){
        document.querySelector("#passspan1 span").style.color="darkslategray";
    }
    else{
        document.querySelector("#passspan1 span").style.color="red";
        formEl.password.value="";
        formEl.confirm.value="";
        formEl.password.focus();
    }
    
})


