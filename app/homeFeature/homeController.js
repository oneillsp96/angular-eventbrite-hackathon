angular.module("app")

  .controller("homeController", ['$scope', 'homeFactory', function ($scope, homeFactory) {

    $scope.teamData;
    $scope.membersData;

    //get all teams teamData, then use TeamID to get members
    homeFactory.getTeams()
      .success(function (teamData) {
        $scope.teamData = teamData;
        getMemberData();

      })
      .error(function (e) {
        console.log(e)
      })


//loop over all teams' data
    function getMemberData() {
      angular.forEach($scope.teamData.teams, function (team) {
        homeFactory.getTeamMembers(team.id)   //$scope.teamData.teams[0].id
          .success(function (membersData) {
            $scope.attendeesData = membersData;  //change all verbiage to attendees
          })
          .error(function (e) {
            console.log(e)
          })

      })
    }






  }]);