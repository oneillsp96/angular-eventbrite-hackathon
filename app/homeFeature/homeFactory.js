angular.module("app")

    .factory("homeFactory", ['$http', function ($http) {

        var factory = {};

        factory.getTeams = function () {
            return $http.get('https://www.eventbriteapi.com/v3/events/24582438736/teams/?token=KRQBBTPAQNZJ2MBT3AKY');
        }

        factory.getTeamMembers = function (teamId) {
            return $http.get('https://www.eventbriteapi.com/v3/events/24582438736/teams/' + teamId + '/attendees/?token=KRQBBTPAQNZJ2MBT3AKY')
        }

        return factory;
    }]);