const TaskList = require('../lib/tasklist.js');


describe('TaskList', () => {
    it('should render TaskList correctly', () => {
        const expectedul = 
            '`<ul class="tasks">${this.renderInnerHtml()}</ul>.`';
            const tasklist = new TaskList();
            expect(tasklist.render()).toEqual(expectedul);
        });
});