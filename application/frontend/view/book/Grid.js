Ext.define('CImeetsExtJS.view.book.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.book-grid',
    id: 'bookGrid',
    store: 'Books',
    
    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'fam add',
                    itemId: 'add',
                    text: 'Добавить',
                    action: 'add'
                },
                {
                    iconCls: 'fam delete',
                    itemId: 'remove',
                    text: 'Удалить',
                    action: 'delete'
                }]
            },{
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                store: 'Books',
                displayInfo: true
            }],

            columns: [{
                header: 'ID',
                hidden:true,
                dataIndex: 'id',
                flex:0
            },{
                header: 'Жанр',
                flex:1,
                dataIndex: 'genre'
            },{
                header: 'Автор',
                flex:1,
                dataIndex: 'author'
            },{
                header: 'Название',
                flex:1,
                dataIndex: 'title'
            },{
                header: 'Год выпуска',
                flex:1,
                dataIndex: 'year'
            }]
        });
            
        this.callParent(arguments);
    }
});
