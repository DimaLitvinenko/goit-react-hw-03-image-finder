import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearchengin } from 'react-icons/fa';
// import { ImSearch } from 'react-icons/im';
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
            <form onSubmit={this.handleSubmit} className={style.searchForm}>
               <button type="submit" className={style.searchForm__button}>
                  <span className={style.searchForm__button_label}>Search</span>
                  <FaSearchengin />
               </button>

               <input
                  className={style.searchForm__input}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  value={this.state.searchQuery}
                  onChange={this.handleSearchQueryChange}
               />
            </form>
         </header>
      );
   }
}
