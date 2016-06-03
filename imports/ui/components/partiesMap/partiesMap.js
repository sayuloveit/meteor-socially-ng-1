import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import template from './partiesMap.html';

class PartiesMap {
  constructor() {
    this.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };
  }
}

const name = 'partiesMap';

export default angular.module(name, [
  angularMeteor,
  'nemLogging',
  'uiGmapgoogle-maps'
]).component(name, {
  template,
  controllerAs: name,
  bindings: {
    parties: '='
  },
  controller: PartiesMap
});
