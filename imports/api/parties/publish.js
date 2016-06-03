import { Meteor } from 'meteor/meteor';

import { Parties } from './collection';

if (Meteor.isServer) {
    Meteor.publish('parties', (options, searchString) => {
        const selector = {
            $or: [{
                // the public parties
                $and: [{
                    public: true
                }, {
                    public: {
                        $exists: true
                    }
                }]
            }, {
                // when logged in user is the owner
                $and: [{
                    owner: this.userId
                }, {
                    owner: {
                        $exists: true
                    }
                }]
            }, {
                // when logged in user is one of the invited
                $and: [{
                    invited: this.userId
                }, {
                    invited: {
                        $exists: true
                    }
                }]
            }]
        };

        if (typeof searchString === 'string' && searchString.length) {
            selector.name = {
                $regex: `.*${searchString}.*`,
                $options : 'i'
            };
        }

        return Parties.find(selector, options);
    })
}
