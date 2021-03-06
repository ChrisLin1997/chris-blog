const jwt = require('jsonwebtoken')
const { secret } = require('../../common/config')
const { resJson } = require('../../common/middleware')

const run = async (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]
  let userId = jwt.verify(token, secret).id

  const sql = 'select balance from user_balance where user_id=?'
  const value = [userId]
  const json = await resJson(sql, value, (res, rows) => {
    res.result = rows[0].balance
  })

  res.status(200).json(json)
}

module.exports = run