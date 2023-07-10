const { NestFactory } = require('@nestjs/core');
const { ExpressAdapter } = require('@nestjs/platform-express');
const { AppModule } = require('./dist/main');
const express = require('express');

const server = express();
const app = NestFactory.create(AppModule, new ExpressAdapter(server));

app.init();

module.exports = server;
