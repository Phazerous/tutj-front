export default interface ITask {
  id: number;
  taskOrder: number;
  description: string;
  answer: string;
  code: string;
  comment: string;
  filesPathes: string[];
}
