import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();
/**
 * Aqui utiliza o use (e não post, get etc..) porque assim qualquer chamada
 * desta rota, quem vai tratar vai ser p arquivo appointments.routes
 */

routes.use('/appointments', appointmentsRouter);

export default routes;
