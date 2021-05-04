export function hot(module) {
    if (module && module.hot) {
        module.hot.accept();
    }
}