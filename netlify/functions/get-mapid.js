const faunadb = require('faunadb')
const q = faunadb.query;

exports.handler = async (event) => {
  // get a db client
  const qry = event.queryStringParameters;
  const client = new faunadb.Client({
    secret: process.env.FAUNA_KEY,
    domain: 'db.us.fauna.com',
  });
  return await client.query(
    qry.q === '1'
    ? q.Get(q.Ref(q.Collection('maps'),'1'))
    : q.Call('future_events')
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

