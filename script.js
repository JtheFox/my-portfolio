import { links as myLinks, projects as myProjects } from './assets/info.js'
import { faLink, textWave, projectCard } from './modules/components.js'

$(() => {
    // add personal links to header
    $('.header-links').append($(myLinks.map(link => faLink(link)).join('')));
    // add projects to showcase
    myProjects.reverse().forEach(project => $('.project-cards').append(projectCard(project)));
    // create cool & fun wavy text
    $('.projects > h2').append(textWave('My Projects', 'fast'));
});
