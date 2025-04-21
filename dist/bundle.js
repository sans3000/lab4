/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/Book.ts":
/*!****************************!*\
  !*** ./src/models/Book.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Book: () => (/* binding */ Book)
/* harmony export */ });
var Book = /** @class */ (function () {
    function Book(title, author, year, isBorrowed) {
        if (isBorrowed === void 0) { isBorrowed = false; }
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = isBorrowed;
    }
    Book.prototype.borrow = function () {
        this.isBorrowed = true;
    };
    Book.prototype.returnBook = function () {
        this.isBorrowed = false;
    };
    return Book;
}());



/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
var User = /** @class */ (function () {
    function User(id, name, borrowedBooks) {
        if (borrowedBooks === void 0) { borrowedBooks = []; }
        this.id = id;
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }
    User.prototype.borrowBook = function (bookTitle) {
        if (this.borrowedBooks.length >= 3)
            return false;
        this.borrowedBooks.push(bookTitle);
        return true;
    };
    User.prototype.returnBook = function (bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter(function (title) { return title !== bookTitle; });
    };
    return User;
}());



/***/ }),

/***/ "./src/services/Library.ts":
/*!*********************************!*\
  !*** ./src/services/Library.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Library: () => (/* binding */ Library)
/* harmony export */ });
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.add = function (item) {
        this.items.push(item);
    };
    Library.prototype.removeById = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    };
    Library.prototype.findByTitle = function (title) {
        return this.items.find(function (item) { return item.title === title; });
    };
    Library.prototype.getAll = function () {
        return this.items;
    };
    Library.prototype.clear = function () {
        this.items = [];
    };
    return Library;
}());



/***/ }),

/***/ "./src/services/Storage.ts":
/*!*********************************!*\
  !*** ./src/services/Storage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.save = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    StorageService.load = function (key) {
        var data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    };
    StorageService.clear = function (key) {
        localStorage.removeItem(key);
    };
    return StorageService;
}());



/***/ }),

/***/ "./src/ui/ui.ts":
/*!**********************!*\
  !*** ./src/ui/ui.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showNotification: () => (/* binding */ showNotification)
/* harmony export */ });
function showNotification(message, type) {
    var container = document.getElementById("user-list") || document.body;
    var div = document.createElement("div");
    div.className = "alert alert-".concat(type);
    div.innerText = message;
    container.appendChild(div);
    setTimeout(function () { return div.remove(); }, 3000);
}


/***/ }),

/***/ "./src/utils/validation.ts":
/*!*********************************!*\
  !*** ./src/utils/validation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumericId: () => (/* binding */ isNumericId),
/* harmony export */   isValidYear: () => (/* binding */ isValidYear)
/* harmony export */ });
function isValidYear(year) {
    return /^\d{4}$/.test(year);
}
function isNumericId(id) {
    return /^\d+$/.test(id);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Book */ "./src/models/Book.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/User */ "./src/models/User.ts");
/* harmony import */ var _services_Library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/Library */ "./src/services/Library.ts");
/* harmony import */ var _services_Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/Storage */ "./src/services/Storage.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/validation */ "./src/utils/validation.ts");
/* harmony import */ var _ui_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/ui */ "./src/ui/ui.ts");
var _a, _b;






