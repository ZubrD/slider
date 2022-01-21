export function showElement(event) {
    var _a, _b;
    let elem = event.target;
    let sub_elem = (_b = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.ranger');
    let datas = sub_elem.dataset.type;
    console.log(datas);
}
