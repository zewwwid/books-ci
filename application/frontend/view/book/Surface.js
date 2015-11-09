Ext.define('CImeetsExtJS.view.book.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.book-surface',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'book-surface',
            layout: 'border',
            border: false,
            bodyPadding: 0,
            
            items: [{
                xtype: 'book-grid',
                region: 'center'
            }]
        });

        this.callParent(arguments);
    }
});