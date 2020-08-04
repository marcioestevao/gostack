import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();
/**
 * Aqui utiliza o use (e não post, get etc..) porque assim qualquer chamada
 * desta rota, quem vai tratar vai ser p arquivo appointments.routes
 */

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
