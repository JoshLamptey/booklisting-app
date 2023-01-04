//Book Class; represents a book
class Book{
    constructor(title,author,isbn){
        this.title= title
        this.author = author
        this.isbn= isbn
    }
}
//UI class; handle UI tasks
class Ui{
    static displayBooks(){
        const storedBooks = [


        ]
        const books = storedBooks
        books.forEach((book)=>Ui.addBookToList(book))
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list')
        
        const row = document.createElement('tr')

        row.innerHTML =`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row)
    }
    static deleteBook(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove()
        }
    }
    static showAlert(message,className){
        const div =document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        const container =document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div,form)

        // delete alert in 5 seconds
        setTimeout(()=>document.querySelector('.alert').remove(),4000)
    }
    static clearFields(){
        document.querySelector('#title').value =''
        document.querySelector('#author').value =''
        document.querySelector('#isbn').value =''

    }
}

//Store Class; handles storage

//Event; display books
document.addEventListener('DOMContentLoaded',Ui.displayBooks)

//Event ; add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    //Form Values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //Validate
    if(title === ''||author===''|| isbn===''){
        Ui.showAlert('Please fill all of the forms','fail')
    }else{
          //Instantiate new book
    const book = new Book(title,author,isbn)

    //add book to UI
    Ui.addBookToList(book)
    Ui.showAlert('Book added successfully','succeed')

    // Clear Fields after submission
    Ui.clearFields()
    }
})

// Event ; remove a book
document.querySelector('#book-list').addEventListener('click',(e)=>{
    Ui.deleteBook(e.target)
    Ui.showAlert('Book removed sucessfully','succeed')
})