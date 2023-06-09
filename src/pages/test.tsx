import TaskTable from '../ui/components/tasks/task-table/task-table';
import ITask from '../interfaces/task.interface';
import Task from '../ui/components/tasks/task/task';

const dummy: ITask = {
  id: 28,
  examNum: 2,
  description: 'Desc',
  answer: 'Ans',
  code: 'print("bruh")',
  comment: 'wow',
  filesPathes: ['dummy.html'],
};

export default function Text() {
  return (
    <>
      <Task task={dummy} />
    </>
  );
}
