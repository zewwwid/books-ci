Ext.define('BooksCI.view.Viewport', {
    extend: 'Ext.container.Viewport',

    initComponent: function() {
        Ext.apply(this, {
            layout: 'border',

            items: [{
                xtype: 'Surface',
                region: 'center'
            }]
        });

        this.callParent(arguments);
    }
});