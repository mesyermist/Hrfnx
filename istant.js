

function sprawdz()
{
    var text = document.getElementById("liczba").value;
   
    if (text == "hej") document.getElementById("odp").innerHTML="witam";
    else if (text == "pa") document.getElementById("odp").innerHTML="do widzenia";
    else if (text == "System.call:reaction:pa") document.getElementById("odp").innerHTML="do widzenia ";
    else if (text == "System.call:reaction:hej") document.getElementById("odp").innerHTML="witam ";
    else if (text == "System.call:reaction:komend/list") document.getElementById("odp").innerHTML=" System.call:reaction:komend/list .System.call:reaction:pa.System.call:reaction:hej";
}


