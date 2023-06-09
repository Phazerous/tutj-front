import Task from '../ui/components/tasks/task/task';
import ITask from '../interfaces/Task.interface';
import TaskTable from '../ui/components/tasks/task-table/task-table';

const tasksIds = [5, 4, 3, 2, 1, 54, 65, 747];

export default function Text() {
  return <TaskTable tasksIds={tasksIds} />;
}
