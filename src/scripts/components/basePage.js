export function makeTitle(titleText) {
    document.title = titleText;
}
export function makeHeader() {
    const header = document.createElement('header');
    document.body.appendChild(header);
    return header;
}
export function makeNav() { 
    const nav = document.createElement('nav');
    document.body.appendChild(nav);
    return nav;
}
export function makeAside() {
    const aside = document.createElement('aside');
    document.body.appendChild(aside);
    return aside;
}
export function makeMain() {
    const main = document.createElement('main');
    document.body.appendChild(main);
    return main;
}
export function makeFooter() {
    const footer = document.createElement('footer');
    document.body.appendChild(footer);
    return footer;
}
export function makeArticle(){ 
    const mainElement = document.querySelector('main');
    const article = document.createElement('article');
    mainElement.appendChild(article);
    return article;
}
export function makeSection() {
    const mainElement = document.querySelector('main');
    const section = document.createElement('section');
    mainElement.appendChild(section);
    return section;
}