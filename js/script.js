function day (cc,yy,mm,dd){
    return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
  }
  function myClick(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var rovine = new Date();
    rovine.setDate(parseInt(day));
    rovine.setMonth(parseInt(Month)-1);
    rovine.setFullYear(parseInt(year));
    var r = rovine.getDay();
    if(r===0){
        alert("Your born day is sunday");
    }else if(r===1){
        alert("Your born is monday");
    }else if(r===2){
        alert("Your born day is tuesday");
    }else if(r===3){
        alert("Your born day is wednesday");
    }else if(r===4){
        alert("Your born is thursday");
    }else if(r===5){
        alert("Your born is friday");
    }else if(r===6){
        alert("Your born day is saturday");
    }
    if(year==""||year>2056){
        alert("insert a valid year");
    }else if(Month=="" ||Month>12){
        alert("Enter a valid month");
    }else if(day=="" ||day>31){
        alert("Enter a valid month");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        alert("Your Akan name is " + maleName[r]);
    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        alert("Your Akan name is " + femaleName[r]);
    }
}