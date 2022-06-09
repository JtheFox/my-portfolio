/**
 * Creates a FontAwesome icon with a link and description tooltip
 * @param {Object} link - Custom link object
 * @returns String representation of elements for anchored FA icon with tooltips
 */
const faLink = (link) => {
    return `<div class="link-tooltip">
        <a href="${link.url}"${link.active ? '' : ' class="disabled"'}><i class="${link.fa_icon} fa-lg"></i></a>
        <span class="link-tooltiptext">${link.description.replace(' ', '&nbsp;')}</span>
    </div>`;
}

/**
 * Translates text into individual character span elements for text wave animation
 * @param {string} text - Display text
 * @param {string} [speed] - 'fast' to increase animation speed 
 * @returns String representation of span elements for each character
 */
const textWave = (text, speed) => {
    return text.split('').map((char, i) => char = char === ' ' ? '&nbsp' : `<span style="--i:${speed === 'fast' ? i-(0.5*i) : i }">${char}</span>`).join('');
}

/**
 * Creates a card display of a project
 * @param {Object} project - Custom project object
 * @returns String representation of card elements
 */
const projectCard = (project) => {
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


export { faLink, textWave, projectCard };