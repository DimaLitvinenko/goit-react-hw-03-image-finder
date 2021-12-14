import style from './ImageGalleryItem.module.scss';

export default function ImageGalleryItem({ images, onOpenModal }) {
   return (
      <>
         {images.map(image => (
            <li
               key={image.id}
               onClick={() => {
                  onOpenModal(image);
               }}
               className={style.imageGalleryItem}
            >
               <img
                  className={style.imageGalleryItem__image}
                  src={image.webformatURL}
                  alt={image.tags}
               />
            </li>
         ))}
      </>
   );
}
