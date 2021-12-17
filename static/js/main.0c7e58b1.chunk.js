(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,a,t){e.exports={app:"App_app__1UdVf",app__title:"App_app__title__vZ8iH",title__after:"App_title__after__fBZ-r",app__loader:"App_app__loader__LX2jX",modal__img:"App_modal__img__3NSoD"}},18:function(e,a,t){e.exports={imageGallery:"ImageGallery_imageGallery__1QZCE",imageGalleryItem:"ImageGallery_imageGalleryItem__13x6O",imageGalleryItem__image:"ImageGallery_imageGalleryItem__image__1LY7K"}},24:function(e,a,t){e.exports={overlay:"Modal_overlay__1da2-",modal:"Modal_modal__4rV0S",textColor:"Modal_textColor__9ouVB",animateGlow:"Modal_animateGlow__jJMAE"}},25:function(e,a,t){e.exports={button:"Button_button__3a2-p",button__icon:"Button_button__icon__DX0kh"}},48:function(e,a,t){},5:function(e,a,t){e.exports={searchHeader:"Searchbar_searchHeader__Kghye",pixabay__logo_link:"Searchbar_pixabay__logo_link__2XgFm","pixabay__logo_link-spin":"Searchbar_pixabay__logo_link-spin__1rQZJ",pixabay__logo_img:"Searchbar_pixabay__logo_img__1sIa0",searchForm:"Searchbar_searchForm__1RuRX",searchForm__input:"Searchbar_searchForm__input__3vb2F",placeholder:"Searchbar_placeholder__1QkCg",searchForm__button:"Searchbar_searchForm__button__3ij5h",searchForm__button_label:"Searchbar_searchForm__button_label__2ObV1"}},98:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(6),c=t.n(o),s=(t(48),t(27)),i=t(7),l=t(8),u=t(10),_=t(9),h=t(12),m=t.n(h),p=t(17),d=t(11),b=(t(59),t(39)),g=t.n(b),j=t(24),y=t.n(j),f=t(2),x=function(e){Object(u.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onClose()},e.handleOverlayClick=function(a){a.currentTarget===a.target&&e.props.onClose()},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:y.a.overlay,onClick:this.handleOverlayClick,children:Object(f.jsx)("div",{className:y.a.modal,children:this.props.children})}),document.querySelector("#modal-root"))}}]),t}(r.Component),O=t(40),v=t(5),S=t.n(v),w=function(e){Object(u.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={searchQuery:""},e.handleSearchQueryChange=function(a){e.setState({searchQuery:a.currentTarget.value.toLowerCase()})},e.handleSubmit=function(a){a.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):d.b.error("The input field must not be empty! \ud83e\udd84",{position:"top-left",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(f.jsxs)("header",{id:"header",className:S.a.searchHeader,children:[Object(f.jsx)("a",{className:S.a.pixabay__logo_link,href:"https://pixabay.com/",children:Object(f.jsx)("img",{className:S.a.pixabay__logo_img,src:"https://pixabay.com/static/img/public/medium_rectangle_a.png",alt:"Pixabay"})}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:S.a.searchForm,children:[Object(f.jsx)("input",{className:S.a.searchForm__input,id:"input",type:"text",autoComplete:"off",autoFocus:!0,value:this.state.searchQuery,onChange:this.handleSearchQueryChange,placeholder:" "}),Object(f.jsx)("div",{className:S.a.cut}),Object(f.jsx)("label",{className:S.a.placeholder,htmlFor:"input",children:"Enter search image name"}),Object(f.jsxs)("button",{type:"submit",className:S.a.searchForm__button,children:[Object(f.jsx)("span",{className:S.a.searchForm__button_label,children:"Search"}),Object(f.jsx)(O.a,{})]})]}),Object(f.jsx)("a",{className:S.a.pixabay__logo_link,href:"https://pixabay.com/",children:Object(f.jsx)("img",{className:S.a.pixabay__logo_img,src:"https://pixabay.com/static/img/public/medium_rectangle_a.png",alt:"Pixabay"})})]})}}]),t}(r.Component),k=t(18),C=t.n(k);function F(e){var a=e.images,t=e.onOpenModal;return Object(f.jsx)("ul",{className:C.a.imageGallery,children:a.map((function(e){return Object(f.jsx)("li",{onClick:function(){t(e)},className:C.a.imageGalleryItem,children:Object(f.jsx)("img",{"max-height":260,className:C.a.imageGalleryItem__image,src:e.webformatURL,alt:e.tags})},e.id)}))})}var N=t(25),M=t.n(N),Q=t(41);function I(e){var a=e.onLoadMore;return Object(f.jsxs)("button",{onClick:a,type:"button",className:M.a.button,children:["Load more",Object(f.jsx)("span",{className:M.a.button__icon,children:Object(f.jsx)(Q.a,{})})]})}var G=t(26),L=t.n(G),B=t(42),D=t(43),A=t.n(D),T=t(3),E=t.n(T),P="https://pixabay.com/api/",H="24448701-489f6770e4002eca234b0d01a";function U(e,a){return K.apply(this,arguments)}function K(){return(K=Object(B.a)(L.a.mark((function e(a,t){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({key:H,image_type:"photo",orientation:"horizontal",q:a,page:t,per_page:12}),e.next=3,A.a.get("".concat(P,"?").concat(r)).then((function(e){return e.data.hits}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}U.propTypes={searchQuery:E.a.string,page:E.a.number};var R=function(e){Object(u.a)(t,e);var a=Object(_.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={searchQuery:"",showModal:!1,page:1,images:[],error:null,status:"idle",currentImage:{}},e.toggleModal=function(a){e.setState((function(e){return{showModal:!e.showModal,currentImage:a}}))},e.incrementPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleSearchbarFormSubmit=function(a){e.setState({searchQuery:a})},e.scrollToBottom=function(){p.animateScroll.scrollToBottom({duration:500,delay:1e3,isDynamic:!0,ignoreCancelEvents:!1,smooth:!0})},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=this,r=this.state,n=r.searchQuery,o=r.page;a.searchQuery!==n&&(this.setState({status:"pending",page:1}),U(n).then((function(e){return t.setState({images:e,status:"resolved"})})).catch((function(e){return t.setState({error:e,status:"rejected"})})),p.animateScroll.scrollToBottom()),a.page!==o&&(this.setState({status:"pending"}),U(n,o).then((function(e){return t.setState((function(a){return{images:[].concat(Object(s.a)(a.images),Object(s.a)(e)),status:"resolved"}}))})).catch((function(e){t.setState({error:e,status:"rejected"}),d.b.error("No matches for: ".concat(n," - not found \ud83e\udd84"))})),p.animateScroll.scrollToBottom())}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.error,r=e.status,n=e.currentImage,o=e.searchQuery;return Object(f.jsxs)("div",{className:m.a.app,children:[Object(f.jsx)(w,{onSubmit:this.handleSearchbarFormSubmit}),"idle"===r&&Object(f.jsxs)("h1",{className:m.a.app__title,children:["Best photos still",Object(f.jsx)("span",{className:m.a.title__after,children:" waiting for you"})]}),"rejected"===r&&Object(f.jsx)("h1",{children:t.message}),"resolved"===r&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{images:a,onOpenModal:this.toggleModal}),0!==a.length&&Object(f.jsx)(I,{onLoadMore:this.incrementPage}),0===a.length&&Object(f.jsxs)("div",{children:["No matches for: ",o," - not found"]})]}),"pending"===r&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{images:a,onOpenModal:this.toggleModal}),Object(f.jsx)(g.a,{className:m.a.app__loader,type:"MutatingDots",color:"#00FF55",secondaryColor:"#FF9900",height:80,width:80})]}),this.state.showModal&&Object(f.jsx)(x,{onClose:this.toggleModal,children:Object(f.jsx)("img",{src:n.largeImageURL,alt:n.tags})}),Object(f.jsx)(d.a,{position:"top-left",autoClose:3e3,newestOnTop:!0,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0})]})}}]),t}(r.Component);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.0c7e58b1.chunk.js.map