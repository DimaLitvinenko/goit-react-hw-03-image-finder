import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import style from './Searchbar.module.scss';
// import {
//    scrollToBottom,
//    scrollToTop,
// } from 'react-scroll/modules/mixins/animate-scroll';

export default class Searchbar extends Component {
   static propTypes = { searchQuery: PropTypes.string };

   state = { searchQuery: '' };

   handleSearchQueryChange = event => {
      this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
   };

   handleSubmit = event => {
      event.preventDefault();

      if (this.state.searchQuery.trim() !== '') {
         this.props.onSubmit(this.state.searchQuery);
         this.setState({ searchQuery: '' });
      }
      // else if (scrollToBottom < 100) {
      //    <header className={(style.searchHeader, style.opacity)}></header>;
      //    // header.style.opacity = '0.5';
      // } else if (scrollToTop > 100) {
      //    <header className={style.searchHeader}></header>;
      //    // header.style.opacity = '1';
      // }
      else
         toast.error(`The input field must not be empty! 🦄`, {
            position: 'top-left',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
   };

   render() {
      return (
         <header className={style.searchHeader}>
            <a className={style.pixabay__logo_link} href="https://pixabay.com/">
               <img
                  className={style.pixabay__logo_img}
                  src="https://pixabay.com/static/img/public/medium_rectangle_a.png"
                  alt="Pixabay"
               />
            </a>
            <form onSubmit={this.handleSubmit} className={style.searchForm}>
               <input
                  className={style.searchForm__input}
                  id="input"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  value={this.state.searchQuery}
                  onChange={this.handleSearchQueryChange}
                  placeholder=" "
               />
               <div className={style.cut}></div>
               <label className={style.placeholder} htmlFor="input">
                  Enter search image name
               </label>
               <button type="submit" className={style.searchForm__button}>
                  <span className={style.searchForm__button_label}>Search</span>
                  <ImSearch />
               </button>
            </form>
            <a
               className={style.pixabay__logo_link}
               // className={style.logo_link__seccond}
               href="https://pixabay.com/"
            >
               <img
                  className={style.pixabay__logo_img}
                  src="https://pixabay.com/static/img/public/medium_rectangle_a.png"
                  alt="Pixabay"
               />
            </a>
         </header>
      );
   }
}
