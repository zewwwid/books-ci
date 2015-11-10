Ext.define('BooksCI.view.book.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.book-grid',
    id: 'bookGrid',
    store: 'Books',
    selModel : Ext.create('Ext.selection.CheckboxModel'),
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
                header: 'genreID',
                hidden:true,
                dataIndex: 'genre',
                flex:0
            },{
                header: 'Жанр',
                flex:0,
                dataIndex: 'name'
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
                flex:0,
                dataIndex: 'year'
            }]
        });
            
        this.callParent(arguments);
    }
});
