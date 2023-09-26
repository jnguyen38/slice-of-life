import {OverlayToaster} from "@blueprintjs/core";

export function camelize(str) {
    return str.replace(/^\w|[A-Z]|\b\w|\s+/g, function(match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

export function title(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function showToaster(toastOptions) {
    const myToaster = OverlayToaster.create({ position: "top" });
    myToaster.show({ ...toastOptions });
}

export function formatPhone(num) {
    let cleaned = ('' + num).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}