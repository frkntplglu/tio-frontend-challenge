
const products = document.querySelector('#products');
const productList = document.querySelectorAll('.product');

// Fetch all data from the api
const getProducts = async (pageNumber) => {
    const response = await fetch(`https://reqres.in/api/products?page=${pageNumber}`)
    const {data} = await response.json()
    products.innerHTML += data.map(item => {
        return `
        <div class="product" style="background-color:${item.color}">
            <div class="product-name">${item.name}</div>
            <div class="product-hex">${item.color}</div>
        </div>`
    }).join('')
}

// Click event for dynamically added element
const handleClick = () => {
    document.addEventListener('click',function(e){
        if(e.target && e.target.classList.contains('product')){
            e.target.classList.toggle('show')
        }else if(e.target && e.target.parentElement.classList.contains('product')){
            e.target.parentElement.classList.toggle('show')
        }
     });
}

// Invoke getting data functions
getProducts(1);
getProducts(2);


// Invoke handler
handleClick();





