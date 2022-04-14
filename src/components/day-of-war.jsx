export default function DayOfWar({ url, linkText, description }) {
  // The invasion begain on 2/24/2022 so monthindex=1
  const dayofwar = Math.floor((new Date() - new Date(2022, 1, (24-1)))/24/3600/1000);
  return (
    <h2>Day {dayofwar} of the War on Ukraine</h2>
  );
}
