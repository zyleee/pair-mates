angular.module( 'mates', [] )

    .factory( '$mates', [ function() {

        var mates = [
                { name: 'Roger', available: true },
                { name: 'Mike', available: false },
                { name: 'Steve', available: true },
                { name: 'John', available: true },
                { name: 'Debby', available: true },
                { name: 'Lucas', available: true }
            ];

        return {
            /**
             * Adds a mate to the team if valid
             *
             * @param name
             * @returns {boolean}
             */
            add: function(name)
            {
                if(!this.isUnique(name) || this.isEmpty(name)) {

                    return false;
                }
                mates.push({
                    name: name,
                    available: true
                });

                return true;
            },

            /**
             * Removes a mate from team
             *
             * @param mate
             */
            remove: function(mate)
            {
                mates.splice(mates.indexOf(mate), 1);
            },

            /**
             * Returns an array with all mates
             *
             * @returns {Array}
             */
            list: function()
            {
                return mates;
            },

            /**
             * Gives you the size of the team
             *
             * @returns {Number}
             */
            size: function()
            {
                return mates.length;
            },

            /**
             * Checks if that name is already in use
             *
             * @param name
             * @returns {boolean}
             */
            isUnique: function(name)
            {
                var i=0;
                for(;i<mates.length;i++) {
                    if(mates[i].name === name) {

                        return false;
                    }
                }

                return true;
            },

            /**
             * Checks if a string is empty
             *
             * @param name
             * @returns {boolean}
             */
            isEmpty: function(name)
            {
                return 0 === name.length;
            },

            /**
             * Generates an array with pairs
             *
             * @returns {Array}
             */
            getPairs: function ()
            {
                var availableMates = [],
                    tempMates = [],
                    pairs = [],
                    pair = [],
                    i = 0,
                    ii = 0,
                    currentMate;

                //Create arrays with available mates
                for(;i<mates.length;i++) {
                    if(true === mates[i].available) {
                        availableMates.push(mates[i]);
                        tempMates.push(mates[i]);
                    }
                }

                for(i=0;i<availableMates.length-1;i++) {
                    currentMate = availableMates[i];
                    delete tempMates[i];
                    for(ii=0;ii<tempMates.length;ii++) {
                        if( tempMates[ii] ) {
                            pair = [];
                            pair.push(currentMate);
                            pair.push(tempMates[ii]);
                            pairs.push(pair);
                        }
                    }
                }

                return pairs;
            }
        };
    }])


;

