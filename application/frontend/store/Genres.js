Ext.define('BooksCI.store.Genres', {
    extend: 'Ext.data.Store',
    model: 'BooksCI.model.Genre',
    autoLoad: true,
    remoteSort: true,
    pageSize: 45,
    sorters: [{
		property: 'id',
		direction: 'desc'
    }]
});