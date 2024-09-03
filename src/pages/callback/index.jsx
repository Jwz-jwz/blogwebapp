const CallBack = () => {
  function orderPizza(name, callback) {
    console.log("Recieved order");
    setTimeout(function () {
      let msg = `Your ${name} is ready ! Your order is delivered `;
      callback(msg);
    }, 3000);
  }
  orderPizza("Meat Lover", printDelivery);
  function printDelivery(message) {
    console.log(message);
  }
  return <div>Callback Page</div>;
};

export default CallBack;