var bookLibrary = new _services_Library__WEBPACK_IMPORTED_MODULE_2__.Library();
var userLibrary = new _services_Library__WEBPACK_IMPORTED_MODULE_2__.Library();
function renderBooks() {
    var container = document.getElementById("book-list");
    if (!container)
        return;
    var books = bookLibrary.getAll();
    container.innerHTML = "";
    books.forEach(function (book) {
        var div = document.createElement("div");
        div.className = "card p-3 mb-2 ".concat(book.isBorrowed ? "bg-warning-subtle" : "");
        div.innerHTML = "\n      <strong>".concat(book.title, "</strong> \u2014 ").concat(book.author, " (").concat(book.year, ")<br/>\n      \u0421\u0442\u0430\u043D: ").concat(book.isBorrowed ? "Позичено" : "Доступна", "<br/>\n      <input type=\"number\" class=\"form-control form-control-sm mt-2\" placeholder=\"ID \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\" id=\"book-user-").concat(book.title, "\">\n      <button class=\"btn btn-").concat(book.isBorrowed ? "secondary" : "primary", " btn-sm mt-2\">\n        ").concat(book.isBorrowed ? "Повернути" : "Позичити", "\n      </button>\n    ");
        var button = div.querySelector("button");
        button.addEventListener("click", function () {
            var userIdInput = div.querySelector("input");
            var userId = parseInt(userIdInput.value);
            if (!userId || isNaN(userId)) {
                (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Невірний ID користувача", "danger");
                return;
            }
            if (book.isBorrowed) {
                returnBook(userId, book.title);
            }
            else {
                borrowBook(userId, book.title);
            }
        });
        container.appendChild(div);
    });
}
function renderUsers() {
    var container = document.getElementById("user-list");
    if (!container)
        return;
    container.innerHTML = userLibrary.getAll().map(function (user) {
        return "<div class=\"card p-3\">\n      <b>".concat(user.name, "</b> (ID: ").concat(user.id, ")<br>\n      \u041F\u043E\u0437\u0438\u0447\u0435\u043D\u043E \u043A\u043D\u0438\u0433: ").concat(user.borrowedBooks.length, "\n    </div>");
    }).join('');
}
(_a = document.getElementById("book-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.getElementById("book-title").value;
    var author = document.getElementById("book-author").value;
    var year = document.getElementById("book-year").value;
    if (!title || !author || !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_4__.isValidYear)(year)) {
        (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Невірно заповнені дані книги", "danger");
        return;
    }
    var book = new _models_Book__WEBPACK_IMPORTED_MODULE_0__.Book(title, author, parseInt(year));
    bookLibrary.add(book);
    _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.save("books", bookLibrary.getAll());
    renderBooks();
});
(_b = document.getElementById("user-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", function (e) {
    e.preventDefault();
    var id = document.getElementById("user-id").value;
    var name = document.getElementById("user-name").value;
    if (!(0,_utils_validation__WEBPACK_IMPORTED_MODULE_4__.isNumericId)(id) || !name) {
        (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Невірно заповнені дані користувача", "danger");
        return;
    }
    var user = new _models_User__WEBPACK_IMPORTED_MODULE_1__.User(parseInt(id), name);
    userLibrary.add(user);
    _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.save("users", userLibrary.getAll());
    renderUsers();
});
function borrowBook(userId, bookTitle) {
    var user = userLibrary.getAll().find(function (u) { return u.id === userId; });
    var book = bookLibrary.findByTitle(bookTitle);
    if (!user || !book) {
        (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Користувача або книгу не знайдено", "danger");
        return;
    }
    if (book.isBorrowed) {
        (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Книга вже позичена", "danger");
        return;
    }
    var success = user.borrowBook(book.title);
    if (!success) {
        (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Користувач не може позичити більше 3 книг", "danger");
        return;
    }
    book.borrow();
    _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.save("books", bookLibrary.getAll());
    _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.save("users", userLibrary.getAll());
    (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Книга успішно позичена", "success");
    renderBooks();
    renderUsers();
}
function returnBook(userId, bookTitle) {
    var user = userLibrary.getAll().find(function (u) { return u.id === userId; });
    var book = bookLibrary.findByTitle(bookTitle);
    if (!user || !book)
        return;
    user.returnBook(book.title);
    book.returnBook();
    _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.save("books", bookLibrary.getAll());
    _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.save("users", userLibrary.getAll());
    (0,_ui_ui__WEBPACK_IMPORTED_MODULE_5__.showNotification)("Книга повернена", "success");
    renderBooks();
    renderUsers();
}
function loadFromStorage() {
    var books = _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.load("books");
    var users = _services_Storage__WEBPACK_IMPORTED_MODULE_3__.StorageService.load("users");
    books === null || books === void 0 ? void 0 : books.forEach(function (b) { return bookLibrary.add(new _models_Book__WEBPACK_IMPORTED_MODULE_0__.Book(b.title, b.author, b.year, b.isBorrowed)); });
    users === null || users === void 0 ? void 0 : users.forEach(function (u) { return userLibrary.add(new _models_User__WEBPACK_IMPORTED_MODULE_1__.User(u.id, u.name, u.borrowedBooks)); });
    renderBooks();
    renderUsers();
}
loadFromStorage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2REFBYztBQUM5QixnQkFBZ0IsNkRBQWM7QUFDOUIsK0VBQStFLDJCQUEyQiw4Q0FBSSw2Q0FBNkM7QUFDM0osK0VBQStFLDJCQUEyQiw4Q0FBSSxtQ0FBbUM7QUFDako7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWItNC8uL3NyYy9tb2RlbHMvQm9vay50cyIsIndlYnBhY2s6Ly9sYWItNC8uL3NyYy9tb2RlbHMvVXNlci50cyIsIndlYnBhY2s6Ly9sYWItNC8uL3NyYy9zZXJ2aWNlcy9MaWJyYXJ5LnRzIiwid2VicGFjazovL2xhYi00Ly4vc3JjL3NlcnZpY2VzL1N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vbGFiLTQvLi9zcmMvdWkvdWkudHMiLCJ3ZWJwYWNrOi8vbGFiLTQvLi9zcmMvdXRpbHMvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9sYWItNC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYWItNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGFiLTQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYWItNC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xhYi00Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEJvb2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCB5ZWFyLCBpc0JvcnJvd2VkKSB7XG4gICAgICAgIGlmIChpc0JvcnJvd2VkID09PSB2b2lkIDApIHsgaXNCb3Jyb3dlZCA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgICAgIHRoaXMuaXNCb3Jyb3dlZCA9IGlzQm9ycm93ZWQ7XG4gICAgfVxuICAgIEJvb2sucHJvdG90eXBlLmJvcnJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0JvcnJvd2VkID0gdHJ1ZTtcbiAgICB9O1xuICAgIEJvb2sucHJvdG90eXBlLnJldHVybkJvb2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNCb3Jyb3dlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIEJvb2s7XG59KCkpO1xuZXhwb3J0IHsgQm9vayB9O1xuIiwidmFyIFVzZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXNlcihpZCwgbmFtZSwgYm9ycm93ZWRCb29rcykge1xuICAgICAgICBpZiAoYm9ycm93ZWRCb29rcyA9PT0gdm9pZCAwKSB7IGJvcnJvd2VkQm9va3MgPSBbXTsgfVxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9ycm93ZWRCb29rcyA9IGJvcnJvd2VkQm9va3M7XG4gICAgfVxuICAgIFVzZXIucHJvdG90eXBlLmJvcnJvd0Jvb2sgPSBmdW5jdGlvbiAoYm9va1RpdGxlKSB7XG4gICAgICAgIGlmICh0aGlzLmJvcnJvd2VkQm9va3MubGVuZ3RoID49IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuYm9ycm93ZWRCb29rcy5wdXNoKGJvb2tUaXRsZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVXNlci5wcm90b3R5cGUucmV0dXJuQm9vayA9IGZ1bmN0aW9uIChib29rVGl0bGUpIHtcbiAgICAgICAgdGhpcy5ib3Jyb3dlZEJvb2tzID0gdGhpcy5ib3Jyb3dlZEJvb2tzLmZpbHRlcihmdW5jdGlvbiAodGl0bGUpIHsgcmV0dXJuIHRpdGxlICE9PSBib29rVGl0bGU7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFVzZXI7XG59KCkpO1xuZXhwb3J0IHsgVXNlciB9O1xuIiwidmFyIExpYnJhcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cbiAgICBMaWJyYXJ5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfTtcbiAgICBMaWJyYXJ5LnByb3RvdHlwZS5yZW1vdmVCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCAhPT0gaWQ7IH0pO1xuICAgIH07XG4gICAgTGlicmFyeS5wcm90b3R5cGUuZmluZEJ5VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS50aXRsZSA9PT0gdGl0bGU7IH0pO1xuICAgIH07XG4gICAgTGlicmFyeS5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9O1xuICAgIExpYnJhcnkucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfTtcbiAgICByZXR1cm4gTGlicmFyeTtcbn0oKSk7XG5leHBvcnQgeyBMaWJyYXJ5IH07XG4iLCJ2YXIgU3RvcmFnZVNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RvcmFnZVNlcnZpY2UoKSB7XG4gICAgfVxuICAgIFN0b3JhZ2VTZXJ2aWNlLnNhdmUgPSBmdW5jdGlvbiAoa2V5LCBkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH07XG4gICAgU3RvcmFnZVNlcnZpY2UubG9hZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBudWxsO1xuICAgIH07XG4gICAgU3RvcmFnZVNlcnZpY2UuY2xlYXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2U7XG59KCkpO1xuZXhwb3J0IHsgU3RvcmFnZVNlcnZpY2UgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLWxpc3RcIikgfHwgZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJhbGVydCBhbGVydC1cIi5jb25jYXQodHlwZSk7XG4gICAgZGl2LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBkaXYucmVtb3ZlKCk7IH0sIDMwMDApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gL15cXGR7NH0kLy50ZXN0KHllYXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpY0lkKGlkKSB7XG4gICAgcmV0dXJuIC9eXFxkKyQvLnRlc3QoaWQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX2EsIF9iO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gXCIuL21vZGVscy9Cb29rXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IExpYnJhcnkgfSBmcm9tIFwiLi9zZXJ2aWNlcy9MaWJyYXJ5XCI7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL1N0b3JhZ2VcIjtcbmltcG9ydCB7IGlzVmFsaWRZZWFyLCBpc051bWVyaWNJZCB9IGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tIFwiLi91aS91aVwiO1xudmFyIGJvb2tMaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbnZhciB1c2VyTGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG5mdW5jdGlvbiByZW5kZXJCb29rcygpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWxpc3RcIik7XG4gICAgaWYgKCFjb250YWluZXIpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgYm9va3MgPSBib29rTGlicmFyeS5nZXRBbGwoKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBib29rcy5mb3JFYWNoKGZ1bmN0aW9uIChib29rKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJjYXJkIHAtMyBtYi0yIFwiLmNvbmNhdChib29rLmlzQm9ycm93ZWQgPyBcImJnLXdhcm5pbmctc3VidGxlXCIgOiBcIlwiKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiXFxuICAgICAgPHN0cm9uZz5cIi5jb25jYXQoYm9vay50aXRsZSwgXCI8L3N0cm9uZz4gXFx1MjAxNCBcIikuY29uY2F0KGJvb2suYXV0aG9yLCBcIiAoXCIpLmNvbmNhdChib29rLnllYXIsIFwiKTxici8+XFxuICAgICAgXFx1MDQyMVxcdTA0NDJcXHUwNDMwXFx1MDQzRDogXCIpLmNvbmNhdChib29rLmlzQm9ycm93ZWQgPyBcItCf0L7Qt9C40YfQtdC90L5cIiA6IFwi0JTQvtGB0YLRg9C/0L3QsFwiLCBcIjxici8+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbXQtMlxcXCIgcGxhY2Vob2xkZXI9XFxcIklEIFxcdTA0M0FcXHUwNDNFXFx1MDQ0MFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDNcXHUwNDMyXFx1MDQzMFxcdTA0NDdcXHUwNDMwXFxcIiBpZD1cXFwiYm9vay11c2VyLVwiKS5jb25jYXQoYm9vay50aXRsZSwgXCJcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tXCIpLmNvbmNhdChib29rLmlzQm9ycm93ZWQgPyBcInNlY29uZGFyeVwiIDogXCJwcmltYXJ5XCIsIFwiIGJ0bi1zbSBtdC0yXFxcIj5cXG4gICAgICAgIFwiKS5jb25jYXQoYm9vay5pc0JvcnJvd2VkID8gXCLQn9C+0LLQtdGA0L3Rg9GC0LhcIiA6IFwi0J/QvtC30LjRh9C40YLQuFwiLCBcIlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICBcIik7XG4gICAgICAgIHZhciBidXR0b24gPSBkaXYucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXNlcklkSW5wdXQgPSBkaXYucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICAgICAgdmFyIHVzZXJJZCA9IHBhcnNlSW50KHVzZXJJZElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmICghdXNlcklkIHx8IGlzTmFOKHVzZXJJZCkpIHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwi0J3QtdCy0ZbRgNC90LjQuSBJRCDQutC+0YDQuNGB0YLRg9Cy0LDRh9CwXCIsIFwiZGFuZ2VyXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChib29rLmlzQm9ycm93ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Cb29rKHVzZXJJZCwgYm9vay50aXRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3Jyb3dCb29rKHVzZXJJZCwgYm9vay50aXRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmRlclVzZXJzKCkge1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItbGlzdFwiKTtcbiAgICBpZiAoIWNvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB1c2VyTGlicmFyeS5nZXRBbGwoKS5tYXAoZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiY2FyZCBwLTNcXFwiPlxcbiAgICAgIDxiPlwiLmNvbmNhdCh1c2VyLm5hbWUsIFwiPC9iPiAoSUQ6IFwiKS5jb25jYXQodXNlci5pZCwgXCIpPGJyPlxcbiAgICAgIFxcdTA0MUZcXHUwNDNFXFx1MDQzN1xcdTA0MzhcXHUwNDQ3XFx1MDQzNVxcdTA0M0RcXHUwNDNFIFxcdTA0M0FcXHUwNDNEXFx1MDQzOFxcdTA0MzM6IFwiKS5jb25jYXQodXNlci5ib3Jyb3dlZEJvb2tzLmxlbmd0aCwgXCJcXG4gICAgPC9kaXY+XCIpO1xuICAgIH0pLmpvaW4oJycpO1xufVxuKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWZvcm1cIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay10aXRsZVwiKS52YWx1ZTtcbiAgICB2YXIgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWF1dGhvclwiKS52YWx1ZTtcbiAgICB2YXIgeWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9vay15ZWFyXCIpLnZhbHVlO1xuICAgIGlmICghdGl0bGUgfHwgIWF1dGhvciB8fCAhaXNWYWxpZFllYXIoeWVhcikpIHtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcItCd0LXQstGW0YDQvdC+INC30LDQv9C+0LLQvdC10L3RliDQtNCw0L3RliDQutC90LjQs9C4XCIsIFwiZGFuZ2VyXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgcGFyc2VJbnQoeWVhcikpO1xuICAgIGJvb2tMaWJyYXJ5LmFkZChib29rKTtcbiAgICBTdG9yYWdlU2VydmljZS5zYXZlKFwiYm9va3NcIiwgYm9va0xpYnJhcnkuZ2V0QWxsKCkpO1xuICAgIHJlbmRlckJvb2tzKCk7XG59KTtcbihfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1mb3JtXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItaWRcIikudmFsdWU7XG4gICAgdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItbmFtZVwiKS52YWx1ZTtcbiAgICBpZiAoIWlzTnVtZXJpY0lkKGlkKSB8fCAhbmFtZSkge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwi0J3QtdCy0ZbRgNC90L4g0LfQsNC/0L7QstC90LXQvdGWINC00LDQvdGWINC60L7RgNC40YHRgtGD0LLQsNGH0LBcIiwgXCJkYW5nZXJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHVzZXIgPSBuZXcgVXNlcihwYXJzZUludChpZCksIG5hbWUpO1xuICAgIHVzZXJMaWJyYXJ5LmFkZCh1c2VyKTtcbiAgICBTdG9yYWdlU2VydmljZS5zYXZlKFwidXNlcnNcIiwgdXNlckxpYnJhcnkuZ2V0QWxsKCkpO1xuICAgIHJlbmRlclVzZXJzKCk7XG59KTtcbmZ1bmN0aW9uIGJvcnJvd0Jvb2sodXNlcklkLCBib29rVGl0bGUpIHtcbiAgICB2YXIgdXNlciA9IHVzZXJMaWJyYXJ5LmdldEFsbCgpLmZpbmQoZnVuY3Rpb24gKHUpIHsgcmV0dXJuIHUuaWQgPT09IHVzZXJJZDsgfSk7XG4gICAgdmFyIGJvb2sgPSBib29rTGlicmFyeS5maW5kQnlUaXRsZShib29rVGl0bGUpO1xuICAgIGlmICghdXNlciB8fCAhYm9vaykge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwi0JrQvtGA0LjRgdGC0YPQstCw0YfQsCDQsNCx0L4g0LrQvdC40LPRgyDQvdC1INC30L3QsNC50LTQtdC90L5cIiwgXCJkYW5nZXJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGJvb2suaXNCb3Jyb3dlZCkge1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwi0JrQvdC40LPQsCDQstC20LUg0L/QvtC30LjRh9C10L3QsFwiLCBcImRhbmdlclwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3VjY2VzcyA9IHVzZXIuYm9ycm93Qm9vayhib29rLnRpdGxlKTtcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcItCa0L7RgNC40YHRgtGD0LLQsNGHINC90LUg0LzQvtC20LUg0L/QvtC30LjRh9C40YLQuCDQsdGW0LvRjNGI0LUgMyDQutC90LjQs1wiLCBcImRhbmdlclwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBib29rLmJvcnJvdygpO1xuICAgIFN0b3JhZ2VTZXJ2aWNlLnNhdmUoXCJib29rc1wiLCBib29rTGlicmFyeS5nZXRBbGwoKSk7XG4gICAgU3RvcmFnZVNlcnZpY2Uuc2F2ZShcInVzZXJzXCIsIHVzZXJMaWJyYXJ5LmdldEFsbCgpKTtcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwi0JrQvdC40LPQsCDRg9GB0L/RltGI0L3QviDQv9C+0LfQuNGH0LXQvdCwXCIsIFwic3VjY2Vzc1wiKTtcbiAgICByZW5kZXJCb29rcygpO1xuICAgIHJlbmRlclVzZXJzKCk7XG59XG5mdW5jdGlvbiByZXR1cm5Cb29rKHVzZXJJZCwgYm9va1RpdGxlKSB7XG4gICAgdmFyIHVzZXIgPSB1c2VyTGlicmFyeS5nZXRBbGwoKS5maW5kKGZ1bmN0aW9uICh1KSB7IHJldHVybiB1LmlkID09PSB1c2VySWQ7IH0pO1xuICAgIHZhciBib29rID0gYm9va0xpYnJhcnkuZmluZEJ5VGl0bGUoYm9va1RpdGxlKTtcbiAgICBpZiAoIXVzZXIgfHwgIWJvb2spXG4gICAgICAgIHJldHVybjtcbiAgICB1c2VyLnJldHVybkJvb2soYm9vay50aXRsZSk7XG4gICAgYm9vay5yZXR1cm5Cb29rKCk7XG4gICAgU3RvcmFnZVNlcnZpY2Uuc2F2ZShcImJvb2tzXCIsIGJvb2tMaWJyYXJ5LmdldEFsbCgpKTtcbiAgICBTdG9yYWdlU2VydmljZS5zYXZlKFwidXNlcnNcIiwgdXNlckxpYnJhcnkuZ2V0QWxsKCkpO1xuICAgIHNob3dOb3RpZmljYXRpb24oXCLQmtC90LjQs9CwINC/0L7QstC10YDQvdC10L3QsFwiLCBcInN1Y2Nlc3NcIik7XG4gICAgcmVuZGVyQm9va3MoKTtcbiAgICByZW5kZXJVc2VycygpO1xufVxuZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKCkge1xuICAgIHZhciBib29rcyA9IFN0b3JhZ2VTZXJ2aWNlLmxvYWQoXCJib29rc1wiKTtcbiAgICB2YXIgdXNlcnMgPSBTdG9yYWdlU2VydmljZS5sb2FkKFwidXNlcnNcIik7XG4gICAgYm9va3MgPT09IG51bGwgfHwgYm9va3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJvb2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGJvb2tMaWJyYXJ5LmFkZChuZXcgQm9vayhiLnRpdGxlLCBiLmF1dGhvciwgYi55ZWFyLCBiLmlzQm9ycm93ZWQpKTsgfSk7XG4gICAgdXNlcnMgPT09IG51bGwgfHwgdXNlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJzLmZvckVhY2goZnVuY3Rpb24gKHUpIHsgcmV0dXJuIHVzZXJMaWJyYXJ5LmFkZChuZXcgVXNlcih1LmlkLCB1Lm5hbWUsIHUuYm9ycm93ZWRCb29rcykpOyB9KTtcbiAgICByZW5kZXJCb29rcygpO1xuICAgIHJlbmRlclVzZXJzKCk7XG59XG5sb2FkRnJvbVN0b3JhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==