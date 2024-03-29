// TODO: Import your Header, TaskList, and TaskListItem

const Header = require('./header.js');
const TaskListItem = require('./tasklistitem.js');
const TaskList = require('./tasklist.js');

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  // TODO: Create new TaskListItems from the provided tasks
  // TODO: Add TaskListItems to a new TaskList

  const header = new Header().render();
  const taskListItems = tasks.map(
    (t) => new TaskListItem([t.text], t.priority)
  );
  const taskList = new TaskList(taskListItems).render();

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
      ${header}
      ${taskList}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
