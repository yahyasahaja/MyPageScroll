export default (state = null, actions) => {
    if (actions.type == 'select_library') {
        return actions.goto;
    }

    return null;
}