import Cart from "../Cart/Cart"


function Home() {

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/4">

                </div>
                <div className=" lg:w-1/4 my-5 md:w-1/2 md:mx-auto lg:ml-5 lg:my-0  ">
                    <Cart></Cart>

                </div>
            </div>

        </>
    )
}

export default Home