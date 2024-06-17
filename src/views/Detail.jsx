import { useContext, useEffect } from "react";
import { Context } from "../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrency } from "../helpers/currencyCLP";

const Pizza = () => {
  const { pizza, getPizza, addPizza } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate(`/`);
  };

  useEffect(() => {
    getPizza(id);
  }, []);
  return (
    <div className="detail">
      {pizza === undefined ? (
        <div className="errorCss">
          <h3>Ocurrio un error: vuelva a seleccionar la pizza</h3>
        </div>
      ) : (
        <div className="detail">
          <div className="card detailPizzaCard">
            <img
              src={pizza.img}
              style={{}}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <h4 className="card-title uppercase" style={{ textAlign: "left" }}>
                  {pizza.name}
                </h4>
                <h4 style={{ fontWeight: "800", textAlign: "center" }}>
                   {formatCurrency(pizza.price)}
                </h4>
              </div>
              <hr />
              <p style={{textAlign: 'justify'}}>{pizza.desc}</p>
              <hr />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="#" onClick={backToHome} className="btn btn-dark">
                  Volver
                </a>
                &nbsp; &nbsp;
                <a
                  href="#"
                  onClick={() => addPizza(pizza)}
                  className="btn btn-danger"
                >
                  Agregar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pizza;
