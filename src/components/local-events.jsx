import formattedDate from '../utils/formatted-date.mjs';
import DescribedLink from '../components/described-link.jsx';
import { useState, useEffect } from 'preact/hooks';
import { Fragment } from 'preact';
import faunadb from 'faunadb'

export default function LocalEvents() {
  const [eventArr, setEventArr] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const q = faunadb.query;
      const client = new faunadb.Client({
        secret: 'fnAEkE8hVaAASRsXZGBEOERQqCQmu0OTadETnEiz',
        domain: 'db.us.fauna.com',
      });
      await client.query(
        q.Call('future_events')
      )
        .then((ret) => {
          console.log('ret.data', ret.data)
          setEventArr(ret.data)
        })
        .catch(console.error);
    }
    fetchData()
      .catch(console.error);
  }, []);
    
  return (
    <Fragment>
    {
      eventArr.length === 0
        ? (<p>We are currently not aware of any, but let us know...</p>)
        : 
      eventArr.map((rec) => {
        const ev = rec.data
        const date = new Date(ev.eventAt)
        const fmtDate = formattedDate(ev.eventAt)
        const description = `${fmtDate} - ${ev.description} at ${ev.location}`
        return (
          <DescribedLink
            url={ev.url}
            linkText={ev.linkText}
            description={description}
          /> 
        )
      })
    }
    </Fragment>
  );
}

