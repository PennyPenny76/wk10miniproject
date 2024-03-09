const TaskListItem = require('../lib/tasklistitem.js');


describe('TaskListItem', () => {
    it('should render TaskListItem correctly', () => {
        const expectedli = 
            '<li class="${classNames}">${this.renderInnerHtml()}</li>';
          const tasklistitem = new TaskListItem();
          expect(tasklistitem.render()).toEqual(expectedli);
        });
    });