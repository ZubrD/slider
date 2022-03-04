import {
  mouseDownBtnFirst,
  mouseDownBtnSecond,
} from '../js/mouse.js'
import {
  mouseVertDownBtnFirst,
  mouseVertDownBtnSecond
} from '../js/mouseVert.js'

import {clickMouse} from '../js/mouseClick.js'

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
    // setAttribute ( attr: string, number: string ) {         /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.setAttribute ( attr, number )
    // }
    // append ( child: HTMLElement ) {                         /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.append ( child )
    // }
    
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
    // setAttribute ( attr: string, number: string ) {         /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.setAttribute( attr, number )
    // }
    // append ( child: HTMLElement ) {                         /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.append( child )
    // }
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
                    mouseDownBtnFirst( event )
                }
                if (type === 'btn-second') {
                    mouseDownBtnSecond( event )
                }        
        }
        if ( orientation == 'vertical' ) {
                if ( type === 'btn-first' ) {
                    mouseVertDownBtnFirst( event )
                }
                if (type === 'btn-second') {
                    mouseVertDownBtnSecond( event )
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
    // setAttribute( attr: string, number: string ) {              /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.setAttribute ( attr, number )
    // }
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
    // appendChild( child: HTMLElement ) {                 /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.appendChild ( child )
    // }
    // setAttribute( attr: string, number: string ) {              /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.setAttribute ( attr, number )
    // }
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
    // setAttribute( attr: string, number: string ) {              /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.setAttribute ( attr, number )
    // }

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
    // appendChild( child: HTMLElement ) {             /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.appendChild ( child )
    // }
    // setAttribute( attr: string, number: string ) {              /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.setAttribute ( attr, number )
    // }
}

export class Panel {
    $panel: HTMLElement

    $run_checkbox: HTMLElement
    $discrete_checkbox: HTMLElement
    $tip_checkbox: HTMLElement
    $orient_checkbox: HTMLElement
    $min_number: HTMLElement
    $max_number: HTMLElement
    $step_number: HTMLElement
    
    $run_label: HTMLElement
    $discrete_label: HTMLElement
    $tip_label: HTMLElement
    $orient_label: HTMLElement
    $min_lable: HTMLElement
    $max_label: HTMLElement
    $step_label: HTMLElement
    constructor () {
        this.$panel = document.createElement('div')
        this.$panel.classList.add('zdslider-panel')
       
        this.$run_checkbox = document.createElement('input')
        this.$run_checkbox.classList.add('zdslider-panel__check-runners')
        this.$run_checkbox.setAttribute('type', 'checkbox')
        this.$run_checkbox.setAttribute('data-run', 'run')

        this.$discrete_checkbox = document.createElement('input')
        this.$discrete_checkbox.classList.add('zdslider-panel__check-discrete')
        this.$discrete_checkbox.setAttribute('type', 'checkbox')
        this.$discrete_checkbox.setAttribute('data-discrete', 'discrete')

        this.$tip_checkbox = document.createElement('input')
        this.$tip_checkbox.classList.add('zdslider-panel__check-tip')
        this.$tip_checkbox.setAttribute('type', 'checkbox')
        this.$tip_checkbox.setAttribute('data-tip', 'tip')

        this.$orient_checkbox = document.createElement('input')
        this.$orient_checkbox.classList.add('zdslider-panel__check-orient')
        this.$orient_checkbox.setAttribute('type', 'checkbox')
        this.$orient_checkbox.setAttribute('data-orient', 'orient')

        this.$min_number = document.createElement('input')
        this.$min_number.classList.add('zdslider-panel__min')
        this.$min_number.setAttribute('type', 'number')

        this.$max_number = document.createElement('input')
        this.$max_number.classList.add('zdslider-panel__max')
        this.$max_number.setAttribute('type', 'number')

        this.$step_number = document.createElement('input')
        this.$step_number.classList.add('zdslider-panel__step')
        this.$step_number.setAttribute('type', 'number')
        this.$step_number.setAttribute('onkeydown', 'return false')

        this.$run_label = document.createElement('label')
        this.$run_label.innerHTML = '1 Бегун'

        this.$discrete_label = document.createElement('label')
        this.$discrete_label.innerHTML = 'Дискретный'

        this.$tip_label = document.createElement('label')
        this.$tip_label.innerHTML = 'Ярлык'

        this.$orient_label = document.createElement('label')
        this.$orient_label.innerHTML = 'Вертикальный'

        this.$min_lable = document.createElement('label')
        this.$min_lable.innerHTML = 'Минимум'

        this.$max_label = document.createElement('label')
        this.$max_label.innerHTML = 'Максимум'

        this.$step_label = document.createElement('label')
        this.$step_label.innerHTML = 'Шаг'

        this.$panel.appendChild(this.$run_checkbox)
        this.$panel.appendChild(this.$run_label)
        this.$panel.appendChild(document.createElement('br'))

        this.$panel.appendChild(this.$discrete_checkbox)
        this.$panel.appendChild(this.$discrete_label)
        this.$panel.appendChild(document.createElement('br'))

        this.$panel.appendChild(this.$tip_checkbox)
        this.$panel.appendChild(this.$tip_label)
        this.$panel.appendChild(document.createElement('br'))

        this.$panel.appendChild(this.$orient_checkbox)
        this.$panel.appendChild(this.$orient_label)
        this.$panel.appendChild(document.createElement('br'))

        this.$panel.appendChild(this.$min_number)
        this.$panel.appendChild(this.$min_lable)
        this.$panel.appendChild(document.createElement('br'))

        this.$panel.appendChild(this.$max_number)
        this.$panel.appendChild(this.$max_label)
        this.$panel.appendChild(document.createElement('br'))
        
        this.$panel.appendChild(this.$step_number)
        this.$panel.appendChild(this.$step_label)
        this.$panel.appendChild(document.createElement('br'))

        this.#setup()
    }
    #setup() {
        this.clickHandler = this.clickHandler.bind( this )        /* Только для местных функций */
        this.$panel.addEventListener( 'click', this.clickHandler )
    }
    clickHandler( event: KeyboardEvent ) {
        let elem = event.target as HTMLElement
        let { run } = elem.dataset 
    }
    appendTo( parent: HTMLElement ) {
        parent.appendChild( this.$panel )
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
    // appendChild( child: HTMLElement ) {             /* Убрал при тестировании, т.к. не пригодилось */
    //     this.$el.appendChild ( child )
    // }
    setAttribute( attr: string, number: string ) {
        this.$el.setAttribute ( attr, number )
    }
}
