import { Router } from 'express';
import {
  deleteProduct,
  getProduct,
  postProduct,
  putProduct,
} from '../controllers/productController';

export const productRoute = (router: Router) => {
  router.get('/api/products', getProduct);
  router.post('/api/add-product', postProduct);
  router.put('/api/update-product/:id', putProduct);
  router.delete('/api/delete-product/:id', deleteProduct);
};
