(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),i=(n(12),n(13),function(){return c.a.createElement("div",{className:"grey-text footer-container"},c.a.createElement("footer",null,"Copyright @ Vikas Choubey, 2020"))}),u=n(1),l=n.n(u),s=n(2),m=n(6),d=(n(15),function(e){return c.a.createElement("div",{id:"to-do-items"},c.a.createElement("div",null,c.a.createElement("span",{className:"todo-item"},e.todo)),c.a.createElement("span",null,c.a.createElement("span",{id:"date-time",className:"grey-text date-time"},e.date),c.a.createElement("i",{className:"secondary-content material-icons red-text delete-btn",onClick:function(){e.remItem(e.id)}},"delete")))}),f=(n(16),function(e){var t="",n=function(n){n.preventDefault(),""!==t&&e.addNewItem(t),document.querySelector("input").value=""};return c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"New To-Do",onChange:function(e){t=e.target.value},autoFocus:!0,required:!0}),c.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light blue",type:"submit",onClick:n,onSubmit:n,id:"add-btn"},c.a.createElement("i",{className:"material-icons"},"add")))}),p=(n(17),function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),r=n[0],o=n[1],i="https://secret-shelf-76542.herokuapp.com/todos/",u=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,fetch(i,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({content:t,dateTime:(new Date).toLocaleString()})}).then((function(e){return e.json()}));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,fetch(i,{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({_id:t})}).then((function(e){return e.json()}));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,fetch("https://secret-shelf-76542.herokuapp.com/todos/").then((function(e){return e.json()}));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",{className:"todo-input-list"},c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h5",null,"To-Dos")),r.map((function(e,t){return c.a.createElement("li",{className:"collection-item",key:t},c.a.createElement(d,{number:t,id:e._id,todo:e.content,date:e.dateTime,remItem:p}))})),c.a.createElement("li",{className:"collection-item"},c.a.createElement(f,{addNewItem:u}))))}),h=(n(18),n(5)),E=n.n(h),b=function(){return Object(a.useEffect)((function(){E.a.AutoInit()})),c.a.createElement("div",{id:"app"},c.a.createElement("div",{id:"todo-container"},c.a.createElement(p,null)),c.a.createElement(i,null))};o.a.render(c.a.createElement(b,null),document.querySelector("#root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d1421990.chunk.js.map