require('@/jsBundles/extJs.js');
require('@/jsBundles/home.js');

describe('ext', function() {

    beforeAll(function() {
        Ext.onReady(function() {
            Ext.QuickTips.init();
            new je.jawr.sample.app.Home({
                renderTo: Ext.getBody()
            });
        });
    });

    it('# check extjs is loaded', function() {
        var expectExtVersion = '3.3.1';
        expect(Ext.version).toBe(expectExtVersion);
    });

    it('# expect home ui is rendered', function() {
        expect(Ext.getCmp('app.home')).toBeDefined();
        expect(true).toBe(true);
        expect(false).toBe(false);
    });


});
