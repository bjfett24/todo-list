

const reloadContent = function() {
    const body = document.querySelector('body');
    const oldContent = document.querySelector('#content');
    body.removeChild(oldContent);

    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    return content;

}

export { reloadContent };