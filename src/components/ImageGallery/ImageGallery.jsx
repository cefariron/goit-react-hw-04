import { ImageCard } from "../ImageCard/ImageCard";
import css from '../ImageGallery/ImageGallery.module.css';

export function ImageGallery({ items, onImageClick }) {
  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} onClick={() => onImageClick(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
