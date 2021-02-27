let User = require('../model/user');
let Todo = require('../model/todo');

// *** Todo controllers ***
exports.todolist_get = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.user._id }).populate('todoList');
    res.render('todolist.ejs', { todos: user.todoList, user: req.user.user });
  } catch (err) {
    console.log(err);
  }
};

exports.addTodo_post = async (req, res) => {
  const task = req.body.task;

  try {
    if (!task || task.length < 2) {
      req.flash('warning_msg', 'You must type something!');
      res.redirect('back');
    }
    const todo = await new Todo({ task: task }).save();
    const user = await User.findOne({ _id: req.user.user._id });

    user.addTask(todo._id);

    res.redirect('back');
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTodo_get = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.user._id });

    const todoId = req.params.id;

    await Todo.deleteOne({ _id: todoId });

    user.todoList.pull({ _id: todoId });

    user.save();

    res.redirect('/todolist');
  } catch (err) {
    console.log(err);
  }
};

exports.editTodo_get = async (req, res) => {
  const taskId = req.params.id;
  try {
    const user = await User.findOne({ _id: req.user.user._id }).populate('todoList');

    res.render('editTodo.ejs', {
      todos: user.todoList,
      user: req.user.user,
      taskId: taskId,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.editTodo_post = async (req, res) => {
  const id = req.params.id;
  const task = req.body.task;
  try {
    if (!task || task.length < 2) {
      req.flash('warning_msg', 'You must type something!');
      res.redirect('back');
    }
    await Todo.updateOne({ _id: req.params.id }, { task: req.body.task }, { runValidators: true });
    res.redirect('/todolist');
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err);
  }
};
