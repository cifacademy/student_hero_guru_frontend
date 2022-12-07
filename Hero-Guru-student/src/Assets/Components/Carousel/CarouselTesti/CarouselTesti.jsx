import './CarouselTesti.css';
export const CarouselTesti = () =>{
    return(
        <>            
            <div className="container_section5_ladingpage">
                <h5 className='title_section5_landingpage'>
                    Kata Mereka Setelah Menggunakan Hero Guru
                </h5>

                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row col-md-6 m-auto">
                        <div className="col-md-6 col-xs-12">
                            <div className='d-flex justify-content-center'>
                                <img src="/bxs_image.png" alt="gambar"/>
                            </div>                    
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <p>Iqbal Squerpant</p>
                            <small>Pelajar</small>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente aspernatur labore? </p>
                        </div>
                        </div>
                    </div>    
                    <div class="carousel-item">
                        <div className="row col-md-6 m-auto">
                        <div className="col-md-6 col-xs-12">
                            <div className='d-flex justify-content-center'>
                                <img src="/bxs_image.png" alt="gambar"/>
                            </div>                    
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <p>ady Squerpant</p>
                            <small>Pelajar</small>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente aspernatur labore? </p>
                        </div>
                        </div>
                    </div>                    
                </div>
                <button id="carousel-testi-prev" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button id="carousel-testi-next" class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>               

            </div>        
        </>
    )
}

