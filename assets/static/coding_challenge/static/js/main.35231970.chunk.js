(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),i=n(1),o=n(7),s=n(8),u=n(10),d=n(9),m=n(11),p=n(2),g=n(4),k=n.n(g),f=function(e){var t=e.currentPath,n=e.path,a=e.children;return t===n?a:null};f.propTypes={currentPath:k.a.string.isRequired,path:k.a.string.isRequired,children:k.a.node.isRequired};var h=f,v="list-item-name",E=function(e){var t=e.groups,n=e.linkClickHandler;return[r.a.createElement("h2",{key:"title",className:"page-title"},"Things To Do"),r.a.createElement("hr",{key:"divider"}),r.a.createElement("section",{key:"group-list-actual",className:"group-list-actual"},t.map(function(e){var t=e.tasks,a=t.filter(function(e){return e.completedAt}).length,l="/groups/".concat(e.id);return r.a.createElement("article",{key:e.key},r.a.createElement("a",{href:l,onClick:function(e){n(l,e)},className:"list-item-grid"},r.a.createElement("div",null,r.a.createElement("img",{src:["/coding_challenge","/group.svg"].join(""),alt:"Group"})),r.a.createElement("div",null,r.a.createElement("div",{className:v},e.name),r.a.createElement("div",{className:"progress"},a," OF ",t.length," TASKS COMPLETE"))),r.a.createElement("hr",null))}))]},j=function(e){var t=e.task,n=t.id,a=t.task,l=t.completedAt,c=t.dependencyIds,i=e.allTasks,o=e.toggleTaskHandler;return r.a.createElement("article",null,function(e){var t=e.dependencyIds,n=e.allTasks;return t.find(function(e){var t=n.find(function(t){var n=t.id;return e===n});if(!t)throw Error("Task id '".concat(e,"' not found."));return!t.completedAt})}({dependencyIds:c,allTasks:i})?r.a.createElement("div",{className:"list-item-grid"},r.a.createElement("img",{src:["/coding_challenge","/locked.svg"].join(""),alt:"Locked"}),r.a.createElement("span",{className:v},"Locked Task")):r.a.createElement("div",{onClick:function(e){o(n,e)},className:"list-item-grid"},l?r.a.createElement("img",{src:["/coding_challenge","/completed.svg"].join(""),alt:"Complete"}):r.a.createElement("img",{src:["/coding_challenge","/incomplete.svg"].join(""),alt:"Incomplete"}),r.a.createElement("span",{className:[v,l?"line-through":""].join(" ")},a)),r.a.createElement("hr",null))},b=function(e){var t=e.group,n=t.name,a=t.tasks,l=e.linkClickHandler,c=e.toggleTaskHandler,i=e.allTasks;return r.a.createElement("div",null,r.a.createElement("div",{className:"page-title-row"},r.a.createElement("h2",{className:"page-title debug"},n),r.a.createElement("a",{href:"/",onClick:function(e){l("/",e)},className:"nav-all-groups debug"},"ALL GROUPS")),r.a.createElement("hr",null),a.map(function(e){return r.a.createElement(j,{task:e,allTasks:i,toggleTaskHandler:c,key:e.id})}))},y=(n(20),function(e){var t=e.state,n=e.linkClickHandler,a=e.toggleTaskHandler;if(!t)return r.a.createElement("div",null,"Loading....");var l=t.currentPath,c=t.groups,i=["/"].concat(Object(p.a)(c.map(function(e){var t=e.id;return"/groups/".concat(t)})));return r.a.createElement("main",null,r.a.createElement("div",null),r.a.createElement("div",null,i.includes(l)?[r.a.createElement(h,{currentPath:l,path:"/",key:"/"},r.a.createElement(E,{groups:t.groups,linkClickHandler:n}))].concat(Object(p.a)(c.map(function(e){var c=e.id;return r.a.createElement(h,{currentPath:l,path:"/groups/".concat(c),key:"group-".concat(c)},r.a.createElement(b,{group:e,toggleTaskHandler:a,allTasks:t.allTasks,linkClickHandler:n}))}))):r.a.createElement("div",null,"ERROR: invalid route")),r.a.createElement("div",null))}),O=n(3),T=function(e){return Object.keys(e).reduce(function(t,n){var a=n.split("_"),r=[a[0]].concat(Object(p.a)(a.slice(1).map(function(e){return[e[0].toUpperCase()].concat(Object(p.a)(e.slice(1))).join("")}))).join("");return Object(i.a)({},t,Object(O.a)({},r,e[n]))},{})},w=function(e){var t=e.reduce(function(e,t){var n=t.group,a=n.toLowerCase().replace(new RegExp(" ","g"),"-"),r=e[a],l=r&&r.tasks;return Object(i.a)({},e,Object(O.a)({},a,{id:t.taskGroupId,name:n,tasks:[].concat(Object(p.a)(l||[]),[t])}))},{});return Object.keys(t).map(function(e){return Object(i.a)({},t[e],{key:e})}).sort(function(e,t){return e.id-t.id})},C=function(e,t){var n=t.map(function(t){return e!==t.id?t:t.completedAt?Object(i.a)({},t,{completedAt:null}):Object(i.a)({},t,{completedAt:new Date})});return{allTasks:n,groups:w(n)}},H=function(){return fetch("/api/task_groups").then(function(e){return e.json().then(function(e){var t=e.data,n=t.map(function(e){return Object(i.a)({},T(e),{key:e.name.toLowerCase().replace(new RegExp(" ","g"),"-"),tasks:(n=e.tasks,a=t,n.map(function(e){return Object(i.a)({},T(e),{dependencyIds:e.dependency_ids?e.dependency_ids:[],group:a.find(function(t){return t.id===e.task_group_id}).name})}))});var n,a}),a=n.map(function(e){return e.tasks}).flat();return{groups:n,allTasks:a}})})},N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).toggleTaskHandler=function(e,t){t.preventDefault(),n.setState(function(t){return Object(i.a)({},t,C(e,t.allTasks))})},n.linkClickHandler=function(e,t){t.preventDefault(),n.setState({currentPath:e}),window.history.pushState({},"title - Firefox currently ignores this parameter, although it may use it in the future.",e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;H().then(function(t){e.setState(Object(i.a)({},t,{currentPath:window.location.pathname.replace(/\/coding_challenge\/index\.html/,"")||"/"}))})}},{key:"render",value:function(){return this.state?(console.log({state:this.state,path:window.location.pathname}),r.a.createElement(y,{state:this.state,linkClickHandler:this.linkClickHandler,toggleTaskHandler:this.toggleTaskHandler})):r.a.createElement("div",null,"Loading....")}}]),t}(a.Component);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.35231970.chunk.js.map