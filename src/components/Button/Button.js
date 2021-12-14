import style from './Button.module.scss';

export default function LoadMoreButton({ onLoadMore }) {
   return (
      <button onClick={onLoadMore} type="button" className={style.button}>
         Load more
      </button>
   );
}
