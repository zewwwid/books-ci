Ext.Loader.setConfig({enabled: true});

Ext.require('Ext.data.StoreManager', function() {
    var messages = {
        'destroy': {
            headline: 'Удалено',
            text: 'Выбранная книга удалена.'
        },
        'update': {
            headline: 'Изменено',
            text: 'Выбранная книга изменена.'
        },
        'create': {
            headline: 'Создано',
            text: 'Добавленна новая книга.'
        }
    };

    Ext.data.StoreManager.on('add', function(index, store) {
        store.on('write', function(proxy, operation) {
            if (operation.action == 'update' || operation.action == 'destroy' || operation.action == 'create') {
                var message = messages[operation.action],
                    panel = Ext.get('msg-div') || Ext.core.DomHelper.insertFirst(document.body, {
                        id: 'msg-div'
                    }, true),
                    toast = Ext.core.DomHelper.append(panel, '<div class="msg"><h3>' + message.headline.toUpperCase() + '</h3><p>' + (operation.resultSet.message || message.text) + '</p></div>', true);

                toast.hide();
                toast.slideIn('t').ghost('t', {
                    delay: 2000,
                    remove: true
                });
            }
        });
    });
});

Ext.define('BooksCI.data.proxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.custProxy',
    
    listeners: {
        exception: function (proxy, request) {
            if (request.responseText != undefined) {
                responseObj = Ext.decode(request.responseText,true);
                if (responseObj != null && responseObj.message != undefined) {
                    Ext.Msg.show({
                        title: 'Error (' + responseObj.code + ')',
                        msg: responseObj.message,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.ERROR,
                        fn: function() {
                            if (responseObj.code == 401) document.location.href = '/auth';
                        }
                    });
                } else {
                    Ext.Msg.alert('Error', 'Unknown error: The server did not send any information about the error.');
                }
            } else {
                Ext.Msg.alert('Error', 'Unknown error: Unable to understand the response from the server');
            }
        }
    }
});

Ext.application({
    name: 'BooksCI',
    appFolder: 'application/frontend',
    controllers: ['Surface', 'Books'],
    autoCreateViewport: true
});

Ext.define('GlobalVars', {
    singleton: true,
    userdata: Ext.decode(Ext.util.Cookies.get('cimeetsextjs_access'))
});