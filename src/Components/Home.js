import React from 'react'

const Home=(props)=>{
    return (
        <div>
            <h1 className='text-center text-capitalize text-danger my-4'>my notes</h1>
            <div className='row'>

                <h3 className='col-lg-6 text-center text-info'>
                    description 1
                </h3>
                <h3 className='col-lg-6 text-center text-info'>
                    description 2
                </h3>

            </div>
        </div>
    )
}
export default Home