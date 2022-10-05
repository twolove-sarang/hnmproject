import React from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { productAction } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    console.log("qqq", searchQuery);
    //미들웨어를 불러줘야함
    //getproducts함수를 거쳐서 갈 수 있게.
    //searchQuery값을 매개변수로 전달
    dispatch(productAction.getProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
