// import Footer from '../footer/Footer';
// import Header from '../header/Header';
import PartnersDetail from './PartnersDetail/PartnersDetail';
import PartnersDetailSidebar from './PartnersDetail/PartnersDetailSidebar/PartnersDetailSidebar';
export default function PartnersDetailsMain() {
    return (
        <>
            {/* <Header /> */}
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <PartnersDetail />
                        </div>
                        <div className='col-lg-4'>
                            <PartnersDetailSidebar />
                        </div>
                    </div>    
                </div>
            {/* <Footer /> */}
        </>
    );
}