import Navbar from './../../components/Navbar'
import React from 'react'
import Header from './components/Header'
import Title from './components/Title'
import Rating from './components/Rating'
import Description from './components/Description'
import MenuNavbar from './components/MenuNavbar'
import Images from './components/Images'
import Reviews from './components/Reviews'
import ReservationCard from './components/ReservationCard'
import { PrismaClient, Review } from '@prisma/client'
import { notFound } from 'next/navigation'
const prisma = new PrismaClient()
interface Restaurant {
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
    reviews: Review[];
    open_time: string;
    close_time: string;
}
const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true,
            reviews: true,
            open_time: true,
            close_time: true,
        }
    })
    if (!restaurant) {
        notFound();
    }
    return restaurant;
}
const RestaurantDetailsPage = async ({ params, }: { params: { slug: string } }) => {
    const restaurant = await fetchRestaurantBySlug(params.slug)
    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <MenuNavbar slug={params.slug} />
                <Title title={restaurant.name} />
                <Rating />
                <Description />
                <Images />
                <Reviews />
            </div>
            <div className="w-[27%] relative text-reg">
                <ReservationCard openTime={restaurant.open_time}
                    closeTime={restaurant.close_time} slug={restaurant.slug} />
            </div>

        </>

    )
}

export default RestaurantDetailsPage