import express, { Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (res: Response): Response => res.send('hello world'));

app.listen(3000);
