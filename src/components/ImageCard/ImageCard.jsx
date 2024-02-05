export function ImageCard({ item, onClick }) {
  const handleImageClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <div>
      <a onClick={handleImageClick}>
        <img
          src={item.urls.small}
          alt={item.alt_description}
          width="300"
          height="240"
        />
      </a>
    </div>
  );
}
