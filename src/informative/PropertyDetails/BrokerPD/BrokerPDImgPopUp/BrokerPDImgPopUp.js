import React from 'react'
import Modal from 'react-bootstrap/Modal';

const BrokerPDImgPopUp = (props) => {
    const data = [
        {
            img: '/assets/informative/homeSlider-3.jpg'
        },
        {
            img: '/assets/informative/partnerbuilding.png'
        },
        {
            img: '/assets/informative/homeSlider-1.png'
        },
    ]
    return (
        <Modal
            {...props}
            size='lg' animation={true}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span>Property Photos</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <div className='row'>
                        {data.map((item, index) => {
                            return (
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='AllimageVideosPopUp-col_div'>
                                        <img src={item.img} className='AllimageVideosPopUp-img' />
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default BrokerPDImgPopUp