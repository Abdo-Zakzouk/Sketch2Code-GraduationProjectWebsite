import "./mainStyle.css";
export default function main() {
    return(
        <>
        <div className="container"> 
            <div className="left-container">
                <h1>Git the code of your project in no time ..!</h1>
                <a href="index.html">Get started</a>
            </div>
            <div className="right-container">
                <div>
                <img src={require("./sketch-img.jpg") } alt="sketch-img" />
                <a href="index.html">Upload image</a>
                </div>
                <div>
                <img src={require("./code-img.jpg") } alt="code-img" />
                <a href="index.html">Download image</a>
                </div>

                
            </div>
        </div>
        </>
    )
    
}