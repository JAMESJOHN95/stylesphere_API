const login = (event) => {
    event.preventDefault();
    if (userinput.value === "" && passinput.value === "") {
        alert("Please fill the form")
    }
    else {
        window.location.href = "home.html"
    }

}

const costumes = async () => {
try{    const costume_data = await fetch("https://fakestoreapi.com/products")
if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
}
    const data = await costume_data.json()
    console.log(data);

//     final.innerHTML += `          
//       <div class="col-lg-4">
//     <div class="card" style="width: 18rem;">
//         <img src="${data[0].image}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${data[0].title}</h5>
//             <h5>${data[0].price}</h5>
//             <h5>${data[0].rating}</h5>
//         </div>
//     </div>
// </div>
// `
}
catch(error){
    console.error("Error fetching data")

}
}