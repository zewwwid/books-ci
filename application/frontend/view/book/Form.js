Ext.define('CImeetsExtJS.view.book.Form', {
    extend: 'Ext.form.Panel',
    alias : 'widget.book-form',
    border : false,
    bodyPadding : 10,
      
   initComponent: function() {
	   Ext.apply(this, {
			fieldDefaults: {
				anchor: '100%',
				labelAlign: 'left',
				allowBlank: false,
				combineErrors: true,
				msgTarget: 'side'
			},
                        
			items: [
                        {
				xtype: 'textfield',
				name : 'id',
				fieldLabel: 'id',
				hidden:true,
				allowBlank: true
			},
                        {
                            xtype: 'combobox',
                            name: 'genre',
                            fieldLabel: 'Жанр',
                            store: new Ext.data.SimpleStore({
                                id:1,
                                fields: [ 'id', 'name' ],
                                data:[
                                    [1, 'Биография'],
                                    [2, 'Вэстерн'],
                                    [3, 'Детектив'],
                                    [4, 'Драма'],
                                    [5, 'Мемуары'],
                                    [6, 'Новелла'],
                                    [7, 'Повесть'],
                                    [8, 'Поэма'],
                                    [9, 'Фантастика']
                                ]
                            }),
                            allowBlank: false
                        },
                        {
				xtype: 'textfield',
				name : 'author',
				fieldLabel: 'Автор',
                                allowBlank: true
			},
                        {
				xtype: 'textfield',
				name : 'title',
				fieldLabel: 'Название',
                                allowBlank: false
			},{
				xtype: 'numberfield',
				allowNegative:false,
				allowDecimals:false,
				maxValue:2050,
				minValue:1900,
				fieldLabel: 'Год выпуска',
				name:'year'
			}]
	    });
	

        this.callParent(arguments);
    }
});
