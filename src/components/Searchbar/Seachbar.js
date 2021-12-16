import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import style from './Searchbar.module.scss';

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
      } else toast.error('The input field must not be empty! 🦄');
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
                  Enter your search image name
               </label>
               <button type="submit" className={style.searchForm__button}>
                  <span className={style.searchForm__button_label}>Search</span>
                  <ImSearch />
               </button>
            </form>
         </header>
      );
   }
}
