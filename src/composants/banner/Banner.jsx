import "./banner.css";

function Banner(props){
    const {lien} = props

    return <div  className={props.lien}>
        <div className="overlay-img">
        <p>Chez vous, partout et ailleurs</p>
        </div>


    </div>
}

export default Banner;