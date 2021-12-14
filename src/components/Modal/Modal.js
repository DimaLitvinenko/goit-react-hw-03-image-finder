import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.scss';

export default class Modal extends Component {
   componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
   }

   componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
   }

   handleKeyDown = event => {
      event.code === 'Escape' && this.props.onClose();
   };

   handleOverlayClick = event => {
      event.currentTarget === event.target && this.props.onClose();
   };

   render() {
      return createPortal(
         <div className={style.overlay} onClick={this.handleOverlayClick}>
            <div className={style.modal}>{this.props.children}</div>
         </div>,
         document.querySelector('#modal-root'),
      );
   }
}
