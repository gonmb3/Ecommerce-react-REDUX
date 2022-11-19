import "../styles/home.css"
import Products from "./Products"


const Home = () => {
  return (
    <>
    <div className="container home">
        <div className="hero">
            <div className="">
                <div className="row-home">
                 
                    <div className="content">
                        <h3 className="title">New Season Arrivals</h3>
                        <p>Check out all the trands</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    <Products/>
    </>
    
  )
}

export default Home