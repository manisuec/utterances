!function(){"use strict";function e(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}for(var t=document.currentScript,n={},r=0;r<t.attributes.length;r++){var a=t.attributes.item(r);n[a.name]=a.value}n.url=location.href,n.origin=location.origin,n.pathname=location.pathname.substr(1).replace(/\.\w+$/,""),n.title=document.title;var i=document.querySelector("meta[name='description']");n.description=i?i.content:"";var o=t.src.replace(/\/client(\.debug)?\.js(?:$|\?)/,"/utterances$1.html"),c=document.createElement("iframe");c.style.border="0",c.style.width="100%",c.style.maxWidth="100%",c.setAttribute("allowtransparency","true"),c.src=o+"?"+e(n),t.insertAdjacentElement("afterend",c),t.parentElement.removeChild(t),addEventListener("message",function(e){var t=e.data;t&&"resize"===t.type&&t.height&&(c.style.minHeight=t.height+"px")})}();