import { Router } from 'express';

export const billRoute = (router: Router) => {
  router.get('/api/bills');
  router.post('/api/add-bill');
  router.put('/api/update-bill');
  router.delete('/api/delete-bill');
};
