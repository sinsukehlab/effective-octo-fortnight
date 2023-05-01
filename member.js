function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/skills/skills-member.html',
        controller: 'SkillsController',
        controllerAs: 'skills',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}
