'use strict';

describe('socialNetwork.version module', function() {
  beforeEach(module('socialNetwork.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
