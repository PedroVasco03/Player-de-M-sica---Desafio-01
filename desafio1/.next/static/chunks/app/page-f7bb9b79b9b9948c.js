(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9283:function(){},3838:function(){},600:function(e,a,r){Promise.resolve().then(r.bind(r,5733))},5733:function(e,a,r){"use strict";r.d(a,{default:function(){return d}});var t=r(7437),s=r(2265),i=r(3070),n=r(4896),l=r.n(n),o=r(6648),c={src:"/_next/static/media/album.d815dafa.png",height:85,width:85,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42hWOTU6EQBQGv/e6m+FHCDrBhTEB48aNB/Yc3sMbmEx0M4mjMwZo6Ibup+wrVUWvL28HAhoIrVEiacMIMUqIwQDyqQG0YIKfIvo+YHYTipJQVgn+uU6LYDm8ixl7yPFjIOYJeb6Tx2dPVW08EwsRAd/HgS6nX6yR4b2n05eDnS2xW+zWRFpkaJ/2cNaCVQqIQggL2M6D7HIBa4O5H+EuhDiylJUgz66gFSfqthHERXBWGeqbBNeNprv7EptGZ2lxTozZtx1C91DTNkQMCasoAX7+AD3caO3A52nzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},d=e=>{let{songs:a}=e,[r,n]=(0,s.useState)("player_playing__iuDJ_"),[d,u]=(0,s.useState)(0),_=(0,s.useRef)(null),[m,p]=(0,s.useState)(0),[h,g]=(0,s.useState)(0),[f,y]=(0,s.useState)("T\xedtulo Desconhecido"),[A,x]=(0,s.useState)("Artista Desconhecido");(0,s.useEffect)(()=>{(async()=>{if(_.current)try{let e=await fetch(a[d]),r=await e.blob(),t=await (0,i.Aj)(r);y(t.common.title||"T\xedtulo Desconhecido"),p(t.format.duration||0),x(t.common.artist||"Artista Desconhecido")}catch(e){console.error("Error reading metadata:",e),y("T\xedtulo Desconhecido")}})()},[a,d]),(0,s.useEffect)(()=>{let e=_.current;return e&&(e.addEventListener("loadedmetadata",()=>{p(e.duration)}),e.addEventListener("timeupdate",()=>{g(e.currentTime)})),()=>{e&&(e.removeEventListener("loadedmetadata",()=>{}),e.removeEventListener("timeupdate",()=>{}))}},[]);let C=()=>{n(e=>"player_playing__iuDJ_"===e?"":"player_playing__iuDJ_")},N=()=>{_.current?.play()},b=()=>{_.current?.pause()};return(0,t.jsxs)("div",{className:l().card+" card",children:[(0,t.jsxs)("div",{className:l().informations,children:[(0,t.jsx)("div",{className:l().imageCard+" image-card",children:(0,t.jsx)(o.default,{className:l().Image,alt:"img-Album",src:c})}),(0,t.jsxs)("div",{className:l().titleCard+" title-card",children:[(0,t.jsx)("h3",{children:f}),(0,t.jsx)("p",{children:A})]})]}),(0,t.jsxs)("div",{className:l().controls,children:[(0,t.jsx)("i",{className:l().btn+" fas fa-backward",onClick:()=>{u(e=>0===e?a.length-1:e-1)},"aria-hidden":"true"}),(0,t.jsx)("i",{onClick:()=>{C(),N()},className:l().btn+" "+l().play+" fas fa-play "+r,"aria-hidden":"true"}),(0,t.jsx)("i",{onClick:()=>{C(),b()},className:l().btn+" "+l().pause+" fas fa-pause "+r,"aria-hidden":"true"}),(0,t.jsx)("i",{className:l().btn+" fas fa-forward",onClick:()=>{u(e=>e===a.length-1?0:e+1)},"aria-hidden":"true"})]}),(0,t.jsx)("div",{className:l().player,children:(0,t.jsx)("audio",{src:a[d],ref:_})}),(0,t.jsxs)("div",{className:l().timeContainer,children:[(0,t.jsx)("div",{className:l().progressBar,children:(0,t.jsx)("input",{type:"range",min:"0",max:m.toString(),value:h.toString(),onChange:e=>{let a=_.current;if(a){let r=parseFloat(e.target.value);a.currentTime=r,g(r)}},className:l().progress})}),(0,t.jsxs)("div",{className:l().time,children:[(0,t.jsx)("span",{children:null!==h?`${Math.floor(h/60)}:${Math.floor(h%60)}`:"Carregando..."}),(0,t.jsx)("span",{children:null!==m?`${Math.floor(m/60)}:${Math.floor(m%60)}`:"Carregando..."})]})]})]})}},4896:function(e){e.exports={card:"player_card__i2KUO",informations:"player_informations__8eDbB",titleCard:"player_titleCard__2ocQD",controls:"player_controls__Gyxzl",btn:"player_btn__cunml",play:"player_play__OsuZA",pause:"player_pause__86NQZ",playing:"player_playing__iuDJ_",timeContainer:"player_timeContainer__GsaYo",progressBar:"player_progressBar__fAXoa",progress:"player_progress__XIyl0",time:"player_time__nLyAA",imageCard:"player_imageCard__0Oq5a",Image:"player_Image__0UuL8"}}},function(e){e.O(0,[726,231,971,23,744],function(){return e(e.s=600)}),_N_E=e.O()}]);