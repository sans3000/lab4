import { Book } from "./models/Book";
import { User } from "./models/User";
import { Library } from "./services/Library";
import { StorageService } from "./services/Storage";
import { isValidYear, isNumericId } from "./utils/validation";
import { showNotification } from "./ui/ui";

const bookLibrary = new Library<Book>();
const userLibrary = new Library<User>();

function renderBooks() {
  const container = document.getElementById("book-list");
  if (!container) return;

  const books = bookLibrary.getAll();
  container.innerHTML = "";

  books.forEach(book => {
    const div = document.createElement("div");
    div.className = `card p-3 mb-2 ${book.isBorrowed ? "bg-warning-subtle" : ""}`;

    div.innerHTML = `
      <strong>${book.title}</strong> — ${book.author} (${book.year})<br/>
      Стан: ${book.isBorrowed ? "Позичено" : "Доступна"}<br/>
      <input type="number" class="form-control form-control-sm mt-2" placeholder="ID користувача" id="book-user-${book.title}">
      <button class="btn btn-${book.isBorrowed ? "secondary" : "primary"} btn-sm mt-2">
        ${book.isBorrowed ? "Повернути" : "Позичити"}
      </button>
    `;

    const button = div.querySelector("button")!;
    button.addEventListener("click", () => {
      const userIdInput = div.querySelector("input") as HTMLInputElement;
      const userId = parseInt(userIdInput.value);
      if (!userId || isNaN(userId)) {
        showNotification("Невірний ID користувача", "danger");
        return;
      }

      if (book.isBorrowed) {
        returnBook(userId, book.title);
      } else {
        borrowBook(userId, book.title);
      }
    });

    container.appendChild(div);
  });
}

function renderUsers() {
  const container = document.getElementById("user-list");
  if (!container) return;
  container.innerHTML = userLibrary.getAll().map(user =>
    `<div class="card p-3">
      <b>${user.name}</b> (ID: ${user.id})<br>
      Позичено книг: ${user.borrowedBooks.length}
    </div>`
  ).join('');
}

document.getElementById("book-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const title = (document.getElementById("book-title") as HTMLInputElement).value;
  const author = (document.getElementById("book-author") as HTMLInputElement).value;
  const year = (document.getElementById("book-year") as HTMLInputElement).value;
  if (!title || !author || !isValidYear(year)) {
    showNotification("Невірно заповнені дані книги", "danger");
    return;
  }
  const book = new Book(title, author, parseInt(year));
  bookLibrary.add(book);
  StorageService.save("books", bookLibrary.getAll());
  renderBooks();
});

document.getElementById("user-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const id = (document.getElementById("user-id") as HTMLInputElement).value;
  const name = (document.getElementById("user-name") as HTMLInputElement).value;
  if (!isNumericId(id) || !name) {
    showNotification("Невірно заповнені дані користувача", "danger");
    return;
  }
  const user = new User(parseInt(id), name);
  userLibrary.add(user);
  StorageService.save("users", userLibrary.getAll());
  renderUsers();
});

function borrowBook(userId: number, bookTitle: string) {
  const user = userLibrary.getAll().find(u => u.id === userId);
  const book = bookLibrary.findByTitle(bookTitle);
  if (!user || !book) {
    showNotification("Користувача або книгу не знайдено", "danger");
    return;
  }

  if (book.isBorrowed) {
    showNotification("Книга вже позичена", "danger");
    return;
  }

  const success = user.borrowBook(book.title);
  if (!success) {
    showNotification("Користувач не може позичити більше 3 книг", "danger");
    return;
  }

  book.borrow();
  StorageService.save("books", bookLibrary.getAll());
  StorageService.save("users", userLibrary.getAll());
  showNotification("Книга успішно позичена", "success");
  renderBooks();
  renderUsers();
}

function returnBook(userId: number, bookTitle: string) {
  const user = userLibrary.getAll().find(u => u.id === userId);
  const book = bookLibrary.findByTitle(bookTitle);
  if (!user || !book) return;

  user.returnBook(book.title);
  book.returnBook();
  StorageService.save("books", bookLibrary.getAll());
  StorageService.save("users", userLibrary.getAll());
  showNotification("Книга повернена", "success");
  renderBooks();
  renderUsers();
}


function loadFromStorage() {
  const books = StorageService.load<Book[]>("books");
  const users = StorageService.load<User[]>("users");
  books?.forEach(b => bookLibrary.add(new Book(b.title, b.author, b.year, b.isBorrowed)));
  users?.forEach(u => userLibrary.add(new User(u.id, u.name, u.borrowedBooks)));
  renderBooks();
  renderUsers();
}

loadFromStorage();
