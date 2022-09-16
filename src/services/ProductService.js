import http from "../http-common";

const getBySystemSN = systemSN => {
  return http.get(`/products/${systemSN}`);
};

const findByOtherSN= otherSN => {
  return http.get(`/products?systemSN=${otherSN}`);
};

const ProductService = {
  getBySystemSN ,
  findByOtherSN
};

export default ProductService;
