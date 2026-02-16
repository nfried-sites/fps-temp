/* Populates Productions dropdown in topbar from productions-data.js */
document.addEventListener('DOMContentLoaded', function() {
    if (typeof PRODUCTIONS === 'undefined') return;
    var dropdown = document.getElementById('productions-dropdown');
    var mobileDropdown = document.getElementById('mobileProductionsDropdown');
    PRODUCTIONS.forEach(function(p) {
        var a1 = document.createElement('a');
        a1.href = 'productions.html#' + p.id;
        a1.textContent = p.title;
        if (dropdown) dropdown.appendChild(a1);
        var a2 = document.createElement('a');
        a2.href = 'productions.html#' + p.id;
        a2.textContent = p.title;
        if (mobileDropdown) mobileDropdown.appendChild(a2);
    });
});
