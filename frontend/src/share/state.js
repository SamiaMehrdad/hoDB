// define global state handler object

const ST = {
    menuHide: true, // all menus should check this flag to hide or show.
    activeElem: null, // indicate what element is clicked now. This should be reset to null by target function.
    command: '', // command to be executed. Target function should reset it to '' after execution.
    
}

export default ST;