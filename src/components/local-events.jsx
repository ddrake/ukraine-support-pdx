import formattedDate from '../utils/formatted-date.mjs';
import DescribedLink from '../components/described-link.jsx';
import { useState, useEffect } from 'preact/hooks';
import { Fragment } from 'preact';

export default function LocalEvents() {
  const [eventArr, setEventArr] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        '/.netlify/functions/get-fauna?q=2'
      );
      const data = await response.json();
      console.log('data', data)
      setEventArr(data);
    }
    fetchData()
      .catch(console.error);
  }, []);
    
  return (
    <Fragment>
    <h2>Upcoming Events in the Portland Metro Area</h2>
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

