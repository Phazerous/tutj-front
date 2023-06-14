import styles from './task.module.scss';
import Task from '../../../../interfaces/task.interface';
import TaskFormEditable from '../task-form-editable/task-form-editable';
import TaskLayout from '../task-layout/task-layout';
import TaskForm from '../task-form/task-form';
import TaskCreation from '../task-creation/task-creation';
import useTaskForm from '../../../../hooks/useTaskForm';
import TaskControlsContainer from '../task-controls-container/task-controls-container';
import TaskCreationControls from '../task-creation/task-creation-controls/task-creation-controls';
import TaskViewControls from '../task-view-controls/task-view-controls';
import { useState } from 'react';
import TaskEditControls from '../task-edit-controls/task-edit-controls';
import { useRouter } from 'next/router';
import { patch } from '../../../../lib/routing/base';

interface TaskProps {
  task: Task;
}

export default function Task({ task }: TaskProps) {
  const router = useRouter();

  const [outputObj, linkPropertyState, resetObj] = useTaskForm({ task });

  const [isEditing, setEditing] = useState(false);

  const handleBack = () => {
    router.push(`/tasks?examNum=${task.examNum}`);
  };

  const handleSave = async () => {
    try {
      await patch(`tasks/${task.id}`, {
        ...outputObj,
        id: task.id,
        examNum: task.examNum,
      });
      router.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const renderTask = () => {
    if (isEditing) {
      return (
        <>
          <TaskFormEditable
            linkPropertyState={linkPropertyState}
            task={task}
          />

          <TaskControlsContainer>
            <TaskEditControls
              onBack={() => {
                setEditing(false);
                resetObj();
              }}
              onSave={handleSave}
            />
          </TaskControlsContainer>
        </>
      );
    }

    return (
      <>
        <TaskForm task={task} />

        <TaskControlsContainer>
          <TaskViewControls
            onBack={handleBack}
            onEdit={() => setEditing(true)}
          />
        </TaskControlsContainer>
      </>
    );
  };

  return (
    <>
      <TaskLayout>
        <h5>Задание № {task.id}</h5>
        {renderTask()}
      </TaskLayout>
    </>
  );
}
