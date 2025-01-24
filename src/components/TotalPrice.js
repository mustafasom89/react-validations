import './index.css'
/* TotalPrice component

Create a component called TotalPrice.js and define an <h2> tag that says,
“Total price: ” – This will be used to display the total price of both products.
*/
  const TotalPrice = ({ totalPrice }) => {
    return <div class="total-price"><h2>Total price: $<b>{totalPrice}</b></h2></div>
  };

  export default TotalPrice;