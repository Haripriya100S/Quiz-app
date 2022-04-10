function Footer() {
    return ( 
        <div className="container-fluid text-light bg-dark p-3 ">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>This memes Inc</h4>
                    <ul className="list-unstyled">
                        <li>342-420-6969</li>
                        <li>India</li>
                        <li>123 Street South North</li>
                    </ul>
                </div>

                {/* Column2 */}
                <div className="col">
                    <h4>This memes Inc</h4>
                    <ul className="list-unstyled">
                        <li>342-420-6969</li>
                        <li>India</li>
                        <li>123 Street South North</li>
                    </ul>
                </div>

                {/* Column3 */}
                <div className="col">
                    <h4>This memes Inc</h4>
                    <ul className="list-unstyled">
                        <li>342-420-6969</li>
                        <li>India</li>
                        <li>123 Street South North</li>
                    </ul>
                </div>
            </div>

            <div className="row text-center">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} This memes Inc | All rights reserved | Pvt.limited
                </p>
            </div>
        </div>
     );
}

export default Footer;