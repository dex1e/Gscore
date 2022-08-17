class LSService {
  setData(key: string, value: any) {
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getData(key: string) {
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
      const data = localStorage.getItem(key);
      if (data) return JSON.parse(data);
    }
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }
}

export const LocalStorageService = new LSService();
