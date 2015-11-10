Ext.define('BooksCI.view.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Surface',
	
    initComponent: function() {
        Ext.apply(this, {
            id: 'surface',
            layout: 'border',
            border: false,
            bodyPadding: 5,
           
            items: [{
                id: 'title',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: '<a href="/">Каталог книг</a>'
            },{
                xtype: 'book-surface',
                region: 'center'
            }],
            
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    xtype: 'tbtext',
                    text: 'Ползователь ' + GlobalVars.userdata.user
                },'->', {
                    xtype: 'button',
                    text: 'Выход',
                    iconCls: 'fam door',
                    action: 'logout'
                }]
            }]
        });

        this.callParent(arguments);
    }
});