import { Env, Hono } from 'hono'
import { RootHtml } from './layout';
import { serveStatic } from 'hono/cloudflare-workers';
import { loadRoutes } from './router';
import manifest from '__STATIC_CONTENT_MANIFEST';

const app = new Hono<{ Bindings: Env}>();

app.get('/static/*', serveStatic({ root: './', manifest }));
app.get('*', RootHtml);

loadRoutes(app);

export default app
