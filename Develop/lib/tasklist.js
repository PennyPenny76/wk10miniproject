const Component = require('./component.js');

class TaskList extends Component {
    constructor(contents) {
        super(contents);
       
      }
    render() {
        return `<ul class="tasks">${this.renderInnerHtml()}</ul>.`;
    }
}

module.exports = TaskList;