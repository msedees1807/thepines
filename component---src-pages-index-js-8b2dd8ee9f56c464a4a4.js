(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),o=n(52),r=n.n(o),s=n(0),c=n.n(s),l=n(332),m=n.n(l),u=(n(194),n(195)),h=n(166),d=n(225),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement("div",null,c.a.createElement(h.Visible,{xs:!0},c.a.createElement(u.a,null)),c.a.createElement(d.a,null),e)},t}(c.a.Component),p=n(215),b=n.n(p),f=n(4),x=n.n(f),I=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(r()(t))),t.gotoNext=t.gotoNext.bind(r()(r()(t))),t.gotoPrevious=t.gotoPrevious.bind(r()(r()(t))),t.gotoImage=t.gotoImage.bind(r()(r()(t))),t.handleClickImage=t.handleClickImage.bind(r()(r()(t))),t.openLightbox=t.openLightbox.bind(r()(r()(t))),t}i()(t,e);var n=t.prototype;return n.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},n.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},n.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},n.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},n.gotoImage=function(e){this.setState({currentImage:e})},n.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},n.renderGallery=function(){var e=this,t=this.props.images;if(t){var n=t.map(function(t,n){return c.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:n},c.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(n,t)}},c.a.createElement("img",{src:t.thumbnail,style:{border:"red"}})),c.a.createElement("h3",null,t.caption),c.a.createElement("p",null,t.description))});return c.a.createElement("div",{className:"row"},n)}},n.render=function(){return c.a.createElement("div",null,this.renderGallery(),c.a.createElement(b.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(s.Component);I.displayName="Gallery",I.propTypes={images:x.a.array};var v=n(157),E=n(380),y=n.n(E),k=n(381),w=n.n(k),C=n(382),N=n.n(C),L=n(383),S=n.n(L),O=n(384),P=[{id:"1",src:y.a,thumbnail:y.a,caption:"Find us in Filey, North Yorkshire",description:"Open all year round."},{id:"2",src:w.a,thumbnail:w.a,caption:"Warm & Friendly",description:"Inside we offer a warm and welcoming environment."},{id:"3",src:N.a,thumbnail:N.a,caption:"Reasonably priced",description:"Our menu offers something for everyone."},{id:"4",src:S.a,thumbnail:S.a,caption:"Family owned and managed",description:"Since 2003, we have apreciated the support of our customers. Thank you."}],T=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(r()(t))),t.gotoNext=t.gotoNext.bind(r()(r()(t))),t.gotoPrevious=t.gotoPrevious.bind(r()(r()(t))),t.openLightbox=t.openLightbox.bind(r()(r()(t))),t.handleClickImage=t.handleClickImage.bind(r()(r()(t))),t}i()(t,e);var n=t.prototype;return n.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},n.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},n.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},n.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},n.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},n.render=function(){return c.a.createElement(g,null,c.a.createElement(m.a,null,c.a.createElement("title",null,"The Pines Coffee Lounge & Diner"),c.a.createElement("meta",{name:"description",content:"Site description"})),c.a.createElement("div",{id:"main"},c.a.createElement("section",{id:"one"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Traditional and honest food.")),c.a.createElement("p",null,"Malcolm and Margaret, would like to welcome you to our cafe, which has a warm and friendly atmosphere. We provide an extensive selection of delicious home cooked food, at very reasonable prices. Breakfasts (served until 11:30am) Hot and cold meals, snacks, drinks and desserts."),c.a.createElement("h2",null,"Open daily 9.30am - 3.00pm"),c.a.createElement("h4",null,"(Closed Thursdays)"),c.a.createElement(h.Visible,{sm:!0,md:!0,lg:!0,xl:!0},c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(v.Link,{to:"/menu",style:{fontSize:"2em"}},"View Menu"))))),c.a.createElement("section",{id:"two"},c.a.createElement("h2",null,"Recent Work"),c.a.createElement(I,{style:{position:O.relative,zindex:1},images:P.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})}))))},t}(c.a.Component);t.default=T},380:function(e,t,n){e.exports=n.p+"static/front-ff46745d3b73e45b38b5cc307ac3509d.jpg"},381:function(e,t,n){e.exports=n.p+"static/01-9a7ec9af7a0053d2550b93def018717b.jpg"},382:function(e,t,n){e.exports=n.p+"static/04-bfd4d353182b976187ad43b8f0d0f899.jpg"},383:function(e,t,n){e.exports=n.p+"static/margo-e3e9a956d326de1238e3ba2c28bb0a32.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-8b2dd8ee9f56c464a4a4.js.map