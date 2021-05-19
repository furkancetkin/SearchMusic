var input = document.getElementById("search");
var tr = document.getElementsByTagName("tr");
 
input.addEventListener('keyup',  function searchFunction(){
    var filter, table, tr, td, td2, td3, td4, txtValue, txtValue2, txtValue3, txtValue4;

    filter = input.value.toUpperCase();
    table = document.getElementById("tablo");
    tr = document.getElementsByTagName("tr");

    for(var i=0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        td2 =  tr[i].getElementsByTagName("td")[1];
        td3 =  tr[i].getElementsByTagName("td")[2];
        td4 =  tr[i].getElementsByTagName("td")[3];
        console.log(td);
        console.log(td2);
        if(td || td2 || td3 || td4){
            txtValue = td.textContent || td.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            txtValue3 = td3.textContent || td3.innerText;
            txtValue4 = td4.textContent || td4.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 || txtValue4.indexOf(filter) > -1){
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
        }
    }
})

var renkler = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];
for (var i = 1; i < tr.length; i++) {
    tr[i].classList.add(
        "table-" + renkler[Math.floor(Math.random() * renkler.length)]
    );
}
