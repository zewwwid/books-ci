Ext.onReady(function(){
    Ext.QuickTips.init();
 
    var login = new Ext.FormPanel({
        labelWidth: 80,
        url: 'auth/login', 
        frame: true,
        title: 'Введите логин и пароль', 
        defaultType: 'textfield',
        monitorValid: true,
        items: [{ 
            fieldLabel: 'Логин', 
            name: 'username', 
            allowBlank: false 
        },{ 
            fieldLabel: 'Пароль', 
            name: 'password', 
            inputType: 'password', 
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {	
                keypress:function(textfield, e) {
                    if (e.button == 12) {
                        doLogin();
                    }
                }
            }
        }],

        buttons:[{ 
            text: 'Вход',
            formBind: true,
            id: 'submit',
            width:220,
            handler: function(){
                doLogin();
            }
        }]
    });

    function doLogin() {
        if (login.getForm().isValid()) {
            login.getForm().submit({
                method: 'POST', 
                waitTitle: 'Connecting', 
                waitMsg: 'Sending data...',
                success: function(){
                    var redirect = '/'; 
                    window.location = redirect;
                },
                failure: function(form, action){
                    if(action.failureType == 'server'){ 
                        Ext.Msg.alert('Ошибка входа!', 'Неверная связка логин/пароль!'); 
                    } else { 
                        Ext.Msg.alert('Внимание!', 'Сервер авторизации не отвечает : ' + action.response.responseText); 
                    }
                    login.getForm().reset(); 
                } 
            });
        }
    }

    var win = new Ext.Window({
        layout: 'fit',
        closable: false,
        height: 130,
        resizable: false,
        border: false,
        items: [login]
    });
    win.show();
});