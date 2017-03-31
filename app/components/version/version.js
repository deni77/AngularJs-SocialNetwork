'use strict';

angular.module('socialNetwork.version', [
  'socialNetwork.version.interpolate-filter',
  'socialNetwork.version.version-directive'
])

.value('version', '0.1');
