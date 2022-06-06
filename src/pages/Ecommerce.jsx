import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparkLineAreaData, ecomPieChartData } from '../assets/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
    return (
        <div className='mt-12'>
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-9 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-400">
                                Earnings
                            </p>
                            <p className="text-2xl">
                                Random Number Here
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            bgColor="blue"
                            text="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    {earningData.map((item) => (
                        <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-5 p-4 pt-9 rounded-2xl">
                            <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-samibold">
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-400">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-10 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">
                            REVENUE UPDATES
                        </p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center text-gray-600 hover:drop-shadow-xl gap-2">
                                <span>
                                    <GoPrimitiveDot />
                                </span>  
                                <span>
                                    Expense
                                </span>
                            </p>
                            <p className="flex items-center text-green-400 hover:drop-shadow-xl gap-2">
                                <span>
                                    <GoPrimitiveDot />
                                </span>  
                                <span>
                                    Budget
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div className="border-r-1 border-color m-4 pr-10">
                            <p>
                                <span className="text-3xl font-semibold">
                                    RANDOM DOLLAR HERE
                                </span>
                                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                    23%
                                </span>
                            </p>
                            <p>
                                Budget
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce