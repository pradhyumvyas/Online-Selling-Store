import React from 'react'

const Base = ({
    title="My Title",
    description = "My Description",
    className="bg-dark text-white p-4",
    children
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4"> {title}  </h2>
                    <p className="lead"> {description} </p>
                </div>

                <div className={className}> {children}</div>

            </div>
            <footer className="footer bg-success mt-auto py-3">
                <div className="container-fluid bg-sucess text-white text-center py-3">
                    <h4>If you got any questions, react me out ar Email</h4>
                    <button type="" className="btn btn-warning btn-lg"> Contact Us</button>
                    <div className="container">
                        <span className="text-info">
                            An Amazing E-Commerce website
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Base;