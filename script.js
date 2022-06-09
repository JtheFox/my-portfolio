import { links as myLinks, projects as myProjects } from './assets/info.js'
const projectsH2 = 'My Projects';

$(function () {
    // add personal links to header
    $('.header-links').append($(myLinks.links.map(link => newLink(link)).join('')));
    // add projects to showcase
    myProjects.projects.forEach(project => {
        $('.project-cards').append(newCard(project));
    });
    // create cool & fun wavy text
    $('.projects > h2').append(createHoverWavy(projectsH2, 'fast'));
});

function newLink(link) {
    return `<div class="link-tooltip">
        <a href="${link.url}"${link.active ? '' : ' class="disabled"'}><i class="${link.fa_icon} fa-lg"></i></a>
        <span class="link-tooltiptext">${link.description.replace(' ', '&nbsp;')}</span>
    </div>`;
}

function createHoverWavy(text, speed) {
    return text.split('').map((char, i) => char = char === ' ' ? '&nbsp' : `<span style="--i:${speed === 'fast' ? i-(0.5*i) : i }">${char}</span>`).join('');
}

function newCard(project) {
    return $(`<article class="card">
        <header class="card-header">
            <p>${project.date}</p>
            <a href="${project.live}">
                <h2>${project.title}</h2>
            </a>
        </header>
        <div class="card-body">
            <a href="${project.live}">
                <img src="${project.image}" alt="Project Preview">
            </a>
        </div>
        <div class="card-footer">
            <a class="card-link" href="${project.repo}">
                <i class="fa-brands fa-github"></i>&nbsp;
                <p>Repository</p>
            </a>
            <div class="card-keywords">
                ${project.keywords.map(kw => `<p>${kw.replace(' ', '&nbsp;')}</p>`).join('\n')}
            </div>
        </div>
    </article>`);
}
