var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Button_instances, _Button_setup, _Division_instances, _Division_setup, _Panel_instances, _Panel_setup;
// import { mouseDownBtn_1, mouseDownBtn_2 } from './mouse.js'
// import { mouseVertDownBtn_1, mouseVertDownBtn_2 } from './mouseVert.js'
// import { clickMouse } from './mouseClick.js'
import { mouseDownBtn_1, mouseDownBtn_2 } from '../js/mouse.js';
import { mouseVertDownBtn_1, mouseVertDownBtn_2 } from '../js/mouseVert.js';
import { clickMouse } from '../js/mouseClick.js';
export class Ranger {
    constructor(orientation) {
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger');
        this.$el.setAttribute('data-type', 'ranger');
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            this.$el.classList.add('ranger-vert');
        }
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
    append(child) {
        this.$el.append(child);
    }
}
export class Interval {
    constructor(orientation) {
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger__interval');
        this.$el.setAttribute('data-type', 'interval');
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            this.$el.classList.add('ranger-vert__interval');
        }
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
    append(child) {
        this.$el.append(child);
    }
}
export class Button {
    constructor(orientation) {
        _Button_instances.add(this);
        this.$el = document.createElement('button');
        this.$el.classList.add('ranger__button');
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            this.$el.classList.add('ranger-vert__button');
        }
        __classPrivateFieldGet(this, _Button_instances, "m", _Button_setup).call(this);
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
    clickHandler(event) {
        let elem = event.target;
        const { type } = elem.dataset;
        let config_dataset = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
        const { orientation } = config_dataset.dataset;
        if (orientation == 'horizontal') {
            if (type === 'btn-first') {
                mouseDownBtn_1(event);
            }
            else if (type === 'btn-second') {
                mouseDownBtn_2(event);
            }
        }
        else if (orientation == 'vertical') {
            if (type === 'btn-first') {
                mouseVertDownBtn_1(event);
            }
            else if (type === 'btn-second') {
                mouseVertDownBtn_2(event);
            }
        }
    }
}
_Button_instances = new WeakSet(), _Button_setup = function _Button_setup() {
    this.clickHandler = this.clickHandler.bind(this); /* Только для местных функций */
    this.$el.addEventListener('mousedown', this.clickHandler);
};
export class Scale {
    constructor(orientation) {
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger__scale');
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            this.$el.classList.add('ranger-vert__scale');
        }
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    appendChild(child) {
        this.$el.appendChild(child);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
}
export class ScaleSpan {
    constructor(orientation) {
        this.$el = document.createElement('span');
        this.$el.classList.add('ranger__scale-span');
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            this.$el.classList.add('ranger-vert__scale-span');
        }
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    appendChild(child) {
        this.$el.appendChild(child);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
    inner_HTML(child) {
        this.$el.innerHTML = child;
    }
}
export class Division {
    constructor(orientation) {
        _Division_instances.add(this);
        this.$el = document.createElement('div');
        this.$el.classList.add('ranger__scale-division');
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            this.$el.classList.add('ranger-vert__scale-division');
        }
        __classPrivateFieldGet(this, _Division_instances, "m", _Division_setup).call(this);
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    appendChild(child) {
        this.$el.appendChild(child);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
    clickHandler(event) {
        clickMouse(event);
    }
}
_Division_instances = new WeakSet(), _Division_setup = function _Division_setup() {
    this.clickHandler = this.clickHandler.bind(this); /* Только для местных функций */
    this.$el.addEventListener('click', this.clickHandler);
};
export class DivisionSpan {
    constructor(orientation) {
        this.$el = document.createElement('span');
        this.$el.classList.add('ranger__scale-division-span');
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            this.$el.classList.add('ranger-vert__scale-division-span');
        }
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    appendChild(child) {
        this.$el.appendChild(child);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
}
export class Panel {
    constructor() {
        _Panel_instances.add(this);
        this.$panel = document.createElement('div');
        this.$panel.classList.add('zdslider-panel-123');
        this.$run_checkbox = document.createElement('input');
        this.$run_checkbox.classList.add('zdslider-panel__check-runners-123');
        this.$run_checkbox.setAttribute('type', 'checkbox');
        this.$run_checkbox.setAttribute('data-run', 'run');
        this.$discrete_checkbox = document.createElement('input');
        this.$discrete_checkbox.classList.add('zdslider-panel__check-discrete-123');
        this.$discrete_checkbox.setAttribute('type', 'checkbox');
        this.$discrete_checkbox.setAttribute('data-discrete', 'discrete');
        this.$tip_checkbox = document.createElement('input');
        this.$tip_checkbox.classList.add('zdslider-panel__check-tip-123');
        this.$tip_checkbox.setAttribute('type', 'checkbox');
        this.$tip_checkbox.setAttribute('data-tip', 'tip');
        this.$orient_checkbox = document.createElement('input');
        this.$orient_checkbox.classList.add('zdslider-panel__check-orient-123');
        this.$orient_checkbox.setAttribute('type', 'checkbox');
        this.$orient_checkbox.setAttribute('data-orient', 'orient');
        this.$min_number = document.createElement('input');
        this.$min_number.classList.add('zdslider-panel__min-123');
        this.$min_number.setAttribute('type', 'number');
        this.$max_number = document.createElement('input');
        this.$max_number.classList.add('zdslider-panel__max-123');
        this.$max_number.setAttribute('type', 'number');
        this.$step_number = document.createElement('input');
        this.$step_number.classList.add('zdslider-panel__step-123');
        this.$step_number.setAttribute('type', 'number');
        this.$run_label = document.createElement('label');
        this.$run_label.innerHTML = 'Бегуны';
        this.$discrete_label = document.createElement('label');
        this.$discrete_label.innerHTML = 'Дискретный';
        this.$tip_label = document.createElement('label');
        this.$tip_label.innerHTML = 'Ярлык';
        this.$orient_label = document.createElement('label');
        this.$orient_label.innerHTML = 'Вертикальный';
        this.$min_lable = document.createElement('label');
        this.$min_lable.innerHTML = 'Минимум';
        this.$max_label = document.createElement('label');
        this.$max_label.innerHTML = 'Максимум';
        this.$step_label = document.createElement('label');
        this.$step_label.innerHTML = 'Шаг';
        this.$panel.appendChild(this.$run_checkbox);
        this.$panel.appendChild(this.$run_label);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$discrete_checkbox);
        this.$panel.appendChild(this.$discrete_label);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$tip_checkbox);
        this.$panel.appendChild(this.$tip_label);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$orient_checkbox);
        this.$panel.appendChild(this.$orient_label);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$min_number);
        this.$panel.appendChild(this.$min_lable);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$max_number);
        this.$panel.appendChild(this.$max_label);
        this.$panel.appendChild(document.createElement('br'));
        this.$panel.appendChild(this.$step_number);
        this.$panel.appendChild(this.$step_label);
        this.$panel.appendChild(document.createElement('br'));
        __classPrivateFieldGet(this, _Panel_instances, "m", _Panel_setup).call(this);
    }
    clickHandler(event) {
        let elem = event.target;
        let { run } = elem.dataset;
    }
    appendTo(parent) {
        parent.appendChild(this.$panel);
    }
}
_Panel_instances = new WeakSet(), _Panel_setup = function _Panel_setup() {
    this.clickHandler = this.clickHandler.bind(this); /* Только для местных функций */
    this.$panel.addEventListener('click', this.clickHandler);
};
export class Settings {
    constructor() {
        this.$el = document.createElement('div');
        this.$el.classList.add('zdslider-config');
    }
    appendTo(parent) {
        parent.appendChild(this.$el);
    }
    appendChild(child) {
        this.$el.appendChild(child);
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number);
    }
}
