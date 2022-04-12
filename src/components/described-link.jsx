export default function DescribedLink({ url, linkText, description }) {
  return (
    <div class="described-link">
      <p>{description}</p>
      <a href={url} target="_blank">{linkText}</a>
    </div>
  );
}
