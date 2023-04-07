import React from 'react'

function Cart() {
  return (
    <div className="w-full z-0 h-screen">
        <div className='grid w-full py-36 px-10 md:py-40'>
            <div className='flex flex-col gap-10 items-center justify-center'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-black text-6xl font-semibold tracking-wider'>Cart</h1>
                <h1 className='text-black text-3xl font-semibold tracking-wider'>Your Items</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cart