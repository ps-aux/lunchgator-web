const apiRoot = process.env.REACT_APP_API_ROOT

export function getMenus() {
    return fetch(`${apiRoot}/menu/today`)
        .then(r => r.json())
}