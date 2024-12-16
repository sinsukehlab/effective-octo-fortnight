const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const purify = DOMPurify(window);

function skillsMember(member) {
    const sanitizedMember = purify.sanitize(member);
    return {
        restrict: 'E',
        templateUrl: 'app/skills/skills-member.html',
        controller: 'SkillsController',
        controllerAs: 'skills',
        bindToController: true,
        scope: {
            member: sanitizedMember
        }
    };
}
