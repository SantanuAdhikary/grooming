import Card from "./Card"


let Home =()=>{
    return(

        <>
            <h1> home page</h1>


            <div className="container">

            <Card product={"mobile"} price={45000}/>
            <Card product={"laptop"} price={75000}/>
            <Card  product={"ipad"} price={55000}/>
           

            </div>
        </>
    )
}

export default Home