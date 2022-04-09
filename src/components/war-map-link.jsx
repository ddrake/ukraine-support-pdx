import api from '../utils/api'
import DescribedLink from '../components/described-link.jsx';

// I think we need some kind of hook or callback here.
// The component isn't generated if we render inside .then
// The link is blank if we render outside.
export default function WarMapLink({ linkText, description }) {
  let url = ''
  api.read().then((res) => {
    url = `https://soar.earth/maps/${res.mapId}`
  })
  console.log('url:', url, 'description:', description, 'linkText',linkText)
  return (
   <DescribedLink
     url={url}
     linkText={linkText}
     description={description}
    />
  );
}

