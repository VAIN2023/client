

const Footer = () => {
    return(
        <div className='h-[26rem] bg-stone-200 block text-neutral-800'>
            <div className="w-4/5 m-auto">
                <h1 className='font-didot text-6xl pt-10'>VAIN</h1>
                <div className='grid md:grid-cols-4 grid-cols-3 mt-5'>
                    <div className="col-start-1">
                        <h1 className="font-semibold mb-5">Quick Links</h1>
                        <p className="mb-5">About Us</p>
                        <p className="mb-5">Contact Us</p>
                        <p className="mb-5">Login</p>
                        <p className="mb-5">Sign Up</p>
                    </div>
                    <div className="col-start-2">
                        <h1 className="font-semibold mb-5">Services</h1>
                        <p className="mb-5">By Type</p>
                        <p className="mb-5">By Subject</p>
                        <p className="mb-5">Collections</p>
                        <p className="mb-5">Publishers</p>
                        <p className="mb-5">Advanced Search</p>
                    </div>
                    <div className="col-start-3">
                        <h1 className="font-semibold mb-5">Support</h1>
                        <p className="mb-5">Help Center</p>
                        <p className="mb-5">Accessability</p>
                        <p className="mb-5">Cookies</p>
                        <p className="mb-5">Term & Policy</p>
                        <p className="mb-5">FAQ</p>
                    </div>
                    <div className="col-start-4 hidden lg:block">
                        <h1 className="font-semibold mb-5">Follow Us</h1>
                        <p className="mb-5">VAIN is the Victorian Autobiography Information network, designed to provide a database of material about autobiographies for Victorian literature scholars who want to include life writing in their scholarship.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer