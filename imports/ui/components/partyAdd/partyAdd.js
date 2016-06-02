import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partyAdd.html';
import { Parties } from '../../../api/parties/index';

class PartyAdd {
    constructor() {
        this.party = {};
    }

    submit() {
        this.party.owner = Meteor.user()._id;
        Parties.insert(this.party);
        this.reset();
    }

    reset() {
        this.party = {};
    }
}

const name = 'partyAdd';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: PartyAdd
});
