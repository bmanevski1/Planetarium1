const router = require('express').Router();

const {
  createNewPhone,
  getAllPhones,
} = require('../controllers/phones');

const PREFIX = process.env.PREFIX;

router
  .route(`${PREFIX}/phones`)
  .get(getAllPhones)
  .post(createNewPhone);
  


router.use('*', (req, res, next) => {
  return res.status(404).json('Not Found.');
});

module.exports = router;