import apiClient from './apiClient'

export function getMenus() {
    return apiClient.get('/menu/today')
}

export function getRestaurants() {
    return apiClient.get('/restaurants')
}
