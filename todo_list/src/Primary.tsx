function Primary() {
    // Price
    const Vip1 = '$15.99/month'
    const Vip1Description = 'Experience the service with no ads and automatic storage on cloud data'
    const Vip2 = '$13.99/month'
    const Vip2Description = '10GB cloud storage, 3 months for only ${Vip2} per month'
    const Vip3 = '$10/month'
    const Vip3Description = 'Buy 10 months get 2 more months, 1-year premium offer for only ${Vip3} per month'
    
    // Premium Prices
    // const PremiumPrices = () => {
    //     return (
    //         <div>

    //         </div>
    //     )
    // }

    return ( 
        <div className="h-dvh inline-flex justify-evenly items-center">
            <div className=" w-1/5 h-3/6 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-between">
                <p>Professional</p>
                <p>{Vip1}</p>
                <p>{Vip1Description}</p>
            </div>
            <div className="w-1/5 h-3/6 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-between">
                <p>Professional</p>
                <p>{Vip2}</p>
                <p>{Vip2Description}</p>
            </div>
            <div className="w-1/5 h-3/6 bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-between">
                <p>Professional</p>
                <p>{Vip3}</p>
                <p>{Vip3Description}</p>
            </div>
        </div>
     );
}

export default Primary;