Ext.define('BooksCI.view.book.Form', {
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
                            xtype: 'combo',
                            name: 'genre',
                            fieldLabel: 'Жанр',
                            displayField:'name',
                            valueField:'id',
                            store: 'Genres',
                            editable: false,
                            allowBlank: false,
                            listeners: {
                                change: function () {
                                    this.up('form').form.findField('name').setValue(this.rawValue);
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            name : 'name',
                            fieldLabel: 'name',
                            hidden:true,
                            allowBlank: true
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
				minValue:1000,
				fieldLabel: 'Год выпуска',
				name:'year'
			}]
	    });
	

        this.callParent(arguments);
    }
});
