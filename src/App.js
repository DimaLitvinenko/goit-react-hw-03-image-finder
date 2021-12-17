import style from './App.module.scss';
import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Seachbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import PixabayServiceApi from './services/pixabayApi';

export default class App extends Component {
   static propTypes = {};

   state = {
      searchQuery: '',
      showModal: false,
      page: 1,
      images: [],
      error: null,
      status: 'idle',
      currentImage: {},
   };

   componentDidUpdate(prevProps, prevState) {
      const { searchQuery, page } = this.state;

      if (prevState.searchQuery !== searchQuery) {
         this.setState({ status: 'pending', page: 1 });

         PixabayServiceApi(searchQuery)
            .then(articles =>
               this.setState({
                  images: articles,
                  status: 'resolved',
               }),
            )
            .catch(error => this.setState({ error, status: 'rejected' }));
         scroll.scrollToBottom();
      }

      if (prevState.page !== page) {
         this.setState({ status: 'pending' });

         PixabayServiceApi(searchQuery, page)
            .then(articles =>
               this.setState(prevState => ({
                  images: [...prevState.images, ...articles],
                  status: 'resolved',
               })),
            )
            .catch(error => {
               this.setState({ error, status: 'rejected' });
               toast.error(`No matches for: ${searchQuery} - not found 🦄`);
            });
         scroll.scrollToBottom();
      }
   }

   toggleModal = event => {
      this.setState(({ showModal }) => ({
         showModal: !showModal,
         currentImage: event,
      }));
   };

   incrementPage = () => {
      this.setState(prevState => ({
         page: prevState.page + 1,
      }));
   };

   handleSearchbarFormSubmit = searchQuery => {
      this.setState({ searchQuery });
   };

   scrollToBottom = () => {
      scroll.scrollToBottom({
         duration: 500,
         delay: 1000,
         isDynamic: true,
         ignoreCancelEvents: false,
         smooth: true,
      });
   };

   render() {
      const { images, error, status, currentImage, searchQuery } = this.state;

      return (
         <div className={style.app}>
            <Searchbar onSubmit={this.handleSearchbarFormSubmit} />
            {status === 'idle' && (
               <h1 className={style.app__title}>
                  Best photos still
                  <span className={style.title__after}> waiting for you</span>
               </h1>
            )}

            {status === 'rejected' && <h1>{error.message}</h1>}

            {status === 'resolved' && (
               <>
                  <ImageGallery
                     images={images}
                     onOpenModal={this.toggleModal}
                  />
                  {images.length !== 0 && (
                     <Button onLoadMore={this.incrementPage} />
                  )}
                  {images.length === 0 && (
                     <div>No matches for: {searchQuery} - not found</div>
                  )}
               </>
            )}

            {status === 'pending' && (
               <>
                  <ImageGallery
                     images={images}
                     onOpenModal={this.toggleModal}
                  />
                  <Loader
                     className={style.app__loader}
                     type="MutatingDots"
                     color="#00FF55"
                     secondaryColor="#FF9900"
                     height={80}
                     width={80}
                  />
               </>
            )}

            {this.state.showModal && (
               <Modal onClose={this.toggleModal}>
                  <img
                     src={currentImage.largeImageURL}
                     alt={currentImage.tags}
                  />
               </Modal>
            )}
            <ToastContainer
               position="top-left"
               autoClose={3000}
               newestOnTop={true}
               closeOnClick
               pauseOnFocusLoss
               pauseOnHover
            />
         </div>
      );
   }
}
