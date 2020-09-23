let projects;
if(localStorage.getItem("projects")){
  projects = JSON.parse(localStorage.getItem("projects"))
}else {
  projects = [];
}
export default {projects}
