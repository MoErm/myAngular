'use strict';

describe('myApp.school module', function() {

  beforeEach(module('myApp.school'));

  describe('school controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('SchoolCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});