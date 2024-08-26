import Card from '../components/Card'
import Cart from './Cart';
import CartContainer from '../components/CartContainer'
import { useEffect, useState } from 'react';


function Pizzas() {
    const [pizza, setPizza] = useState({});
  
    useEffect(() => {
      getPizza();
    }, []);
  
    const getPizza = async () => {
      const res = await fetch("http://localhost:5000/api/pizzas/p001");
      const pizzaData = await res.json();
  
      setPizza(pizzaData);
    };
  
    return (
      <>
        <div className="mt-5 d-flex justify-content-center">
          {Object.keys(pizza).length > 0 && (
            <CardPizza
              desc={pizza.desc}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              isHome={false}
            />
          )}
        </div>
      </>
    );
  }
  
  export default Pizzas;