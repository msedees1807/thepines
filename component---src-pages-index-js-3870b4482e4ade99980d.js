(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t);var n=a(36),A=a.n(n),r=a(7),i=a.n(r),o=a(0),c=a.n(o),l=a(321),s=a.n(l),u=(a(145),a(178)),m=a(185),d=a(191),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement("div",null,c.a.createElement(m.Visible,{xs:!0},c.a.createElement(u.a,null)),c.a.createElement(d.a,null),e)},t}(c.a.Component),h=a(217),p=a.n(h),E=a(4),b=a.n(E),I=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(A()(t)),t.gotoNext=t.gotoNext.bind(A()(t)),t.gotoPrevious=t.gotoPrevious.bind(A()(t)),t.gotoImage=t.gotoImage.bind(A()(t)),t.handleClickImage=t.handleClickImage.bind(A()(t)),t.openLightbox=t.openLightbox.bind(A()(t)),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return c.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},c.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},c.a.createElement("img",{src:t.thumbnail,style:{border:"red"}})),c.a.createElement("h3",null,t.caption),c.a.createElement("p",null,t.description))});return c.a.createElement("div",{className:"row"},a)}},a.render=function(){return c.a.createElement("div",null,this.renderGallery(),c.a.createElement(p.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(o.Component);I.displayName="Gallery",I.propTypes={images:b.a.array};var f=a(165),Q=a(367),B=a.n(Q),x=a(368),D=a.n(x),v=a(369),N=a.n(v),R=a(370),k=a.n(R),C=a(371),G=[{id:"1",src:B.a,thumbnail:B.a,caption:"Find us in Filey, North Yorkshire",description:"Open all year round."},{id:"2",src:D.a,thumbnail:D.a,caption:"Warm & Friendly",description:"Inside we offer a warm and welcoming environment."},{id:"3",src:N.a,thumbnail:N.a,caption:"Reasonably priced",description:"Our menu offers something for everyone."},{id:"4",src:k.a,thumbnail:k.a,caption:"Family owned and managed",description:"Since 2002, we have apreciated the support of our customers. Thank you."}],w=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(A()(t)),t.gotoNext=t.gotoNext.bind(A()(t)),t.gotoPrevious=t.gotoPrevious.bind(A()(t)),t.openLightbox=t.openLightbox.bind(A()(t)),t.handleClickImage=t.handleClickImage.bind(A()(t)),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return c.a.createElement(g,null,c.a.createElement(s.a,null,c.a.createElement("title",null,"The Pines Coffee Lounge & Diner"),c.a.createElement("meta",{name:"description",content:"Site description"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Indie+Flower&display=swap",rel:"stylesheet"})),c.a.createElement("div",{id:"main"},c.a.createElement("section",{id:"one"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Traditional and honest food.")),c.a.createElement("p",null,"Malcolm and Margaret, would like to welcome you to our cafe, which has a warm and friendly atmosphere. We provide an extensive selection of delicious home cooked food, at very reasonable prices. Breakfasts (served until 11:30am) Hot and cold meals, snacks, drinks and desserts."),c.a.createElement("h2",null,"Open daily 9.30am - 3.00pm"),c.a.createElement("h4",null,"(Closed Thursdays)"),c.a.createElement(m.Visible,{sm:!0,md:!0,lg:!0,xl:!0},c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement(f.a,{to:"/menu",style:{fontSize:"2em"}},"View Menu"))))),c.a.createElement("section",{id:"two"},c.a.createElement("h2",null,"Recent Work"),c.a.createElement(I,{style:{position:C.relative,zindex:1},images:G.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})}))))},t}(c.a.Component);t.default=w},159:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},165:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(159);var l=A.a.createContext({}),s=function(e){return A.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?A.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},178:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(7),A=a.n(n),r=a(0),i=a.n(r),o=a(179),c=a.n(o),l=a(211),s=a.n(l),u=a(192),m=a.n(u),d={Fab:{float:"right",margin:"5%",bottom:"2vh",position:"fixed",right:"2vw",zIndex:1e3}},g=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(m.a,{title:"View Menu"},i.a.createElement(s.a,{href:"./menu",style:d.Fab},i.a.createElement("img",{src:c.a})))))},t}(i.a.Component)},179:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAHElEQVR4AWMgCYyC/+RhTNBAFqYrGA2j0TAaBQDsJz7XqCxwwQAAAABJRU5ErkJggg=="},186:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB99jqdBI00hpFeli//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAxAREhT/2gAIAQEAAQUCylivlC3SE87m4LGE9Fk//8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AXD/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BdP/EABsQAAEEAwAAAAAAAAAAAAAAAAEAECIxESEy/9oACAEBAAY/AniXjaGbfRK6K//EABsQAQADAQADAAAAAAAAAAAAAAEAESEQQVFx/9oACAEBAAE/Iej2b0xUngk1G6bxcHZvifs9sv/aAAwDAQACAAMAAAAQ0wrO/8QAFxEBAAMAAAAAAAAAAAAAAAAAABARcf/aAAgBAwEBPxCKaf/EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ECj/xAAdEAADAAICAwAAAAAAAAAAAAAAAREhMRBBUWFx/9oACAEBAAE/EKXh3gdrTX1FKWdvIHoUVJTJHkjKVXTGGAVlMJnb9M//2Q==",width:600,height:899,src:"/thepines/static/3aee4da952c6aef5697a7e1b272847dc/775d9/bg.jpg",srcSet:"/thepines/static/3aee4da952c6aef5697a7e1b272847dc/775d9/bg.jpg 1x,\n/thepines/static/3aee4da952c6aef5697a7e1b272847dc/2b1a3/bg.jpg 1.5x,\n/thepines/static/3aee4da952c6aef5697a7e1b272847dc/81ef8/bg.jpg 2x"}}}}}},187:function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABBAAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Qzg4NjY1ODFGRDZDRTQxMTkxODQ5ODBBNTU2OTZGNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDNFMDIxMjg2Q0ZFMTFFNEFGRkI5NDlGODlDQ0JDMTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDNFMDIxMjc2Q0ZFMTFFNEFGRkI5NDlGODlDQ0JDMTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQjg2NjU4MUZENkNFNDExOTE4NDk4MEE1NTY5NkY3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODg2NjU4MUZENkNFNDExOTE4NDk4MEE1NTY5NkY3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6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"},191:function(e,t,a){"use strict";var n=a(7),A=a.n(n),r=a(186),i=a(0),o=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("div",{className:"inner"},o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© The Pines Coffee Lounge & Diner"),o.a.createElement("li",null,"Design: ",o.a.createElement("a",{href:"http://html5up.net"},"Svvish Sites")))))},t}(o.a.Component),l=(a(187),a(165)),s=(a(215),function(e){function t(){return e.apply(this,arguments)||this}return A()(t,e),t.prototype.render=function(){return o.a.createElement(l.b,{query:"385808985",render:function(e){return o.a.createElement("header",{id:"header"},o.a.createElement("div",{className:"inner"},o.a.createElement("h1",null,o.a.createElement("strong",null,"Welcome to"),o.a.createElement("br",null),o.a.createElement("h1",{style:{fontSize:"3.5em"}},"The Pines"),o.a.createElement("h3",null,"Coffee Lounge & Diner"),o.a.createElement("h5",null,"Established 2002."))),o.a.createElement(c,null))},data:r})},t}(o.a.Component));t.a=s},367:function(e,t,a){e.exports=a.p+"static/front-ff46745d3b73e45b38b5cc307ac3509d.jpg"},368:function(e,t,a){e.exports=a.p+"static/01-9a7ec9af7a0053d2550b93def018717b.jpg"},369:function(e,t,a){e.exports=a.p+"static/04-dd516863110bdd1944b2942d2652d821.jpg"},370:function(e,t,a){e.exports=a.p+"static/margo-e3e9a956d326de1238e3ba2c28bb0a32.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-3870b4482e4ade99980d.js.map