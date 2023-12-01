const GetTop10 = `SELECT termo, COUNT(termo) as qnty from terms GROUP BY termo ORDER BY qnty DESC`


module.exports = GetTop10