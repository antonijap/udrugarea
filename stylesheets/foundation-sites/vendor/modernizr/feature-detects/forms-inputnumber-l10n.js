Modernizr.addTest("localizedNumber",function(){var e,t,n,r,d=document,i=document.createElement("div");t=d.body||function(){var t=d.documentElement;return e=!0,t.insertBefore(d.createElement("body"),t.firstElementChild||t.firstChild)}(),i.innerHTML='<input type="number" value="1.0" step="0.1"/>',n=i.childNodes[0],t.appendChild(i),n.focus();try{d.execCommand("InsertText",!1,"1,1")}catch(e){}return r="number"===n.type&&1.1===n.valueAsNumber&&n.checkValidity(),t.removeChild(i),e&&t.parentNode.removeChild(t),r});