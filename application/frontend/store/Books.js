Ext.define('BooksCI.store.Books', {
    extend: 'Ext.data.Store',
    model: 'BooksCI.model.Book',
    autoLoad: true,
    remoteSort: true,
    pageSize: 45,
    sorters: [{
		property: 'id',
		direction: 'desc'
    }]
});