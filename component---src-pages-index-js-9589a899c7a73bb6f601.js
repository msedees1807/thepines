(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(52),l=a.n(r),o=a(0),s=a.n(o),c=a(320),u=a.n(c),m=(a(183),a(184)),d=a(163),p=a(219),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",null,s.a.createElement(d.Visible,{xs:!0},s.a.createElement(m.a,null)),s.a.createElement(p.a,null),e)},t}(s.a.Component),g=a(208),f=a.n(g),b=a(4),E=a.n(b),v=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(l()(l()(t))),t.gotoNext=t.gotoNext.bind(l()(l()(t))),t.gotoPrevious=t.gotoPrevious.bind(l()(l()(t))),t.gotoImage=t.gotoImage.bind(l()(l()(t))),t.handleClickImage=t.handleClickImage.bind(l()(l()(t))),t.openLightbox=t.openLightbox.bind(l()(l()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return s.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},s.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},s.a.createElement("img",{src:t.thumbnail,style:{border:"red"}})),s.a.createElement("h3",null,t.caption),s.a.createElement("p",null,t.description))});return s.a.createElement("div",{className:"row"},a)}},a.render=function(){return s.a.createElement("div",null,this.renderGallery(),s.a.createElement(f.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(o.Component);v.displayName="Gallery",v.propTypes={images:E.a.array};var x=function(){return s.a.createElement("div",null,s.a.createElement(d.Visible,{xs:!0},s.a.createElement("div",{style:{background:"red"}},s.a.createElement("h1",null,"Nav for phone"))),s.a.createElement(d.Visible,{sm:!0,md:!0,lg:!0,xl:!0},s.a.createElement("div",{style:{background:"#333"}},s.a.createElement("ul",null,s.a.createElement("li",null,"Home"),s.a.createElement("li",null,"Menu"),s.a.createElement("li",null,"Contact Us")))))},y=a(217),I=a(369),N=a.n(I),k=a(370),L=a.n(k),w=a(371),C=a.n(w),P=a(372),q=a.n(P),S=a(373),O=[{id:"1",src:N.a,thumbnail:N.a,caption:"Photo 1",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"2",src:L.a,thumbnail:L.a,caption:"Photo 2",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"3",src:C.a,thumbnail:C.a,caption:"Photo 3",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"4",src:q.a,thumbnail:q.a,caption:"Photo 4",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."}],j=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(l()(l()(t))),t.gotoNext=t.gotoNext.bind(l()(l()(t))),t.gotoPrevious=t.gotoPrevious.bind(l()(l()(t))),t.openLightbox=t.openLightbox.bind(l()(l()(t))),t.handleClickImage=t.handleClickImage.bind(l()(l()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return s.a.createElement(h,null,s.a.createElement(u.a,null,s.a.createElement("title",null,"The Pines Coffee Lounge & Diner"),s.a.createElement("meta",{name:"description",content:"Site description"})),s.a.createElement(x,null),s.a.createElement("div",{id:"main"},s.a.createElement("section",{id:"one"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",{style:{fontFamily:"Libre Baskerville"}},"We'd like you to join us here at The Pines...")),s.a.createElement("p",null,s.a.createElement("strong",null,"16 years"),"traditional home cooked food warm, friendly atmosphere well priced Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit debitis incidunt recusandae dolorum! Amet repudiandae molestiae, nihil, optio officia in rem rerum assumenda obcaecati atque esse, distinctio dignissimos quas quisquam deserunt placeat earum at vel doloremque magnam ea necessitatibus facilis voluptas sint. Recusandae quasi aliquam, enim animi eius facilis?"),s.a.createElement(d.Visible,{sm:!0,md:!0,lg:!0,xl:!0},s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement(y.Link,{to:"/thepines/menu"},"Menu"))))),s.a.createElement("section",{id:"two"},s.a.createElement("h2",null,"Recent Work"),s.a.createElement(v,{style:{position:S.relative,zindex:1},images:O.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})})),s.a.createElement("section",{id:"three"},s.a.createElement("h2",null,"Get In Touch"),s.a.createElement("p",null,"Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor."),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"8u 12u$(small)"},s.a.createElement("form",{method:"post",action:"#"},s.a.createElement("div",{className:"row uniform 50%"},s.a.createElement("div",{className:"6u 12u$(xsmall)"},s.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),s.a.createElement("div",{className:"6u 12u$(xsmall)"},s.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),s.a.createElement("div",{className:"12u"},s.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})))),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:"Send Message"})))),s.a.createElement("div",{className:"4u 12u$(small)"},s.a.createElement("ul",{className:"labeled-icons"},s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-home"},s.a.createElement("span",{className:"label"},"Address")),"7 Hope Street",s.a.createElement("br",null),"Filey",s.a.createElement("br",null),"North Yorkshire",s.a.createElement("br",null),"YO14 9DJ"),s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-mobile"},s.a.createElement("span",{className:"label"},"Phone")),"000-000-0000"),s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-envelope-o"},s.a.createElement("span",{className:"label"},"Email")),s.a.createElement("a",{href:"#"},"hello@untitled.tld"))))))))},t}(s.a.Component);t.default=j},217:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(156),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(218),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(49);a.d(t,"parsePath",function(){return m.a});var d=i.a.createContext({}),p=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},218:function(e,t,a){var n;e.exports=(n=a(368))&&n.default||n},368:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(68),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},369:function(e,t,a){e.exports=a.p+"static/front-ff46745d3b73e45b38b5cc307ac3509d.jpg"},370:function(e,t,a){e.exports=a.p+"static/01-9a7ec9af7a0053d2550b93def018717b.jpg"},371:function(e,t,a){e.exports=a.p+"static/04-bfd4d353182b976187ad43b8f0d0f899.jpg"},372:function(e,t,a){e.exports=a.p+"static/margo-e3e9a956d326de1238e3ba2c28bb0a32.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-9589a899c7a73bb6f601.js.map