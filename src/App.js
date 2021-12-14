import './App.scss';
import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Seachbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
// import PixabayApiService from './services/pixabay-api';

const BASE_URL = 'https://pixabay.com/api/?';
const API_KEY = '24448701-489f6770e4002eca234b0d01a';

export default class App extends Component {
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
      if (prevState.searchQuery !== this.state.searchQuery) {
         this.setState({ status: 'pending', page: 1, images: [] });
         this.fetchImages();
         scroll.scrollToBottom({ smooth: true });
      }

      if (prevState.page !== this.state.page) {
         this.setState({ status: 'pending' });
         this.fetchImages();
         scroll.scrollToBottom({ smooth: true });
      }
   }

   fetchImages = async () => {
      const searchParams = new URLSearchParams({
         image_type: 'photo',
         orientation: 'horizontal',
         q: this.state.searchQuery,
         page: this.state.page,
         per_page: 12,
         key: API_KEY,
      });

      try {
         const response = await fetch(`${BASE_URL}?${searchParams}`);
         if (response.ok) {
            const articles = await response.json();
            this.setState(prevState => ({
               images: [...prevState.images, ...articles.hits],
               status: 'resolved',
            }));
         } else {
            return Promise.reject(new Error(this.props.searchQuery));
         }
      } catch (error) {
         this.setState({ error, status: 'rejected' });
         toast.error(`The input field must not be empty! 🦄`, {
            position: 'top-left',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
      }
   };

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
      scroll.scrollToBottom();
   };

   render() {
      const { images, error, status, currentImage } = this.state;

      return (
         <div className="App">
            <Searchbar onSubmit={this.handleSearchbarFormSubmit} />

            {status === 'rejected' && <h1>{error.message}</h1>}

            {status === 'resolved' && (
               <>
                  <ImageGallery
                     images={images}
                     onOpenModal={this.toggleModal}
                  />
                  <Button onLoadMore={this.incrementPage} />
               </>
            )}

            {status === 'pending' && (
               <>
                  <ImageGallery
                     images={images}
                     onOpenModal={this.toggleModal}
                  />
                  <Loader
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
               autoClose={4000}
               newestOnTop={true}
               closeOnClick
               pauseOnFocusLoss
               pauseOnHover
            />
         </div>
      );
   }
}
// =================================
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
