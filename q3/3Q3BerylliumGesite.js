let acctString = localStorage.getItem("accounts");
let accountList = acctString ? JSON.parse(acctString) : [];

const form = document.getElementById("dForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    if (confirm("Would you like to proceed?")) {   

        const data = new FormData(form);
        const obj = Object.fromEntries(data.entries()); 

        accountList.push(obj);
    
        localStorage.setItem("accounts", JSON.stringify(accountList));
        
        alert("Registration Successful!");
        form.reset(); 
    }
});

btnClear.addEventListener("reset", function(e) {
    if (!confirm("Are you sure you want to clear your data?")) {
        e.preventDefault();
    }
});


function changeColor(ele) {
    ele.style.backgroundColor = "#fae4f4"; 
} 
function resetColor(ele) {
    ele.style.backgroundColor = "white";
}