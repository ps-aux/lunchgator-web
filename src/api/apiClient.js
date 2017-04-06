const apiRoot = process.env.REACT_APP_API_ROOT

const doRequest = method => (path, body) => {

    const opts = {
        method,
        mode: 'cors'
    }

    return fetch(`${apiRoot}${path}`, opts)
        .then(res => res.json())
}

export default {
    get: doRequest('get'),
    put: doRequest('put'),
    post: doRequest('post'),
    patch: doRequest('patch'),
}

