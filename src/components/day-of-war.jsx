export default function DayOfWar({ url, linkText, description }) {
  const dayofwar = Math.floor((new Date() - new Date(2022, 1, 20))/24/3600/1000);
  return (
    <h2>Day {dayofwar} of the War on Ukraine</h2>
  );
}
