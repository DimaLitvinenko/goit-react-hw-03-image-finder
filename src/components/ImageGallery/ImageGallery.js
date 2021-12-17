import style from './ImageGallery.module.scss';

export default function ImageGallery({ images, onOpenModal }) {
   return (
      <ul className={style.imageGallery}>
         {images.map(image => (
            <li
               key={image.id}
               onClick={() => {
                  onOpenModal(image);
               }}
               className={style.imageGalleryItem}
            >
               <img
                  max-height={260}
                  className={style.imageGalleryItem__image}
                  src={image.webformatURL}
                  alt={image.tags}
               />
            </li>
         ))}
      </ul>
   );
}
