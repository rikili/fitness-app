import express from 'express';

const router: express.Router = express.Router();

router.get('/getWeatherInfo', async (req: express.Request, res: express.Response) => {
  try {
    res.send({ test: 'worked' });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
