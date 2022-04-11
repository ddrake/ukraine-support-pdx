import DescribedLink from '../components/described-link.jsx';
import { useState, useEffect } from 'preact/hooks'

export default function WarMapLink({ linkText, description }) {
  const [mapId, setMapId] = useState('12322')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        '/.netlify/functions/get-fauna?q=1'
      );
      const data = await response.json();
      console.log('data', data)
      setMapId(data.mapId);
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
