import '../Assets/Css/Page404.css';

function Page404() {

    return (

        <div className="container404">
            <h1>404 Error Page</h1>
            <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div className="link-container">
                <a target="_blank" href="#" className="more-link">Visit the original article</a>
            </div>

        </div>
    )
}

export default Page404;