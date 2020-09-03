(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(65)},25:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(25),a(7)),i=a(3),s=a(4),u=a(6),m=a(5),h=a(18),g=a.n(h),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})}}]),a}(r.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props,t=e.largeImageURL,a=e.closeModal;return r.a.createElement("div",{className:"Overlay",onClick:a},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:t,alt:""})))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})))}}]),a}(n.Component),y=function(e){var t=e.onClick;return r.a.createElement("button",{type:"button",className:"Button",onClick:t},"Load more")},b=function(e){var t=e.webformatURL,a=e.tags,n=e.modal;return r.a.createElement("li",{className:"ImageGalleryItem",onClick:n},r.a.createElement("img",{src:t,alt:a,className:"ImageGalleryItem-image"}))},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={largeImageURL:""},e.getURL=function(t){e.setState({largeImageURL:t}),e.props.onItemClick(e.state.largeImageURL)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.gallery,a=e.toggleModal;return r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(b,{key:e.id,webformatURL:e.webformatURL,tags:e.tags,modal:function(){return a(e.largeImageURL)}})})))}}]),a}(r.a.Component),w=a(19),E=a.n(w),O=function(e,t){return E.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("17197765-c51078dcc877b1a19d5004a4f","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},S=(a(64),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],loading:!1,error:null,searchQuery:"",page:1,largeImageURL:"",isModalOpen:!1},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),O(a,n).then((function(t){return e.setState((function(e){return{gallery:[].concat(Object(c.a)(e.gallery),Object(c.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,gallery:[]})},e.toggleModal=function(t){e.setState({largeImageURL:t,isModalOpen:!e.state.isModalOpen})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),t.gallery.length!==this.state.gallery.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.loading,n=e.largeImageURL,o=e.isModalOpen;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{onSubmit:this.handleSearchFormSubmit}),t.length>0&&r.a.createElement(v,{gallery:t,toggleModal:this.toggleModal}),a&&r.a.createElement(p,null),t.length>0&&!a&&r.a.createElement(y,{onClick:this.fetchImages}),o&&r.a.createElement(d,{largeImageURL:n,closeModal:this.toggleModal}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.93a75f56.chunk.js.map