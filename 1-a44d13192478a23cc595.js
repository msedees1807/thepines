(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{162:function(e,A,t){"use strict";t.r(A),t.d(A,"graphql",function(){return f}),t.d(A,"StaticQueryContext",function(){return d}),t.d(A,"StaticQuery",function(){return E});var n=t(0),a=t.n(n),r=t(4),i=t.n(r),c=t(147),o=t.n(c);t.d(A,"Link",function(){return o.a}),t.d(A,"withPrefix",function(){return c.withPrefix}),t.d(A,"navigate",function(){return c.navigate}),t.d(A,"push",function(){return c.push}),t.d(A,"replace",function(){return c.replace}),t.d(A,"navigateTo",function(){return c.navigateTo});var u=t(166),l=t.n(u);t.d(A,"PageRenderer",function(){return l.a});var s=t(34);t.d(A,"parsePath",function(){return s.a});var d=a.a.createContext({}),E=function(e){return a.a.createElement(d.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,A,t){var n;e.exports=(n=t(182))&&n.default||n},182:function(e,A,t){"use strict";t.r(A);t(33);var n=t(0),a=t.n(n),r=t(4),i=t.n(r),c=t(55),o=t(2),u=function(e){var A=e.location,t=o.default.getResourcesForPathnameSync(A.pathname);return a.a.createElement(c.a,Object.assign({location:A,pageResources:t},t.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},A.default=u},186:function(e,A,t){},187:function(e,A,t){"use strict";t.d(A,"a",function(){return d});var n=t(7),a=t.n(n),r=t(0),i=t.n(r),c=t(293),o=t.n(c),u=t(221),l=t.n(u),s={Fab:{float:"right",margin:"5%",bottom:"2vh",position:"fixed",right:"2vw",zIndex:1e3},Text:{fontSize:"0.75rem",textAlign:"center",lineHeight:"1.5",margin:"0px"}},d=function(e){function A(){return e.apply(this,arguments)||this}return a()(A,e),A.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(l.a,{title:"View Menu"},i.a.createElement(o.a,{href:"./menu",style:s.Fab},i.a.createElement("p",{style:s.Text},"View Menu")))))},A}(i.a.Component)},220:function(e,A,t){"use strict";var n=t(7),a=t.n(n),r=t(319),i=t(0),c=t.n(i),o=function(e){function A(){return e.apply(this,arguments)||this}return a()(A,e),A.prototype.render=function(){return c.a.createElement("div",{id:"footer"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© The Pines Coffee Lounge & Diner"),c.a.createElement("li",null,"Design: Svvish Sites"))))},A}(c.a.Component),u=t(162),l=function(e){function A(){return e.apply(this,arguments)||this}return a()(A,e),A.prototype.render=function(){return c.a.createElement(u.StaticQuery,{query:"385808985",render:function(e){return c.a.createElement("header",{id:"header"},c.a.createElement("div",null,c.a.createElement("h1",{className:"titleText",style:{fontSize:"3em",color:"white",marginBottom:"0px",whiteSpace:"nowrap"}},"THE PINES"),c.a.createElement("h3",null,"Coffee Lounge & Diner"),c.a.createElement("p",{style:{color:"white"}},"Est. 2002"),c.a.createElement("p",{style:{color:"white"}},"7 Hope Street",c.a.createElement("br",null),"Filey",c.a.createElement("br",null),"North Yorkshire",c.a.createElement("br",null),"YO14 9DJ")),c.a.createElement(o,null))},data:r})},A}(c.a.Component);A.a=l},319:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYDAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB99jqdBI00hpFeli//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAxAREhT/2gAIAQEAAQUCylivlC3SE87m4LGE9Fk//8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AXD/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BdP/EABsQAAEEAwAAAAAAAAAAAAAAAAEAECIxESEy/9oACAEBAAY/AniXjaGbfRK6K//EABsQAQADAQADAAAAAAAAAAAAAAEAESEQQVFx/9oACAEBAAE/Iej2b0xUngk1G6bxcHZvifs9sv/aAAwDAQACAAMAAAAQ0wrO/8QAFxEBAAMAAAAAAAAAAAAAAAAAABARcf/aAAgBAwEBPxCKaf/EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/ECj/xAAdEAADAAICAwAAAAAAAAAAAAAAAREhMRBBUWFx/9oACAEBAAE/EKXh3gdrTX1FKWdvIHoUVJTJHkjKVXTGGAVlMJnb9M//2Q==",width:600,height:899,src:"/static/3aee4da952c6aef5697a7e1b272847dc/738fa/bg.jpg",srcSet:"/static/3aee4da952c6aef5697a7e1b272847dc/738fa/bg.jpg 1x,\n/static/3aee4da952c6aef5697a7e1b272847dc/19c08/bg.jpg 1.5x,\n/static/3aee4da952c6aef5697a7e1b272847dc/935ac/bg.jpg 2x,\n/static/3aee4da952c6aef5697a7e1b272847dc/77668/bg.jpg 3x"}}}}}}}]);
//# sourceMappingURL=1-a44d13192478a23cc595.js.map