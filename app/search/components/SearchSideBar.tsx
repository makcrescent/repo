import { Cuisine, PRICE } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

const SearchSideBar = ({ locations, cuisines, searchParams }: {
    locations: Location[],
    cuisines: Cuisine[],
    searchParams: { city?: string, cuisine?: string, price?: PRICE }
}) => {
    const prices = [{
        price: PRICE.CHEAP,
        label: "$",
        className: "border w-full text-reg text-center font-light rounded-1 p-2"
    },
    {
        price: PRICE.REGULAR,
        label: "$$",
        className: "border w-full text-reg text-center font-light  p-2"
    },
    {
        price: PRICE.EXPENSIVE,
        label: "$$$",
        className: "border w-full text-reg text-center font-light rounded-r p-2"
    }]
    return (
        <>
            <div className="w-1/5 mr-4">
                <div className="border-b pb-4 flex flex-col">
                    <h1 className="mb-2">Region</h1>
                    {locations.map(location => (
                        <Link href={{
                            pathname: '/search',
                            query: {
                                ...searchParams,
                                city: location.name
                            }
                        }} className="font-light text-reg capitalize" key={location.id}>{location.name}</Link>
                    ))}
                </div>
                <div className="border-b pb-4 mt-3">
                    <h1 className="mb-2">Cuisine</h1>
                    {cuisines.map(cuisine => (
                        <Link key={cuisine.id} href={{
                            pathname: '/search',
                            query: {
                                ...searchParams,
                                cuisine: cuisine.name
                            }
                        }}>
                            <p className="font-light text-reg">{cuisine.name}</p>
                        </Link>
                    ))}


                </div>
                <div className="mt-3 pb-4">
                    <h1 className="mb-2">Price</h1>
                    <div className="flex">
                        {prices.map(price => (
                            <Link key={price.price} href={{
                                pathname: '/search',
                                query: {
                                    ...searchParams,
                                    price: price.price,
                                }
                            }}
                                className={price.className}>
                                {price.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchSideBar