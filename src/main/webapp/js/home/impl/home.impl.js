Ext.namespace('je.jawr.sample.app');

je.jawr.sample.app.Home = Ext.extend(je.jawr.sample.app.HomeUi, {
  initComponent: function() {
    var $this = this;
    je.jawr.sample.app.Home.superclass.initComponent.call($this);

    $this.initEventHandlers();
  },

  // test unused method
  initEventHandlers: function() {
  }

});

Ext.ComponentMgr.registerType('je.jawr.sample.app.Home', je.jawr.sample.app.Home);



