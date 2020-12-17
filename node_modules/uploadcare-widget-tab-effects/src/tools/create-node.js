const createNode = (html) => new DOMParser().parseFromString(html, 'text/html').body.firstChild

export default createNode
