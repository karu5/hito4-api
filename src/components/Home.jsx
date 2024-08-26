import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./Card";
import { detallesPizza } from "../pizza.js";

function Home() {
  const [pizzas, setPizzas] = useState([])
  
  const getPizzas = async () => {
      const respuesta = await fetch ('http://localhost:5000/api/pizzas')
      const pizzas = await respuesta.json()
  
      setPizzas(pizzas);
  }

  useEffect(() => {
      getPizzas()
  }, []) 


    return (
      <div>
        <Header />
        <main className="d-flex justify-content-center gap-3 mt-3 mb-3">
          {detallesPizza.map((d, index) => (
            <CardPizza
              key={index}
              name={d.name}
              price={d.price}
              ingredients={d.ingredients}
              desc={d.desc}
              img={d.img}
              onAddToCart={() => agregarAlCarro(d)}
            />
          ))}
        </main>
      </div>
    );

  }
  
  
  export default Home;