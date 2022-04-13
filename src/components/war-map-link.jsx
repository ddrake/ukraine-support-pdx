import DescribedLink from '../components/described-link.jsx';
import { useState, useEffect } from 'preact/hooks'
import faunadb from 'faunadb'

export default function WarMapLink({ linkText, description }) {
  const [mapId, setMapId] = useState('12322')

  useEffect(() => {
    const fetchData = async () => {
      const q = faunadb.query;
      const client = new faunadb.Client({
        secret: 'fnAEkE8hVaAASRsXZGBEOERQqCQmu0OTadETnEiz',
        domain: 'db.us.fauna.com',
      });
      await client.query(
        q.Call('max_map_id')
      )
        .then((ret) => {
          // console.log('ret', ret)
          setMapId(ret)
        })
        .catch(console.error);
    }
    fetchData()
      .catch(console.error);
  }, []);
    
  return (
    <DescribedLink
      url={`https://soar.earth/maps/${mapId}`}
      linkText={linkText}
      description={description}
    />
  );
}

