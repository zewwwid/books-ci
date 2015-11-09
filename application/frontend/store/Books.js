Ext.define('CImeetsExtJS.store.Books', {
    extend: 'Ext.data.Store',
    model: 'CImeetsExtJS.model.Book',
    autoLoad: true,
    remoteSort: true,
    pageSize: 45,
    sorters: [{
		property: 'id',
		direction: 'desc'
    }]
});