import { getSickData } from './getData';

const maxLength = 50;

export const getCacheData = async (keyWord: string) => {
  if (sessionStorage.getItem(keyWord) === null) {
    try {
      const data = await getSickData(keyWord);
      if (sessionStorage.length >= maxLength) {
        sessionStorage.removeItem(sessionStorage.key(0) as string);
        sessionStorage.setItem(keyWord, JSON.stringify(data));
      } else {
        sessionStorage.setItem(keyWord, JSON.stringify(data));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  } else {
    const data = sessionStorage.getItem(keyWord) as string;
    if (sessionStorage.length > maxLength) {
      sessionStorage.removeItem(keyWord);
      sessionStorage.setItem(keyWord, data);
    } else {
      sessionStorage.setItem(keyWord, data);
    }
    return JSON.parse(data as string);
  }
};
