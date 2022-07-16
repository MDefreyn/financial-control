import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de aplicação',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-07-05 09:32:12'),
        },
        {
          id: 2,
          title: 'Thor Love and Thunder',
          type: 'withdraw',
          category: 'Fun',
          amount: 200,
          createdAt: new Date('2022-07-06 21:30:00'),
        },
        {
          id: 3,
          title: 'Copel',
          type: 'withdraw',
          category: 'Bills',
          amount: 550,
          createdAt: new Date('2022-07-09 11:17:56'),
        },
        {
          id: 4,
          title: 'Internet',
          type: 'withdraw',
          category: 'Bills',
          amount: 200,
          createdAt: new Date('2022-07-10 14:48:19'),
        },
        {
          id: 5,
          title: 'Sanepar',
          type: 'withdraw',
          category: 'Bills',
          amount: 100,
          createdAt: new Date('2022-07-10 14:52:47'),
        },
        {
          id: 6,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Bills',
          amount: 2100,
          createdAt: new Date('2022-07-10 14:57:21'),
        },
        {
          id: 7,
          title: 'Pizza',
          type: 'withdraw',
          category: 'Fun',
          amount: 200,
          createdAt: new Date('2022-07-12 22:41:56'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);