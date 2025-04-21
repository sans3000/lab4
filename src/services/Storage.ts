export class StorageService {
    static save<T>(key: string, data: T): void {
      localStorage.setItem(key, JSON.stringify(data));
    }
  
    static load<T>(key: string): T | null {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
  
    static clear(key: string): void {
      localStorage.removeItem(key);
    }
  }
  