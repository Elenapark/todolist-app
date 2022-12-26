const customStorage = {
  getItem: (key, options) => {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (err) {
      console.wran(`로컬스토리지 데이터 불러오기에 문제가 생겼습니다. ${err}`);
      if (options.onError) {
        options.onError();
      }
      return options.defaultValue;
    }
  },
  setItem: (key, newValue, options) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.wran(`로컬스토리지 데이터 저장에 문제가 생겼습니다. ${err}`);
      if (options.onError) {
        options.onError();
      }
    }
  },
};

export default customStorage;
