const goods = require('./data/goods')
const ratings = require('./data/ratings')
const seller = require('./data/seller')

module.exports = {
  devServer: {
    before (app) {
      app.get('/api/goods', (req, res) => {
        res.json(goods)
      })
      app.get('/api/ratings', (req, res) => {
        res.json(ratings)
      })
      app.get('/api/seller', (req, res) => {
        res.json(seller)
      })
    }
  }
}
