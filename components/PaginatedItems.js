import ReactPaginate from 'react-paginate'
import Results from './Results';
import { useState } from 'react';

const PaginatedItems= ({ itemsPerPage, books }) => {
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);
  
	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = books.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(books.length / itemsPerPage);
  
	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
	  const newOffset = (event.selected * itemsPerPage) % books.length;
	  console.log(
		`User requested page number ${event.selected}, which is offset ${newOffset}`
	  );
	  setItemOffset(newOffset);
	};
  
	return (
	  <div className='w-4/6 pb-10 bg-white rounded-md drop-shadow-md border border-slate-300 mb-10'>
		<Results books={currentItems} total={books.length} />
		<ReactPaginate
			breakLabel="..."
			nextLabel="next >"
			onPageChange={handlePageClick}
			pageRangeDisplayed={2}
			pageCount={pageCount}
			previousLabel="< previous"
			renderOnZeroPageCount={null}
			containerClassName='w-2/5 flex m-auto justify-between mt-10 text-green-900 font-medium'
			pageClassName='px-2'
			activeClassName='px-2 border border-green-900'
			previousClassName=''
			nextClassName=''
		/>
	  </div>
	);
  }

  export default PaginatedItems