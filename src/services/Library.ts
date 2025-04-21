export class Library<T extends { title?: string; id?: number }> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    removeById(id: number): void {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    findByTitle(title: string): T | undefined {
      return this.items.find(item => item.title === title);
    }
  
    getAll(): T[] {
      return this.items;
    }
  
    clear(): void {
      this.items = [];
    }
  }
  