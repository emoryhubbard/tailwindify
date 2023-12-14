import {select, setClicks, toggleClass, toggleClasses, hasClass, setClick} from './utils.mjs'

setDefaultStates()
toggleClass('html', '.hidden') // prevent unstyled flash of menu bar
setClicks(toggleMenuBar, '.burger-icon', '.menu-close-icon')

function setDefaultStates() {
    toggleClass('.slideout-menu', '.slideout-menu-close')
    toggleClass('.dark-overlay', '.dark-overlay-close')
}
function toggleMenuBar(e) {
        toggleClasses('.slideout-menu', '.slideout-menu-close', '.slideout-menu-open')
        toggleClasses('.dark-overlay', '.dark-overlay-close', '.dark-overlay-open')
}