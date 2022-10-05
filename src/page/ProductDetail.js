import React, { useEffect, useState } from "react";
import { Container, Row, Col,Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/twolove-sarang/hnmproject/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product_img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div className="concious">{product?.choice == true ? "concious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              size choice
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="product_detail_button">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
