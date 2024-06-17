import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {formatCurrency} from '../helpers/currencyCLP';

const NavBar = () => {
  const { totalAmount, quantityProducts } = useContext(Context);
  const setActive = (isActive) => (isActive ? "active" : "inActive");
  return (
    <div>
      <div className="navbar navbar-expand-xxl navbar-dark bg-dark">
        <div className="container-fluid">
          <div style={{ display: "flex" }}>
            <NavLink className={setActive} to="/">
            🍕  Home 
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ justifyContent: "flex-end" }}
          >
            <div className="navbar-nav">
              <div style={{ display: "flex" }}>
                <NavLink className={setActive} to="/carrito">
                  {totalAmount > 0 ? <p style={{marginTop: "6px"}}>{formatCurrency(totalAmount)}</p> : ""}
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <div className="cart">
                  <NavLink to="/carrito" className={setActive}>
                    <div className="icons">
                      <FontAwesomeIcon icon={faCartShopping} size="lg" />

                      <div className="account">
                          {quantityProducts}
           
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pizzeria">
        <p style={{ marginTop: "2px" }}>!Pizzería Mamma Mía!</p>
        <p style={{ marginTop: "2px", fontSize: "20px" }}>
          !Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </div>
  );
};

export default NavBar;
