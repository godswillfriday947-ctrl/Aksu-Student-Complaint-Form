const complaintForm = document.querySelector("#complaint-form");
if (complaintForm) {
    complaintForm.addEventListener(
        "submit", function (event){
             event.preventDefault();
             const title = document.getElementById("title").value.trim();
             const category = document.getElementById("category").value;
             const description = document.getElementById("description").value.trim();
             if(title === ""||category ===""|| description==""){
                alert("please complete all complaint fields.");
                return;
             }
             alert("complaint validated successfully!");
        }
    );

    
}