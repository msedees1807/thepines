(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),o=n(52),r=n.n(o),s=n(0),c=n.n(s),l=n(321),m=n.n(l),u=(n(186),n(187)),g=n(181),h=n(220),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement("div",null,c.a.createElement(g.Visible,{xs:!0},c.a.createElement(u.a,null)),c.a.createElement(h.a,null),e)},t}(c.a.Component),d=n(211),f=n.n(d),b=n(4),x=n.n(b),I=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(r()(t))),t.gotoNext=t.gotoNext.bind(r()(r()(t))),t.gotoPrevious=t.gotoPrevious.bind(r()(r()(t))),t.gotoImage=t.gotoImage.bind(r()(r()(t))),t.handleClickImage=t.handleClickImage.bind(r()(r()(t))),t.openLightbox=t.openLightbox.bind(r()(r()(t))),t}i()(t,e);var n=t.prototype;return n.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},n.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},n.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},n.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},n.gotoImage=function(e){this.setState({currentImage:e})},n.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},n.renderGallery=function(){var e=this,t=this.props.images;if(t){var n=t.map(function(t,n){return c.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:n},c.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(n,t)}},c.a.createElement("img",{src:t.thumbnail,style:{border:"red"}})),c.a.createElement("h3",null,t.caption),c.a.createElement("p",null,t.description))});return c.a.createElement("div",{className:"row"},n)}},n.render=function(){return c.a.createElement("div",null,this.renderGallery(),c.a.createElement(f.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(s.Component);I.displayName="Gallery",I.propTypes={images:x.a.array};var v=n(162),y=n(369),E=n.n(y),k=n(370),w=n.n(k),C=n(371),L=n.n(C),N=n(372),S=n.n(N),O=n(373),P=n.n(O),j=n(374),F=[{id:"1",src:E.a,thumbnail:E.a,caption:"Find us in Filey, North Yorkshire",description:"Open all year round."},{id:"2",src:w.a,thumbnail:w.a,caption:"Warm & Friendly",description:"Inside we offer a warm and welcoming environment."},{id:"3",src:L.a,thumbnail:L.a,caption:"Reasonably priced",description:"Our menu offers something for everyone."},{id:"4",src:S.a,thumbnail:S.a,caption:"Family owned and managed",description:"Since 2002, we have apreciated the support of our customers. Thank you."}],T=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(r()(t))),t.gotoNext=t.gotoNext.bind(r()(r()(t))),t.gotoPrevious=t.gotoPrevious.bind(r()(r()(t))),t.openLightbox=t.openLightbox.bind(r()(r()(t))),t.handleClickImage=t.handleClickImage.bind(r()(r()(t))),t}i()(t,e);var n=t.prototype;return n.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},n.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},n.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},n.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},n.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},n.render=function(){return c.a.createElement(p,null,c.a.createElement(m.a,null,c.a.createElement("title",null,"The Pines Coffee Lounge & Diner"),c.a.createElement("meta",{name:"description",content:"Site description"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lora:700|Merriweather&display=swap",rel:"stylesheet"})),c.a.createElement("div",{id:"main"},c.a.createElement("section",{id:"one"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Margaret and Malcolm welcome you ...")),c.a.createElement("p",null,"We provide an extensive selection of delicious home cooked food, at very reasonable prices. Breakfasts (served until 11:30am), hot and cold meals, snacks, drinks and desserts."),c.a.createElement("h2",{style:{textAlign:"center"}},"Open daily 9.30am - 3.00pm (Closed Thursdays)"),c.a.createElement(g.Visible,{sm:!0,md:!0,lg:!0,xl:!0},c.a.createElement("div",{style:{width:"50%",textAlign:"center",margin:"0 auto"}},c.a.createElement(v.Link,{to:"/menu",style:{fontSize:"1.5em"}},"View Menu")))),c.a.createElement("section",{id:"two"},c.a.createElement(I,{style:{position:j.relative,zindex:1},images:F.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})})),c.a.createElement("section",{id:"three"},c.a.createElement("div",{style:{margin:"auto",display:"block"}},c.a.createElement("img",{src:P.a,alt:"Five star hygene rating.",style:{boxShadow:"#909090a3 10px 10px 14px"}})))))},t}(c.a.Component);t.default=T},369:function(e,t,n){e.exports=n.p+"static/01-12c00db3053a9981d35b7ed4e80c5bb3.jpg"},370:function(e,t,n){e.exports=n.p+"static/02-5c3dd8167a94669ea2bfd4510f51fe58.jpg"},371:function(e,t,n){e.exports=n.p+"static/03-c2a6211828dc2223f031f527df445dcc.jpg"},372:function(e,t,n){e.exports=n.p+"static/04-5b7e778058667688ced6ef7b38c6a487.jpg"},373:function(e,t,n){e.exports=n.p+"static/5-star-97fdaa367804ebf1e3417b42f69913e1.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-02c855bb924c6da5b1bf.js.map