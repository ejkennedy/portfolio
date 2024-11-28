
import { Hono, Env } from 'hono';

import * as index from './routes';

export const loadRoutes = <T extends Env>(app: Hono<T>) => {
	app.get('/', index.onRequestGet);
};