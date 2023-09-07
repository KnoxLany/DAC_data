function ValidateEmpty(controlId, errorControlId,errorMessage, dataControlId)
{
    debugger;
    var refToControlToValidate = 
        document.getElementById(controlId);
     
    var refToerrorControl = 
        document.getElementById(errorControlId);

    var refTodataControl = 
     document.getElementById(dataControlId);
    
    if(refToControlToValidate.value =="")
    {
        refToerrorControl.innerText = errorMessage;
        refTodataControl.innerText = "";
    }
    else
    {
        refToerrorControl.innerText="";
        refTodataControl.innerText = 
             refToControlToValidate.value
    }

}

