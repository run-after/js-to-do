!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d={projects:[]};var a=function(e){return{title:e,tasks:[]}};var c=e=>{let t=a(e);d.projects.push(t)};var r={taskFactory:function(e,t,n,d){return{name:e,dueDate:t,priority:n,description:d}}};var o=(e,t,n,a)=>{let c=document.querySelector(".selected").getAttribute("data-index");d.projects[c].tasks.push(r.taskFactory(e,t,n,a))};var i=(e,t)=>{const n=d.projects[e];document.querySelector(`[data-task-index="${t}"]`).remove(),n.tasks.splice(t,1,null)};var s=(e,t,n,a,c,r)=>{const o=d.projects[c].tasks[r];o.name=e,o.dueDate=t,o.priority=n,o.description=a};var l=(e,t)=>{const n=d.projects[t].tasks[e],a=document.querySelector(`[data-task-index="${e}"]`),c=n.name,r=n.dueDate,o=n.priority,i=n.description;a.remove();const l=document.querySelector(".last-task"),u=document.querySelector(`[data-task-index="${Number(e)+1}"]`),m=document.querySelector(".project"),y=document.createElement("div");y.classList.add("task"),u?m.insertBefore(y,u):m.insertBefore(y,l);const b=document.createElement("form");b.setAttribute("method","get"),b.setAttribute("action",""),b.setAttribute("name","add-task");const v=document.createElement("input");v.type="text",v.name="name",v.id="name",v.value=c;const h=document.createElement("input");h.type="date",h.name="dueDate",h.id="dueDate",h.valueAsDate=new Date(r);const E=document.createElement("div");E.classList.add("priority"),E.textContent="Priority:";const C=document.createElement("br");E.appendChild(C);const f=document.createElement("input");f.type="radio","Low"==o&&(f.checked="checked"),f.name="priority",f.id="low",f.value="Low";const k=document.createElement("label");k.setAttribute("for","priority"),k.textContent="Low";const g=document.createElement("input");g.type="radio",g.name="priority",g.id="med",g.value="Medium","Medium"==o&&(g.checked="checked");const L=document.createElement("label");L.setAttribute("for","priority"),L.textContent="Med";const x=document.createElement("input");x.type="radio",x.name="priority",x.id="high",x.value="High","High"==o&&(x.checked="checked");const j=document.createElement("label");j.setAttribute("for","priority"),j.textContent="High";const S=document.createElement("input");S.type="text",S.name="description",S.id="description",S.value=i;const A=document.createElement("button");A.classList.add("submit"),A.type="button",A.textContent="submit",y.appendChild(b),b.appendChild(v),b.appendChild(h),E.appendChild(k),E.appendChild(f),E.appendChild(L),E.appendChild(g),E.appendChild(j),E.appendChild(x),b.appendChild(E),b.appendChild(S),b.appendChild(A),A.addEventListener("click",()=>{const n=document.getElementById("name").value;let d=document.getElementById("dueDate").value,a=document.querySelectorAll("input[name='priority']");for(const e of a)e.checked&&(a=e.value);const c=document.getElementById("description").value;if(n&&d&&c){s(n,d,a,c,t,e);let r=document.querySelector(".selected").getAttribute("data-index");p.projectView(r)}else alert("Must fill out all fields!")})};var u={addTaskToDOM:{addListener:()=>{const e=document.querySelector(".add-task-btn"),t=document.querySelector(".last-task");e.addEventListener("click",()=>{const e=document.querySelector(".project"),n=document.createElement("div");n.classList.add("task"),e.insertBefore(n,t);const d=document.createElement("form");d.setAttribute("method","get"),d.setAttribute("action",""),d.setAttribute("name","add-task");const a=document.createElement("input");a.type="text",a.name="name",a.id="name",a.placeholder="Name";const c=document.createElement("input");c.type="date",c.name="dueDate",c.id="dueDate",c.valueAsDate=new Date;const r=document.createElement("div");r.classList.add("priority"),r.textContent="Priority:";const i=document.createElement("br");r.appendChild(i);const s=document.createElement("input");s.type="radio",s.checked="checked",s.name="priority",s.id="low",s.value="Low";const l=document.createElement("label");l.setAttribute("for","priority"),l.textContent="Low";const u=document.createElement("input");u.type="radio",u.name="priority",u.id="med",u.value="Medium";const m=document.createElement("label");m.setAttribute("for","priority"),m.textContent="Med";const y=document.createElement("input");y.type="radio",y.name="priority",y.id="high",y.value="High";const b=document.createElement("label");b.setAttribute("for","priority"),b.textContent="High";const v=document.createElement("input");v.type="text",v.name="description",v.id="description",v.placeholder="description";const h=document.createElement("button");h.classList.add("submit"),h.type="button",h.textContent="submit",n.appendChild(d),d.appendChild(a),d.appendChild(c),r.appendChild(l),r.appendChild(s),r.appendChild(m),r.appendChild(u),r.appendChild(b),r.appendChild(y),d.appendChild(r),d.appendChild(v),d.appendChild(h),h.addEventListener("click",()=>{const e=document.getElementById("name").value;let t=document.getElementById("dueDate").value,n=document.querySelectorAll("input[name='priority']");for(const e of n)e.checked&&(n=e.value);const d=document.getElementById("description").value;if(e&&t&&d){o(e,t,n,d);let a=document.querySelector(".selected").getAttribute("data-index");p.projectView(a)}else alert("Must fill out all fields!")})})},listExistingTasks:(e,t,n)=>{if(e){const a=document.querySelector(".project"),c=document.createElement("div"),r=document.createElement("div");r.textContent="✎",r.classList.add("edit");const o=document.createElement("div");o.textContent="X",o.classList.add("delete"),c.classList.add("task"),c.setAttribute("data-task-index",t),c.setAttribute("data-project-index",n);const s=document.createElement("div");s.classList.add("name"),s.textContent=e.name,c.appendChild(r),c.appendChild(o),c.appendChild(s);const u=document.createElement("div");u.classList.add("dueDate"),u.textContent="Due on: "+e.dueDate,c.appendChild(u);const p=document.createElement("div");p.classList.add("priority"),p.textContent="Priority: "+e.priority,"Low"==e.priority?c.style.background="rgb(127, 191, 63)":"Medium"==e.priority?c.style.background="rgb(255, 252, 117)":c.style.background="rgb(255, 112, 114)",c.appendChild(p);const m=document.createElement("div");m.classList.add("description"),m.textContent="Description: "+e.description,c.appendChild(m),a.appendChild(c),o.addEventListener("click",e=>{const t=e.target.parentElement.getAttribute("data-task-index");i(n,t)}),r.addEventListener("click",e=>{const t=e.target.parentElement.getAttribute("data-task-index"),n=e.target.parentElement.getAttribute("data-project-index");d.projects[n].tasks[t],l(t,n)})}}}};var p={projectView:e=>{const t=d.projects[e].tasks,n=document.querySelector(".container");n.innerHTML="";const a=document.createElement("div");a.classList.add("project"),n.appendChild(a);const c=(t,n)=>{u.addTaskToDOM.listExistingTasks(t,n,e)};t.length>0&&t.forEach(c);const r=document.createElement("div");r.classList.add("task"),r.classList.add("last-task"),a.appendChild(r);const o=document.createElement("button");o.classList.add("add-task-btn"),o.textContent="+",r.appendChild(o),u.addTaskToDOM.addListener()}};var m={addProjectToDOM:(()=>{const e=()=>{const e=document.querySelector(".last-tab"),t=document.querySelector(".project-tabs"),n=document.createElement("div");n.classList.add("tab");document.querySelector(".selected").classList.remove("selected"),n.classList.add("selected");const a=d.projects.length;n.setAttribute("data-index",a);const r=prompt("New project name?");n.textContent=r;const o=document.createElement("button");o.classList.add("delete"),o.textContent="X",n.appendChild(o),t.insertBefore(n,e),c(r),p.projectView(a),n.addEventListener("click",e=>{if(e.target.classList.contains("tab")){let t=e.target.dataset.index;document.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected"),p.projectView(t)}}),o.addEventListener("click",e=>{let t=e.target.parentElement.getAttribute("data-index");y.removeProject(t)})};return{addListener:void document.querySelector(".add-project-btn").addEventListener("click",e),createProjectTab:e}})()};var y={removeProject:e=>{document.querySelector(`[data-index="${e}"]`).remove(),d.projects.splice(e,1,null);const t=document.querySelector(".selected");t&&t.classList.remove("selected");const n=document.querySelector(".project-tabs").firstElementChild;n.classList.add("selected");const a=n.getAttribute("data-index");a?p.projectView(a):m.addProjectToDOM.createProjectTab()}};(()=>{const e=document.querySelector(".last-tab"),t=document.querySelector(".project-tabs"),n=document.createElement("div");n.classList.add("tab"),n.classList.add("selected");const c=d.projects.length;n.setAttribute("data-index",c);n.textContent="General";const r=document.createElement("button");r.classList.add("delete"),r.textContent="X",n.appendChild(r),t.insertBefore(n,e),(e=>{let t=a(e);d.projects.push(t)})("General"),p.projectView(c),n.addEventListener("click",e=>{if(e.target.classList.contains("tab")){document.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected");const t=e.target.dataset.index;p.projectView(t)}}),r.addEventListener("click",e=>{let t=e.target.parentElement.getAttribute("data-index");y.removeProject(t)})})()}]);