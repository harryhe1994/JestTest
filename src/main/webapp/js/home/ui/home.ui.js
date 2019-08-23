Ext.namespace('je.jawr.sample.app');

je.jawr.sample.app.HomeUi = Ext.extend(Ext.Viewport, {
  layout: 'fit',
  id: 'app.home',
  initComponent: function() {
    var $this = this;
    $this.items = [
      {
        xtype: 'panel',
        layout: 'vbox',
        autoWidth: true,
        items: [
          {
            xtype: 'panel',
            layout: 'form',
            height: 100,
            width: '100%',
            hideBorders: true,
            items: [
              {
                xtype: 'label',
                text: locale.home.subtitle('Jest Jawr'),
                style: {
                  'font-family': '"Tahoma"',
                  'font-size': '30px'
                }
              }
            ]
          },
          {
            xtype: 'panel',
            title: 'Jest Jawr Sample Page Content',
            layout: 'form',
            width: '100%'
          }
        ]
      }
    ];
      je.jawr.sample.app.HomeUi.superclass.initComponent.call(this);
  }
});





