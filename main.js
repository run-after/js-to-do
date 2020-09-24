!function(e){var t={};function n(d){if(t[d])return t[d].exports;var c=t[d]={i:d,l:!1,exports:{}};return e[d].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(d,c,function(t){return e[t]}.bind(null,c));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let d;n.r(t),d=localStorage.getItem("projects")?JSON.parse(localStorage.getItem("projects")):[];var c={projects:d};var a=function(e){return{title:e,tasks:[]}};var r=()=>{localStorage.clear(),localStorage.setItem("projects",JSON.stringify(c.projects))};var o=e=>{let t=a(e);c.projects.push(t),r()};var i={taskFactory:function(e,t,n,d){return{name:e,dueDate:t,priority:n,description:d}}};var s=(e,t,n,d)=>{let a=document.querySelector(".selected").getAttribute("data-index");c.projects[a].tasks.push(i.taskFactory(e,t,n,d)),r()};var l=(e,t)=>{const n=c.projects[e];document.querySelector(`[data-task-index="${t}"]`).remove(),n.tasks.splice(t,1,null),r()};var u=(e,t,n,d,a,o)=>{const i=c.projects[a].tasks[o];i.name=e,i.dueDate=t,i.priority=n,i.description=d,r()};var p=(e,t)=>{const n=c.projects[t].tasks[e],d=document.querySelector(`[data-task-index="${e}"]`),a=n.name,r=n.dueDate,o=n.priority,i=n.description;d.remove();const s=document.querySelector(".last-task"),l=document.querySelector(`[data-task-index="${Number(e)+1}"]`),p=document.querySelector(".project"),m=document.createElement("div");m.classList.add("task"),l?p.insertBefore(m,l):p.insertBefore(m,s);const b=document.createElement("form");b.setAttribute("method","get"),b.setAttribute("action",""),b.setAttribute("name","add-task");const v=document.createElement("input");v.type="text",v.name="name",v.id="name",v.value=a;const E=document.createElement("input");E.type="date",E.name="dueDate",E.id="dueDate",E.valueAsDate=new Date(r);const h=document.createElement("div");h.classList.add("priority"),h.textContent="Priority:";const g=document.createElement("br");h.appendChild(g);const C=document.createElement("input");C.type="radio","Low"==o&&(C.checked="checked"),C.name="priority",C.id="low",C.value="Low";const f=document.createElement("label");f.setAttribute("for","priority"),f.textContent="Low";const k=document.createElement("input");k.type="radio",k.name="priority",k.id="med",k.value="Medium","Medium"==o&&(k.checked="checked");const L=document.createElement("label");L.setAttribute("for","priority"),L.textContent="Med";const j=document.createElement("input");j.type="radio",j.name="priority",j.id="high",j.value="High","High"==o&&(j.checked="checked");const x=document.createElement("label");x.setAttribute("for","priority"),x.textContent="High";const S=document.createElement("input");S.type="text",S.name="description",S.id="description",S.value=i;const A=document.createElement("button");A.classList.add("submit"),A.type="button",A.textContent="submit",m.appendChild(b),b.appendChild(v),b.appendChild(E),h.appendChild(f),h.appendChild(C),h.appendChild(L),h.appendChild(k),h.appendChild(x),h.appendChild(j),b.appendChild(h),b.appendChild(S),b.appendChild(A),A.addEventListener("click",()=>{const n=document.getElementById("name").value;let d=document.getElementById("dueDate").value,c=document.querySelectorAll("input[name='priority']");for(const e of c)e.checked&&(c=e.value);const a=document.getElementById("description").value;if(n&&d&&a){u(n,d,c,a,t,e);let r=document.querySelector(".selected").getAttribute("data-index");y.projectView(r)}else alert("Must fill out all fields!")})};var m={addTaskToDOM:{addListener:()=>{const e=document.querySelector(".add-task-btn"),t=document.querySelector(".last-task");e.addEventListener("click",()=>{const e=document.querySelector(".project"),n=document.createElement("div");n.classList.add("task"),e.insertBefore(n,t);const d=document.createElement("form");d.setAttribute("method","get"),d.setAttribute("action",""),d.setAttribute("name","add-task");const c=document.createElement("input");c.type="text",c.name="name",c.id="name",c.placeholder="Name";const a=document.createElement("input");a.type="date",a.name="dueDate",a.id="dueDate",a.valueAsDate=new Date;const r=document.createElement("div");r.classList.add("priority"),r.textContent="Priority:";const o=document.createElement("br");r.appendChild(o);const i=document.createElement("input");i.type="radio",i.checked="checked",i.name="priority",i.id="low",i.value="Low";const l=document.createElement("label");l.setAttribute("for","priority"),l.textContent="Low";const u=document.createElement("input");u.type="radio",u.name="priority",u.id="med",u.value="Medium";const p=document.createElement("label");p.setAttribute("for","priority"),p.textContent="Med";const m=document.createElement("input");m.type="radio",m.name="priority",m.id="high",m.value="High";const b=document.createElement("label");b.setAttribute("for","priority"),b.textContent="High";const v=document.createElement("input");v.type="text",v.name="description",v.id="description",v.placeholder="description";const E=document.createElement("button");E.classList.add("submit"),E.type="button",E.textContent="submit",n.appendChild(d),d.appendChild(c),d.appendChild(a),r.appendChild(l),r.appendChild(i),r.appendChild(p),r.appendChild(u),r.appendChild(b),r.appendChild(m),d.appendChild(r),d.appendChild(v),d.appendChild(E),E.addEventListener("click",()=>{const e=document.getElementById("name").value;let t=document.getElementById("dueDate").value,n=document.querySelectorAll("input[name='priority']");for(const e of n)e.checked&&(n=e.value);const d=document.getElementById("description").value;if(e&&t&&d){s(e,t,n,d);let c=document.querySelector(".selected").getAttribute("data-index");y.projectView(c)}else{if(!e){const e=document.getElementById("name");e.style.background="red",console.log(e)}d||(document.getElementById("description").style.background="red")}})})},listExistingTasks:(e,t,n)=>{if(e){const d=document.querySelector(".project"),a=document.createElement("div"),r=document.createElement("div");r.textContent="✎",r.classList.add("edit");const o=document.createElement("div");o.textContent="X",o.classList.add("delete"),a.classList.add("task"),a.setAttribute("data-task-index",t),a.setAttribute("data-project-index",n);const i=document.createElement("div");i.classList.add("name"),i.textContent=e.name,a.appendChild(r),a.appendChild(o),a.appendChild(i);const s=document.createElement("div");s.classList.add("dueDate"),s.textContent="Due on: "+e.dueDate,a.appendChild(s);const u=document.createElement("div");u.classList.add("priority"),u.textContent="Priority: "+e.priority,"Low"==e.priority?a.style.background="rgb(127, 191, 63)":"Medium"==e.priority?a.style.background="rgb(255, 252, 117)":a.style.background="rgb(255, 112, 114)",a.appendChild(u);const m=document.createElement("div");m.classList.add("description"),m.textContent="Description: "+e.description,a.appendChild(m),d.appendChild(a),o.addEventListener("click",e=>{const t=e.target.parentElement.getAttribute("data-task-index");l(n,t)}),r.addEventListener("click",e=>{const t=e.target.parentElement.getAttribute("data-task-index"),n=e.target.parentElement.getAttribute("data-project-index");c.projects[n].tasks[t],p(t,n)})}}}};var y={projectView:e=>{const t=c.projects[e].tasks,n=document.querySelector(".container");n.innerHTML="";const d=document.createElement("div");d.classList.add("project"),n.appendChild(d);const a=(t,n)=>{m.addTaskToDOM.listExistingTasks(t,n,e)};t.length>0&&t.forEach(a);const r=document.createElement("div");r.classList.add("task"),r.classList.add("last-task"),d.appendChild(r);const o=document.createElement("button");o.classList.add("add-task-btn"),o.textContent="+",r.appendChild(o),m.addTaskToDOM.addListener()}};var b={addProjectToDOM:(()=>{const e=()=>{const e=document.querySelector(".last-tab"),t=document.querySelector(".project-tabs"),d=document.createElement("div");d.classList.add("tab"),n(d);const a=c.projects.length;d.setAttribute("data-index",a);const r=prompt("New project name?");d.textContent=r;const i=document.createElement("button");i.classList.add("delete"),i.textContent="X",d.appendChild(i),t.insertBefore(d,e),o(r),y.projectView(a),d.addEventListener("click",e=>{if(e.target.classList.contains("tab")){let t=e.target.dataset.index;n(e.target),y.projectView(t)}}),r||v.removeProject(a),i.addEventListener("click",e=>{const t=e.target.parentElement.getAttribute("data-index");v.removeProject(t)})},t=void document.querySelector(".add-project-btn").addEventListener("click",e),n=e=>{document.querySelector(".selected").classList.remove("selected"),e.classList.add("selected")};return{addListener:t,createProjectTab:e}})()};var v={removeProject:e=>{document.querySelector(`[data-index="${e}"]`).remove(),c.projects.splice(e,1,null);const t=document.querySelector(".selected");t&&t.classList.remove("selected");const n=document.querySelector(".project-tabs").firstElementChild;n.classList.add("selected");const d=n.getAttribute("data-index");d?y.projectView(d):b.addProjectToDOM.createProjectTab(),r()}};(()=>{if(c.projects.length>0){c.projects.forEach((e,t)=>{if(e){const n=document.querySelector(".last-tab"),d=document.querySelector(".project-tabs"),c=document.createElement("div");c.classList.add("tab"),c.setAttribute("data-index",t),c.textContent=e.title;const a=document.createElement("button");a.classList.add("delete"),a.textContent="X",c.appendChild(a),d.insertBefore(c,n),c.addEventListener("click",e=>{if(e.target.classList.contains("tab")){document.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected");const t=e.target.dataset.index;y.projectView(t)}}),a.addEventListener("click",e=>{let t=e.target.parentElement.getAttribute("data-index");v.removeProject(t)})}});const e=document.querySelector(".project-tabs").firstElementChild,t=e.getAttribute("data-index");e.classList.add("selected"),y.projectView(t)}else{const e=e=>{let t=a(e);c.projects.push(t)},t=document.querySelector(".last-tab"),n=document.querySelector(".project-tabs"),d=document.createElement("div");d.classList.add("tab"),d.classList.add("selected");const r=c.projects.length;d.setAttribute("data-index",r);const o="General";d.textContent=o;const i=document.createElement("button");i.classList.add("delete"),i.textContent="X",d.appendChild(i),n.insertBefore(d,t),e(o),y.projectView(r),d.addEventListener("click",e=>{if(e.target.classList.contains("tab")){document.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected");const t=e.target.dataset.index;y.projectView(t)}}),i.addEventListener("click",e=>{let t=e.target.parentElement.getAttribute("data-index");v.removeProject(t)})}})()}]);