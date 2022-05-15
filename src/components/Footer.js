function Footer() {
    return ( 
        
        <footer className="container-fluid bg-dark text-light pb-4 text-center ">
            <div className=" mt-3 ">
                
                <nav className="footer-nav d-flex gap-5 justify-content-around mb-3">
                <a href="#!" className="text-decoration-none">Terms of Service</a>
                <a href="#!" className="text-decoration-none">About</a>
                <a href="#!" className="text-decoration-none">help</a>
                <a href="#!" className="text-decoration-none">Privacy</a>
                </nav>

                <small >
                @2022 <strong>Testym</strong>, All Rights Reserved
                </small>
            </div>
        </footer>
     );
}

export default Footer;