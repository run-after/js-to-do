import projectFactory from './projectFactory';
// Need to dynamically create 'general' because now it doesn't function
const projects = [projectFactory.projectFactory('general')];

export default {projects}
