export default interface ITask {
  id: number;
  description: string;
  answer: string;
  code?: string;
  comment?: string;
  filesNames: string[];
}
