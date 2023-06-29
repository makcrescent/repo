import Navbar from './../../../components/Navbar'
import React from 'react'
import Header from '../components/Header'
import MenuNavbar from '../components/MenuNavbar'
import Menu from '../components/Menu'

const RestaurantMenu = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <div className="bg-white w-[100%] rounded p-3 shadow">
                <MenuNavbar slug={params.slug} />
                <Menu />
            </div>

        </>

    )
}

export default RestaurantMenu