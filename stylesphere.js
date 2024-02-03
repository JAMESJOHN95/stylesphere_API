const login = (event) => {
    event.preventDefault();
    if (userinput.value === "" && passinput.value === "") {
        alert("Please fill the form")
    }
    else {
        window.location.href = "home.html"
    }

}

fetch("https://fakestoreapi.com/products")
.then((response) =>{
    response.json().then((data) => {
        const result = document.getElementById("result");
        let cardcount = 0;
        console.log(data);
        data.forEach(item => {
            
            result.innerHTML += `          
            <div class="col-lg-3">
          <div class="card" style="width: 18rem;">
              <img src="${item.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h6> ${item.title}</h6>
                  <h6>Price : ${item.price}</h6>
                  <h6> Rating :${item.rating.rate}</h6>
              </div>
          </div>
      </div>
      `
      cardcount++
        })
 
})
}).catch((reason) => {
    console.log(reason);
});












