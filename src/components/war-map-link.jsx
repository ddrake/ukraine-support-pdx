import faunadb from 'faunadb'
import 'dotenv/config'
export default function WarMapLink({ linkText, description }) {
  let mapId = 12322;
  const client = new faunadb.Client({
      secret: process.env.FAUNA_KEY,
      domain: 'db.us.fauna.com',
    });
 const q = faunadb.query;
  client.query(
    q.Get(q.Ref(q.Collection('maps'),'1'))
  )
  .then(function (res) { mapId = res.data.mapId; console.log('res', res) })
  .catch(function (err) { console.log('Error:', err) })
  
  const url = `https://soar.earth/maps/${mapId}`
  return (
   <div class="described-link">
    <p>{description}</p>
    <a href={url} target="blank">{linkText}</a>
  </div>
  );
}
