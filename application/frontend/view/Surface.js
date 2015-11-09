Ext.define('CImeetsExtJS.view.Surface', {
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
                    text: 'Logged in as ' + GlobalVars.userdata.user
                },'->', {
                    xtype: 'button',
                    text: 'Logout',
                    iconCls: 'fam door',
                    action: 'logout'
                }]
            }]
        });

        this.callParent(arguments);
    }
});