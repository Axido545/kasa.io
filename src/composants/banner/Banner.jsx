import "./banner.css";

// eslint-disable-next-line react/prop-types
function Banner( {mytitle, mystyle}){

    return <div className='banner-style'style={mystyle} >
        <div className='overlay-img'>
                <p>{mytitle}</p>

        </div>


    </div>
}

export default Banner;