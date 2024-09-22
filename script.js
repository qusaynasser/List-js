const products = [
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "Laptop", category: "Electronics", price: 999 },
  { name: "T-Shirt", category: "Clothing", price: 19 },
  { name: "Jeans", category: "Clothing", price: 49 },
  { name: "Novel", category: "Books", price: 15 },
  { name: "Cookbook", category: "Books", price: 20 }
];


function displayProduct(productDisplay) 
{
  const allProducts =document.querySelector('.displayProduct');
  allProducts.innerHTML = '';
  productDisplay.map((product) =>{
    const productName = document.createElement('div');
    productName.className = 'p1';

    productName.innerHTML=`
      <h5>${product.name}</h5>
      <p>${product.category}</p>
      <p>${product.price}</p>
    `
    allProducts.appendChild(productName);
  })
  
}
displayProduct(products);

function filterProducts(category)
{
  if(category==='all')
  {
    displayProduct(products);
  }
  else
  {
    const filteredProducts = products.filter(product => product.category === category);
    console.log(filteredProducts);
    displayProduct(filteredProducts);
  }
}