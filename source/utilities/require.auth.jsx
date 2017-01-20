//TODO: Implement authentication checking
export function requireAuth(nextState, replaceState, callback) {

    const state = {
        user: null
    };

    if (state.user === null) {
        replaceState({
            pathname: '/signin',
            state: { nextPathname: nextState.location.pathname }
        });
    }
    callback();
}
