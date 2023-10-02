// Add your code here
function submitData(nme, email){
    return fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{
            "content-Type":"application/json",
            "Accept":"application/json",
        },
        body:JSON.stringify({
            name:nme,
            email:email,
        }),
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const newID = data.id;
        const newIdElement = document.getElementById('new-id');
        newIdElement.textContent = newID;
      })
      .catch(error => {
        const errorMessage = error.message;
        const errorElement = document.getElementById('error-message');
        errorElement.textContent = errorMessage;
      });
}

submitData("Mike","Restricted");
