import "dotenv/config";
import express from 'express';
import cors from 'cors';

import fs from "node:fs";
import path from "node:path";

import { clerkMiddleware } from '@clerk/express';
import { clerkWebhookHandler } from './webhooks/clerk';
import { getEnv } from './lib/env';

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason);
});

// const env = getEnv();
let env: ReturnType<typeof getEnv>;
try {
  env = getEnv();
} catch (err) {
  console.error('❌ Failed to load env:', err);
  process.exit(1);
}

const app = express();
app.get('/health', (_req, res) => res.sendStatus(200));

const rawJson = express.raw({ type: 'application/json', limit: '10mb' });

app.post('/webhooks/clerk', rawJson, (req, res) => {
  void  clerkWebhookHandler(req, res);
});

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

const publicDir = path.join(__dirname, '..', 'public');
console.log('publicDir:', publicDir);
console.log('publicDir exists:', fs.existsSync(publicDir));
console.log('index.html exists:', fs.existsSync(path.join(publicDir, 'index.html')));
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get('/*splat', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/webhooks')) {
      next();
      return;
    }
    res.sendFile(path.join(publicDir, 'index.html'));
  });
}

const server = app.listen(env.PORT, "0.0.0.0", () => {
  console.log('listening on port:', env.PORT);
});

server.keepAliveTimeout = 120000;
server.headersTimeout = 120000;