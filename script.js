const myLinks = myLinksJSON;
const projectData = projectsJSON;

$(function () {
    $('.header-links').append($(myLinks.links.map(link => newLink(link)).join('')));

    projectData.projects.forEach(project => {
        $('.project-cards').append(newCard(project));
    });
});

function newLink(link) {
    return `<div class="link-tooltip">
        <a href="${link.url}"><i class="${link.fa_icon} fa-lg"></i></a>
        <span class="link-tooltiptext">${link.description.replace(' ', '&nbsp;')}</span>
    </div>`;
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
                ${project.keywords.map(kw => `<p>${kw.replace(' ', '&nbsp;')</span>}</p>`).join('\n')}
            </div>
        </div>
    </article>`);
}
