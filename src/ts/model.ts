// import { mouseDownBtn_1, mouseDownBtn_2 } from './mouse.js'
// import { mouseVertDownBtn_1, mouseVertDownBtn_2 } from './mouseVert.js'
// import { clickMouse } from './mouseClick.js'
import { mouseDownBtn_1, mouseDownBtn_2 } from '../js/mouse.js'
import { mouseVertDownBtn_1, mouseVertDownBtn_2 } from '../js/mouseVert.js'
import { clickMouse } from '../js/mouseClick.js'

export class Ranger {
    $el: HTMLElement
    constructor ( orientation: string ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger' )
        this.$el.setAttribute('data-type', 'ranger')
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert' )
        }
    }
    appendTo ( parent: HTMLElement ) {
        parent.appendChild ( this.$el )
    }
    setAttribute ( attr: string, number: string ) {
        this.$el.setAttribute ( attr, number )
    }
    append ( child: HTMLElement ) {
        this.$el.append ( child )
    }
    
}

export class Interval {
    $el: HTMLElement
    constructor ( orientation: string ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__interval' )
        this.$el.setAttribute('data-type', 'interval')
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__interval' )
        }
    }
    appendTo ( parent: HTMLElement ) {
        parent.appendChild ( this.$el )
    }
    setAttribute ( attr: string, number: string ) {
        this.$el.setAttribute( attr, number )
    }
    append ( child: HTMLElement ) {
        this.$el.append( child )
    }
}

export class Button {
    $el: HTMLElement
    constructor ( orientation: string ) {
        this.$el = document.createElement( 'button' )
        this.$el.classList.add( 'ranger__button' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__button' )
        }

        this.#setup()
    }
    appendTo ( parent: HTMLElement ) {
        parent.appendChild( this.$el )
    }
    setAttribute( attr: string, number: string ) {
        this.$el.setAttribute( attr, number )
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind( this )        /* Только для местных функций */
        this.$el.addEventListener( 'mousedown', this.clickHandler )
    }

    clickHandler ( event: KeyboardEvent ) {
        let elem = event.target as HTMLElement
        const { type } = elem.dataset
        let config_dataset: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
        const { orientation } = config_dataset.dataset
        if ( orientation == 'horizontal') {
                if ( type === 'btn-first' ) {
                    mouseDownBtn_1( event )
                } else if (type === 'btn-second') {
                    mouseDownBtn_2( event )
                }        
        } else if ( orientation == 'vertical' ) {
                if ( type === 'btn-first' ) {
                    mouseVertDownBtn_1( event )
                } else if (type === 'btn-second') {
                    mouseVertDownBtn_2( event )
                }             
        }
    }
}


export class Scale {
    $el: HTMLElement
    constructor ( orientation: string ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__scale' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale' )
        }
    }
    appendTo( parent: HTMLElement ) {
        parent.appendChild( this.$el )
    }
    appendChild( child: HTMLElement ) {
        this.$el.appendChild ( child )
    }
    setAttribute( attr: string, number: string ) {
        this.$el.setAttribute ( attr, number )
    }
}

export class ScaleSpan {
    $el: HTMLElement
    constructor ( orientation: string ) {
        this.$el = document.createElement ( 'span' )
        this.$el.classList.add ( 'ranger__scale-span' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale-span' )
        }
    }

    appendTo( parent: HTMLElement ) {
        parent.appendChild( this.$el )
    }
    appendChild( child: HTMLElement ) {
        this.$el.appendChild ( child )
    }
    setAttribute( attr: string, number: string ) {
        this.$el.setAttribute ( attr, number )
    }
    inner_HTML( child: string ) {
        this.$el.innerHTML = child
    }
}

export class Division {
    $el: HTMLElement
    constructor ( orientation: string ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__scale-division' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale-division' )
        }

        this.#setup()
    }
    appendTo( parent: HTMLElement ) {
        parent.appendChild( this.$el )
    }
    appendChild( child: HTMLElement ) {
        this.$el.appendChild ( child )
    }
    setAttribute( attr: string, number: string ) {
        this.$el.setAttribute ( attr, number )
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind( this )        /* Только для местных функций */
        this.$el.addEventListener( 'click', this.clickHandler )
    }
    clickHandler ( event: KeyboardEvent ) {
        clickMouse( event )
     }
}

export class DivisionSpan {
    $el: HTMLElement
    constructor ( orientation: string ) {
        this.$el = document.createElement ( 'span' )
        this.$el.classList.add ( 'ranger__scale-division-span' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale-division-span' )
        }
    }

    appendTo( parent: HTMLElement ) {
        parent.appendChild( this.$el )
    }
    appendChild( child: HTMLElement ) {
        this.$el.appendChild ( child )
    }
    setAttribute( attr: string, number: string ) {
        this.$el.setAttribute ( attr, number )
    }
}

export class Panel {
    $runners_check: HTMLElement
    constructor () {
        this.$runners_check = document.querySelector('.zdslider-panel')

        this.#setup()
    }
    #setup() {
        this.clickHandler = this.clickHandler.bind( this )        /* Только для местных функций */
        this.$runners_check.addEventListener( 'click', this.clickHandler )
    }
    clickHandler( event: KeyboardEvent ) {
        let elem = event.target as HTMLElement
        let { run } = elem.dataset 
    }
}

export class Settings {
    $el: HTMLElement
    constructor () {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'zdslider-config' )
    }

    appendTo( parent: HTMLElement ) {
        parent.appendChild( this.$el )
    }
    appendChild( child: HTMLElement ) {
        this.$el.appendChild ( child )
    }
    setAttribute( attr: string, number: string ) {
        this.$el.setAttribute ( attr, number )
    }
}
