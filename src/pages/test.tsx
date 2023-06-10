import TaskTable from '../ui/components/tasks/task-table/task-table';
import ITask from '../interfaces/task.interface';
import Task from '../ui/components/tasks/task/task';
import TaskCreation from '../ui/components/tasks/task-creation/task-creation';
import Button from '../ui/components/button/button';
import { ButtonColor } from '../ui/components/button/button-color.enum';
import { ButtonSize } from '../ui/components/button/button-size.enum';
import ButtonIcon from '../ui/components/button-icon/button-icon';
import { ButtonIconType } from '../ui/components/button-icon/button-icon.enum';

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
      <TaskCreation />
    </>
  );
}
