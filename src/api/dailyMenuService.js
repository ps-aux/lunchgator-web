const apiRoot = 'http://localhost:8080/menu'

export function getMenus() {
    return fetch(`${apiRoot}/today`)
        .then(r => r.json())
}