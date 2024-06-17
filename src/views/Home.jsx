import { useContext, useEffect, useState } from "react";
import { Context } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../helpers/currencyCLP";

const Pizzas = () => {
  const { pizzas, getPizzas, addPizza } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const showPizzas = (id) => {
    navigate(`pizza/${id}`);
  };

  useEffect(() => {
    if (pizzas.length === 0) {
      getPizzas();
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <div className="containerHome">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        pizzas.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 style={{ textAlign: "center" }} className="card-title">
                {item.name.toUpperCase()}
              </h5>
              <hr />
              <div>
                {item.ingredients.map((ingrediente) => (
                  <p key={ingrediente}>🍕{ingrediente}</p>
                ))}
              </div>
              <hr />
              <p style={{ textAlign: "center", fontWeight: "700" }}>
                {formatCurrency(item.price)}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <a
                  href="#"
                  onClick={() => showPizzas(item.id)}
                  className="btn btn-dark"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
                  <span style={{ marginLeft: "5px" }}>Detalles</span>
                </a>
                &nbsp; &nbsp;
                <a
                  href="#"
                  className="btn btn-success"
                  onClick={() => addPizza(item)}
                >
                  Agregar
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Pizzas;
