import useTaskForm from '../../../../hooks/useTaskForm';
import TaskControlsContainer from '../task-controls-container/task-controls-container';
import TaskFormEditable from '../task-form-editable/task-form-editable';
import TaskLayout from '../task-layout/task-layout';
import TaskCreationControls from './task-creation-controls/task-creation-controls';

export default function TaskCreation() {
  const [taskData, linkPropertyState] = useTaskForm();

  return (
    <TaskLayout>
      <h5>Создание нового задания</h5>
      <TaskFormEditable linkPropertyState={linkPropertyState} />
      <TaskControlsContainer>
        <TaskCreationControls
          onBack={() => console.log('back')}
          onSave={() => console.log('save')}
        />
      </TaskControlsContainer>
    </TaskLayout>
  );
}
