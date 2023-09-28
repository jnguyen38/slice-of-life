import {OverlayToaster} from "@blueprintjs/core";

// Camel Case formatter
export function camelize(str) {
    return str.replace(/^\w|[A-Z]|\b\w|\s+/g, function(match, index) {
        if (+match === 0) return "";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

// Title Case formatter
export function title(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Show a toaster (maybe deprecated with React 18)
export function showToaster(toastOptions) {
    const myToaster = OverlayToaster.create({ position: "top" });
    myToaster.show({ ...toastOptions });
}

// Format 10 digit phone numbers
export function formatPhone(num) {
    let cleaned = ('' + num).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

// Get the current Date in SQL Date type format
export function SQLnow() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

// Initialize an intersection observer with custom default settings (see Animations.css)
export function defaultObserver() {
    return new IntersectionObserver(entries => {
        console.log(entries)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
                entry.target.addEventListener("animationend", () => {
                    entry.target.classList.remove("transparent");
                })
            }
        })
    }, {threshold: 0})
}