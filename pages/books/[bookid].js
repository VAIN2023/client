import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Tag from '../../components/Tag'
import { TbEdit } from 'react-icons/tb'
import { IconContext } from 'react-icons'

const Book = () => {
	
	const router = useRouter()
	const {bookid} = router.query

	const [book, setBook] = useState({})

	const api_uri = "http://localhost:8080"

	useEffect( () => {
			if (bookid !== undefined){
				console.log(`${api_uri}/books/${bookid}`)
				axios.get(`${api_uri}/books/${bookid}`)
				.then( res => {
					setBook(res.data[0])
				})
				.catch ( err => {
					console.log(err)
				})
			}
		}
	,[bookid])
	
	const page = (
		<div className='w-11/12 m-auto md:w-8/12 lg:w-6/12 xl:w-5/12'>
			<div className='mt-10'>
				<div className='flex justify-between'>
					<div></div>
					<IconContext.Provider value={{className: "text-neutral-800"}}>
						<TbEdit className='text-2xl'/>
					</IconContext.Provider>
				</div>
				<h1 className='text-2xl font-bold text-neutral-800 mt-5 mb-2'>{book.title}</h1>
				<div className='flex my-5'>
					<Tag text={book.type}/>
					<Tag text={book.subject}/>
				</div>
				<div className='xs:block lg:flex lg:justify-between'>
					<div className='lg:w-1/2'>
						<h1 className='mb-5 text-lg font-bold text-neutral-800'>About</h1>
						<p className='italic text-md'>{book.description}</p>
					</div>
					<div className='border-l-2'>

					</div>
					<div>
						<h1 className='mb-5 text-lg font-bold text-neutral-800'>Information</h1>
						<p className='text-neutral-700 font-medium'>By: {book.nobilitytitle ? book.nobilitytitle : null} {book.fname} {book.lname}</p>
						<p>number of pages: {book.numberpages}</p>
						<p>number of volumes: {book.numbervolumes}</p>
					</div>
				</div>
			</div>
		</div>
	)

	return(
		<>
			<Head>
				<title>

				</title>
			</Head>
			<main>
				<Navbar/>
				{ bookid === undefined ? <p>Loading</p> : page }
			</main>
		</>
	)
}

export default Book