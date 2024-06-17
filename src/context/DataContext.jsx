import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

export const ProviderProduct = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizza, setPizza] = useState({});
  const [productList, setProductList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantityProducts, setQuantityProducts] = useState(0);

  const getPizzas = async () => {
    try {
      const respuesta = await fetch("/pizzas.json");
      const json = await respuesta.json();
      const products = json.map((item) => ({ ...item, cantidad: 0 }));
      setPizzas(products);
    } catch (e) {
      console.error("Error al cargar los datos: ", e);
    }
  };

  const getPizza = (id) => {
    const details = pizzas.find((item) => item.id == id);
    setPizza(details);
  };

  const addPizza = (producto) => {
    event.preventDefault();
    const productoExiste = productList.find((item) => item.id === producto.id);
    if (productoExiste) {
      //actualiza cantidad de producto existente
      const productoActualizados = productList.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setProductList(productoActualizados);
    } else {
      setProductList([...productList, { ...producto, cantidad: 1 }]);
    }
    setQuantityProducts(quantityProducts + 1);
    setTotalAmount(totalAmount + producto.price);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <Context.Provider
      value={{
        pizzas,
        getPizzas,
        pizza,
        getPizza,
        totalAmount,
        setTotalAmount,
        productList,
        setProductList,
        quantityProducts,
        setQuantityProducts,
        addPizza,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ProviderProduct.propTypes = {
  children: PropTypes.any,
};
