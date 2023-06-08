import useSWR from 'swr';
import { get } from '../lib/routing/base';
import DownloadableFile from '../ui/components/downloadable-file/downloadable-file';
import Task from '../ui/components/tasks/task/task';
import ITask from '../interfaces/Task.interface';

const route = 'notExistingPath';

const dummy: ITask = {
  id: 28,
  description: `Напишите программу, которая ищет среди целых чисел, принадлежащих числовому отрезку [245 690; 245 756] простые числа. Выведите на экран все найденные простые числа в порядке возрастания, слева от каждого числа выведите его порядковый номер в последовательности. Каждая пара чисел должна быть выведена в отдельной строке.
  Например, в диапазоне [5; 9] ровно два различных натуральных простых числа — это числа 5 и 7, поэтому для этого диапазона вывод на экране должна содержать следующие значения:
  1 5
  3 7
  Примечание. Простое число — натуральное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.`,
  answer: '3 58153',
  // code: `
  // file = open('27/40B.txt')
  // n = int(file.readline())
  // nums = list(map(int, file.readlines()))

  // div15 = 0
  // div5 = 0
  // div3 = 0
  // div = 0

  // cnt = 0

  // for i in range(9, len(nums)):
  //     new = nums[i - 9]

  //     if new % 15 == 0:
  //         div15 += 1
  //     elif new % 5 == 0:
  //         div5 += 1
  //     elif new % 3 == 0:
  //         div3 += 1
  //     else:
  //         div += 1

  //     cur = nums[i]

  //     if cur % 15 == 0:
  //         cnt += div15 + div5 + div3 + div
  //     elif cur % 5 == 0:
  //         cnt += div15 + div3
  //     elif cur % 3 == 0:
  //         cnt += div15 + div5
  //     else:
  //         cnt += div15

  // print(cnt)`,
  // comment: 'hello world',
  // filesNames: ['1.txt'],
};

export default function Text() {
  return (
    <Task
      {...dummy}
      idx={5}
    />
  );

  return <DownloadableFile fileName='24.txt' />;
  // const { data, error } = useSWR('examNums', get);

  // return <h1>{data && data.toString()}</h1>;
}
