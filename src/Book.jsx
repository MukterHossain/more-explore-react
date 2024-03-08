import './book.css'
export default function Book({book}){
    const {name, Price} = book;
    return (
        
        <div className='book'>
            <h1>Book Name: {name}</h1>
            <p>Price: {Price}</p>
        </div>
    )
}