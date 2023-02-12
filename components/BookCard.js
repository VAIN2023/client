
import Link from 'next/link'

const BookCard = ({bookid, title, author, year}) => {

    return(
        <div className="p-8 flex border-b-2 border-b-slate-300 ">
            <input className="mr-[40px] border-b-2 border-blue-600 text-neutral-800" type="checkbox"/>
            <div className="block">
				<Link href={`/books/${bookid}`}>
                	<h1 className="text-l font-semibold mb-3 text-neutral-800">{title}</h1>
				</Link>
                <div className="text-gray-500 font-normal text-sm">
                    <p>Author: {author}</p>
                    <p>Published: {year}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard