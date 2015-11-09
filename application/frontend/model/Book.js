Ext.define('CImeetsExtJS.model.Book', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    },{
        name: 'genre',
        type: 'int'
    },{
        name: 'author',
        type: 'string'
    },{
        name: 'title',
        type: 'string'
    },{
        name: 'year',
        type: 'int'
    }],
    
    idProperty: 'id',
    
    proxy: {
        type: 'custProxy',
        api: {
        create: 'index.php/books/create', 
            read: 'index.php/books/read',
            update: 'index.php/books/update',
            destroy: 'index.php/books/destroy',
        },
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'items'
        }
    }
});
