Ext.define('BooksCI.controller.Surface', {
    extend: 'Ext.app.Controller',

    views: ['Surface'],

    refs: [{
        ref: 'surface',
        selector: 'Surface'
    }],
    
    init: function() {
        this.control({
            'Surface > toolbar > button[action=logout]': {
                click: this.logout
            }
        });
    },
    
    logout: function() {
        document.location.href = 'index.php/auth/logout';
    }
});