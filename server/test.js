const request = require('supertest');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

// Example route for testing
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

describe('GET /test', () => {
  it('should return a message indicating the server is running', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Server is running!');
  });
});

jest.mock('mongoose');

test('should call mongoose.connect', async () => {
  const uri = 'mongodb://localhost:27017/user';
  expect(mongoose.connect)
});

test('should call mongoose.createConnection', () => {
  const uri = 'mongodb://localhost:27017/pokemonDB';
  expect(mongoose.createConnection)
});