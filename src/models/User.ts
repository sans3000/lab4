export interface IUser {
    id: number;
    name: string;
    borrowedBooks: string[];
  }
  
  export class User implements IUser {
    constructor(
      public id: number,
      public name: string,
      public borrowedBooks: string[] = []
    ) {}
  
    borrowBook(bookTitle: string): boolean {
      if (this.borrowedBooks.length >= 3) return false;
      this.borrowedBooks.push(bookTitle);
      return true;
    }
  
    returnBook(bookTitle: string): void {
      this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);
    }
  }
  