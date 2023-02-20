import Navbar from "../components/Navbar"
import { useState } from "react"
import Filter from "../components/Filter"
import Head from "next/head"
import axios from "axios"
import PaginatedItems from "../components/PaginatedItems"

export const getStaticProps = async () => {

	const api_uri = process.env.NEXT_PUBLIC_API_LOCAL || "http://localhost:8080"
	let res = await axios.get(`${api_uri}/books/descriptive`)
	let data = res.data

	return {
		props: {
			books: data,
		}
	}
}

const Search = ( {books} ) => {

	const [filteredBooks, setFilteredBooks] = useState([...books]);

	const handleAppliedFilters = (filters) => {
		let filteredList = [];
		for(const currFilter of filters){
			filteredList = [...filteredList, ...books.filter( book => book.subject === currFilter || book.type === currFilter)]
		}
		// Fix this so you don't have to make the conversion.
		filteredList = new Set(filteredList)
		setFilteredBooks(Array.from(filteredList))
	}

	const resetFilters = () => {
		setFilteredBooks(books)
	}

    return (
        <div>
            <Head>
                <title>VAIN | Search</title>
            </Head>
            <main>
                <Navbar/>
                <div className="w-11/12 m-auto mt-20 flex justify-between">
                    <Filter handleAppliedFilters={handleAppliedFilters} handleResetFilters={resetFilters}/>
					<PaginatedItems itemsPerPage={10} books={filteredBooks}/>
                </div>
            </main>
        </div>
    )
}

export default Search