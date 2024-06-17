import { useContext, useEffect, useState } from "react";
import { Context } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

import { Card, Table, Button } from "react-bootstrap";
import { formatCurrency } from "../helpers/currencyCLP";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const {
    productList,
    setProductList,
    totalAmount,
    setTotalAmount,
    setQuantityProducts,
    quantityProducts,
  } = useContext(Context);
  const navigate = useNavigate();

  const decrease = (producto) => {
    if (producto.cantidad > 0) {
      producto.cantidad = producto.cantidad - 1;
      setTotalAmount(totalAmount - producto.price);
      setQuantityProducts(quantityProducts - 1);
      if (producto.cantidad === 0) {
        const productos = productList.filter((item) => item.id !== producto.id);
        setProductList(productos);
      }
    }
  };

  const add = (producto) => {
    producto.cantidad = producto.cantidad + 1;
    setTotalAmount(totalAmount + producto.price);
    setQuantityProducts(quantityProducts + 1);
  };

  const backToDetails = (producto) => {
    navigate(`/pizza/${producto.id}`);
  };

  const volver = () => {
    navigate(`/`);
  };

  useEffect(() => {
    if (productList.length > 0) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [productList]);

  return (
    <div style={{ margin: "100px", display: "flex", justifyContent: "center" }}>
      {loading ? (
        <Card style={{ padding: "20px", width: "100%" }}>
          <Card.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3>No tienes productos seleccionados</h3>
              <Button
                variant="danger"
                style={{ width: "70px", marginTop: "20px" }}
                onClick={volver}
              >
                Volver              
                </Button>
            </div>
          </Card.Body>
        </Card>
      ) : productList.length > 0 ? (
        <Card style={{ padding: "20px", width: "100%" }}>
          <Card.Body>
            <h3 style={{ textAlign: "center" }}>Detalles del Pedido</h3>
            <Table hover responsive>
              <tbody>
                {productList.map((item) =>
                  item.cantidad > 0 ? (
                    <tr
                      key={item.id}
                      style={{ transition: "all 0.2s" }}
                      className="product-row"
                    >
                      <td>
                        <img
                          style={{ width: "50px" }}
                          src={item.img}
                          alt={item.name}
                        />
                      </td>
                      <td>
                        <p
                          style={{ color: "blue", cursor: "pointer" }}
                          onClick={() => backToDetails(item)}
                        >
                          {item.name.toUpperCase()}
                        </p>
                      </td>
                      <td>{formatCurrency(item.price)}</td>
                      <td>
                        <Button
                          variant="info"
                          style={{ marginRight: "6px" }}
                          onClick={() => decrease(item)}
                        >
                          -
                        </Button>
                        {item.cantidad}
                        <Button
                          variant="danger"
                          style={{ marginLeft: "6px" }}
                          onClick={() => add(item)}
                        >
                          +
                        </Button>
                      </td>
                      <td>{formatCurrency(item.price * item.cantidad)}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </Table>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button variant="danger">Ir a Pagar</Button>
              <p style={{ fontWeight: "bold" }}>
                {formatCurrency(totalAmount)}
              </p>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ padding: "20px", width: "100%" }}>
          <Card.Body>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3>El carro no tiene productos</h3>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Cart;
