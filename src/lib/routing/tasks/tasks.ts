import { get } from '../base';

export const getExamNumsArray = async () => {
  return await get('examNums');
};
