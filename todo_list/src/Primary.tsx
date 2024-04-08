function Primary() {
    
    return ( 
        <div className="h-dvh flex flex-col items-center justify-evenly">
        <div>
            <div className=" text-center flex flex-col">
                <p className=" text-blue-600">Pricing</p>
                <h2 className=" text-3xl">Pricing plans for teams of all sizes</h2>
            </div>
            <div>
                <p className=" text-gray-800">Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
            </div>
        </div>
        <div>
            <span>Selection</span>
        </div>
        <div> 
            <div>
                <h3>Freelancer</h3>
            </div>
            <div>
                <h3>Startup</h3>
                <p>Most popular</p>
            </div>
            <div>
                <h3>Enterprise</h3>
            </div>
        </div>
        </div>
     );
}

export default Primary;