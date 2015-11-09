Ext.define('CImeetsExtJS.view.book.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.book-window',
    height: 220,
    width: Ext.getBody().getViewSize().width / 2,
    modal: true,
    title : 'Книга',
    iconCls: 'fam book',

    initComponent: function() {
        Ext.apply(this, {
            layout: 'border',
            items: [{
                xtype: 'book-form',
                flex: 1,
                region: 'center'
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: ['->', {
                    iconCls: 'fam cancel',
                    text: 'Отмена',
                    scope: this,
                    handler: this.close
                },{
                    iconCls: 'fam disk',
                    text: 'Сохранить',
                    action: 'save'
                }]
            }]
        });

        this.callParent(arguments);
    }
});