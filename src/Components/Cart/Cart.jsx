

function Cart({course, price, creditHours, remaining}) {


    return (
        <>
            <div className="p-5 bg-white rounded-lg">
                <div>
                    <p className="text-blue-600 text-xl font-semibold">Credit Hour Remaining {remaining} hr</p>
                    <hr class="mt-2  h-[2px] bg-gray-400 opacity-40 dark:opacity-80" />
                </div>
                <div>
                    <h1 className="text-3xl text-[#1C1B1B] font-semibold my-3">Course Name</h1>
                    <ol className="list-decimal  list-inside text-base font-normal">
                        {course.map((element) => (
                            <li key={element.course_id}> {element.title} </li>
                            ))

                        }
                    </ol>
                    <hr class="mt-2  h-[2px] bg-gray-400 opacity-40 dark:opacity-80" />
                </div>
                <div>
                    <p className="mt-2 font-medium">Total Credit Hour : {creditHours}</p>
                    <hr class="mt-2  h-[2px] bg-gray-400 opacity-40 dark:opacity-80" />
                </div>
                <div>
                    <p className="mt-2 font-medium">Total Price : {price} USD</p>
                    <hr class="mt-2  h-[2px] bg-gray-400 opacity-40 dark:opacity-80" />
                </div>
            </div>

        </>
    )
}

export default Cart