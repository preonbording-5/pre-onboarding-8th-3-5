import axios from 'axios';
import { SickItem } from '../types/sickItem.type';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getSickData = async (inputValue: string): Promise<Array<SickItem>> => {
  console.info('calling api');
  const response = await instance.get('/sick', { params: { q: inputValue } });
  return response.data;
};
