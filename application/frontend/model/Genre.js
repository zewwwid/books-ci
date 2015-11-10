Ext.define('BooksCI.model.Genre', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    },{
        name: 'name',
        type: 'string'
    }],
    
    idProperty: 'id',
    
    proxy: {
        type: 'custProxy',
        api: {
            read: 'index.php/genres/read'
        },
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});
