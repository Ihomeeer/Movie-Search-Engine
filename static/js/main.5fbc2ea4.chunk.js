(this["webpackJsonpf-s-e"]=this["webpackJsonpf-s-e"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),s=n.n(i),o=(n(11),n(2)),r=(n(12),n(5)),u=n(6),l=(n(13),new(function(){function e(t,n){Object(r.a)(this,e),this._baseUrl=t,this._authorization=n}return Object(u.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getMovies",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"?s=").concat(e,"&apikey=").concat(this._authorization)).then((function(e){return t._checkStatus(e)}))}},{key:"getMoviesbyId",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"?i=").concat(e,"&apikey=").concat(this._authorization,"&plot=full")).then((function(e){return t._checkStatus(e)}))}}]),e}())("https://www.omdbapi.com/","5cd3eeda")),j=n(0);var h=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"header__title",children:"Movie Search Engine"}),Object(j.jsx)("p",{className:"header__subtitle",children:"Search for your favourite movies by title"})]})},m=n.p+"static/media/notFound.0d61eb5c.png";var b=function(e){return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("img",{src:"N/A"===e.movie.Poster?m:e.movie.Poster,alt:e.movie.Title,className:"card__photo"}),Object(j.jsx)("h2",{className:"card__name",id:"cardName",children:e.movie.Title}),Object(j.jsx)("button",{className:"card__info",onClick:function(){e.openInfo(e.movie.imdbID)},children:"Learn more"})]},e.movie.imdbID)};var d=function(e){var t=e.movies,n=e.onSubmit,c=e.openInfo,i=e.showError,s=a.a.useState(""),r=Object(o.a)(s,2),u=r[0],l=r[1];return a.a.useEffect((function(){l("")}),[n]),Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("form",{className:"main__form",onSubmit:function(e){e.preventDefault(),n(u)},children:[Object(j.jsx)("input",{name:"movieTitle",className:"main__search-input",value:u,onChange:function(e){l(e.target.value)},placeholder:"Search for movies",minLength:"2",maxLength:"30",required:!0,autoFocus:!0}),Object(j.jsx)("button",{name:"submitButton",className:"main__search-button",type:"submit",children:"Search"})]}),Object(j.jsx)("p",{className:"main__error ".concat(i?"main__error_active":""),children:"No such movies found..."}),Object(j.jsx)("ul",{className:"main__grid",children:t.map((function(e){return Object(j.jsx)(b,{movie:e,openInfo:c},e.imdbID)}))})]})};var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:"footer__author",children:["\xa9 ",(new Date).getFullYear()," MSE by Mikhail Kirichkov"]}),Object(j.jsx)("p",{className:"footer__gratitude",children:"Created with OMDb API"})]})};var _=function(e){return Object(j.jsx)("div",{onClick:e.onClose,className:"info__wrapper ".concat(e.isOpen?"info__wrapper_active":""),children:Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("div",{className:"info__text-section",children:[Object(j.jsx)("h2",{className:"info__caption",children:"Director:"}),Object(j.jsx)("p",{name:"infoDirector",className:"info__text",children:e.data.Director}),Object(j.jsx)("h2",{className:"info__caption",children:"Actors:"}),Object(j.jsx)("p",{name:"infoActors",className:"info__text",children:e.data.Actors}),Object(j.jsx)("h2",{className:"info__caption",children:"Description:"}),Object(j.jsx)("p",{name:"infoAbout",className:"info__text info__about",children:e.data.Plot})]}),Object(j.jsx)("img",{className:"info__poster",src:e.data.Poster,alt:e.data.Title})]})})};var p=function(e){var t=e.isLoading;return Object(j.jsx)("div",{className:"spinner__wrapper ".concat(t?"spinner__wrapper_active":""),children:Object(j.jsx)("div",{className:"spinner"})})};var v=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),n=t[0],c=t[1],i=a.a.useState({}),s=Object(o.a)(i,2),r=s[0],u=s[1],m=a.a.useState(!1),b=Object(o.a)(m,2),v=b[0],O=b[1],x=a.a.useState(!1),N=Object(o.a)(x,2),g=N[0],S=N[1],k=a.a.useState(!1),w=Object(o.a)(k,2),y=w[0],I=w[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(d,{onSubmit:function(e){I(!0),l.getMovies(e).then((function(e){"True"===e.Response?(c(e.Search),S(!1),I(!1)):(c([]),S(!0),I(!1))})).catch((function(e){return console.log(e)}))},movies:n,openInfo:function(e){l.getMoviesbyId(e).then((function(e){u(e),O(!0)})).catch((function(e){return console.log(e)}))},showError:g}),Object(j.jsx)(p,{isLoading:y}),Object(j.jsx)(_,{data:r,isOpen:v,onClose:function(){O(!1)}}),Object(j.jsx)(f,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.5fbc2ea4.chunk.js.map