import React from 'react'

function Card(props) {
    return (
        <div className="card p-4 m-4 container mx-auto mb-3" style={{width:'unset',maxWidth:713+'px'}}>
            <div className="row g-0">
                <div className="col-md-4 my-auto">
                    <img classNameName="card-img-top" src={"https://avatars.dicebear.com/v2/avataaars/" + props.name + ".svg?options[mood][]=happy"} alt="Card image cap" />

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <p className="card-text"><span className='fs'>Phone: </span>{props.phone}</p>
                        <p className="card-text"><span className='fs'>Company: </span>{props.company}</p>
                        <p className="card-text"><span className='fs'>Website: </span>{props.website}</p>
                        <p className="card-text"><span className='fs'>Address: </span>{props.address}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
