const faunadb = require('faunadb')
const q = faunadb.query;

exports.handler = async () => {
  // get a db client
  const client = new faunadb.Client({
    secret: process.env.FAUNA_KEY,
    domain: 'db.us.fauna.com',
  });
  return await client.query(
    q.Get(q.Ref(q.Collection('maps'),'1'))
  )
    .then((ret) => {
      return {
        statusCode: 200,
        body: JSON.stringify(ret.data),
      }
    })
    .catch((err) => {
      console.log('Error:', err)
      return {
        statusCode: 400,
        body: JSON.stringify(err)
      }
    })
};

