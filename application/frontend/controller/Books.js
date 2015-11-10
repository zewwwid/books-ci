Ext.define('BooksCI.controller.Books', {
    extend:	'Ext.app.Controller',
    stores:	['Books', 'Genres'],
    models:	['Book','Genre'],
    views: 	['book.Grid', 'book.Window', 'book.Form', 'book.Surface'],

    refs: [{
		ref: 'bookGrid',
		selector: 'book-grid'
	}],
	
    init: function() {
		this.contextmenu = Ext.create('Ext.menu.Menu', {
            id: 'book-grid-ctx',
            items: [{
                text: 'Редактировать',
                action: 'update-book',
                iconCls: 'fam book_edit'
            }, {
                text: 'Удалить',
                action: 'delete-book',
                iconCls: 'fam delete'
            }]
        });
		
        this.control({
            'book-grid': {
                itemdblclick: this.addEditBook,
                itemcontextmenu: this.listContextMenu
            },
            'book-grid > toolbar > button[action=add]': {
            	click: this.addEditBook
            },
            'book-grid > toolbar > button[action=delete]': {
            	click: this.deleteBooks
            },
            'menu[id=book-grid-ctx] > menuitem': {
                click: this.listContextMenuItem
            },            
            'book-window button[action=save]': {
                click: this.saveBook
            }
        });
    },
    
    listContextMenu: function(view, record, item, index, event) {
        event.stopEvent();
        view.up('panel').getSelectionModel().select(index);
        this.contextmenu.showAt(event.getXY());
        return false;
    },

    listContextMenuItem: function(item) {
        var grid = this.getBookGrid(),
			record = grid.getSelectionModel().getLastSelected();
       
        if (item.action === 'update-book') {
            this.addEditBook(grid, record);
        }
        
        if (item.action === 'delete-book') {
            this.deleteBook(grid, record);
        }      
    },
    
    addEditBook: function(grid, record) {
        var window = Ext.create('BooksCI.view.book.Window'),
            form = window.down('form');
            
        if(record.data) {
            form.loadRecord(record);
        }
          
        window.show();
    },
    
    saveBook: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
            console.log(record, values);
        
        if (form.getForm().isValid()) {
            if (values.id > 0){
                record.set(values);
            } else{
                record = Ext.create('BooksCI.model.Book');
                record.set(values);
                this.getBooksStore().add(record);
            }
            
            win.close();
            this.getBooksStore().sync();
        }
    },
    
    deleteBook: function(grid, record) {
        if (record) {
            Ext.Msg.confirm('Удаление', 'Вы действительно хотите удалить выбранную книгу?', function(btn) {
                if (btn === 'yes') {
                    grid.getStore().remove(record);
                    grid.getStore().sync();
                }
            });
        }
    },
    
    deleteBooks: function() {
        var grid = this.getBookGrid();
        var store = grid.getStore();
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length > 0){
            Ext.Msg.confirm('Удаление', 'Вы действительно хотите удалить выбранные книги?', function(btn) {
                if (btn === 'yes') {
                    store.remove(rows);
                    store.sync();
                }
            });
        }
    }
});
