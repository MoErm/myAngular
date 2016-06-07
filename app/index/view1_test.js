'use strict';

describe('myApp.index module', function() {

  beforeEach(module('myApp.index'));

  describe('index controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('IndexCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});