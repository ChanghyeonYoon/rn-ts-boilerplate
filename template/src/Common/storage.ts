import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  accessToken: '@ACCESS_TOKEN',
};

export const getItem = async (key: string) => {
  try {
    const isExist = await AsyncStorage.getItem(key);
    if (isExist) {
      if (isExist.indexOf('{') > -1 && isExist.indexOf('}') > -1) {
        return JSON.parse(isExist);
      }
      return isExist;
    } else {
      throw { message: `There is no common/storage ${key}` };
    }
  } catch (error) {
    console.log('common/storage getItem Error!', error);
    return undefined;
  }
};

export const setItem = async (key: string, value: string | Record<string, any>) => {
  try {
    const isExist = await AsyncStorage.getItem(key);
    if (isExist === value) {
      return true;
    } else {
      if (typeof value !== 'string') value = JSON.stringify(value);
      await AsyncStorage.setItem(key, value);
      return true;
    }
  } catch (error) {
    console.log('common/storage setItem Error!', error);
    return false;
  }
};

export const removeItem = async (key: string) => {
  try {
    const isExist = await AsyncStorage.getItem(key);
    if (isExist) {
      await AsyncStorage.removeItem(key);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('common/storage removeItem Error!', error);
  }
};
