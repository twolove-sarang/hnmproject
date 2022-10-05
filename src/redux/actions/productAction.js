function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/twolove-sarang/hnmproject/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("ddd", data);
  };
}

// 함수가 여러개가 될 것으로 함수를 객체에 담아 리턴
export const productAction = { getProducts };
