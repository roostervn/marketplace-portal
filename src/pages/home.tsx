import ComponentGridCardBasic from "../components/gridCardBasic";
import LayoutBasic from "../layouts/basic";

export default function Home() {
  return (
    <LayoutBasic>
        <section className="flat-title-page style2">
                <img className="bgr-gradient gradient1" src="assets/images/backgroup-secsion/bg-gradient1.png" alt=""/>
                <img className="bgr-gradient gradient2" src="assets/images/backgroup-secsion/bg-gradient2.png" alt=""/>
                <img className="bgr-gradient gradient3" src="assets/images/backgroup-secsion/bg-gradient3.png" alt=""/>
                <div className="shape item-w-16"></div>
                <div className="shape item-w-22"></div>
                <div className="shape item-w-32"></div>
                <div className="shape item-w-48"></div>
                <div className="shape style2 item-w-51"></div>
                <div className="shape style2 item-w-51 position2"></div>
                <div className="shape item-w-68"></div>
                <div className="overlay"></div>
                <div className="swiper-container mainslider home auctions">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="slider-item">	
                                <div className="themesflat-container ">
                                    <div className="wrap-heading flat-slider flex">
                                        <div className="content">
                                            <h2 className="heading">Discover, find,
                                            </h2>	
                                            <h1 className="heading mb-style"><span className="tf-text s1">Chicken SIXS NFTs</span>                                          
                                            </h1>
                                            <p className="sub-heading mg-t-29 mg-bt-44">Marketplace for chicken character cllections non fungible token NFTs
                                            </p>
                                            <div className="flat-bt-slider flex style2">
                                                <a href="explore-1.html" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                                </span></a>
                                                <a href="create-item.html" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                                </span></a>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img className="img-bg" src="assets/images/logo/logo.png" alt="Image"/>
                                            <img src="assets/images/box-item/imgslider2.png" alt="Image"/>
                                        </div>
                                    </div>
                                    
                                </div>					                           
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slider-item">	
                                <div className="themesflat-container">
                                    <div className="wrap-heading flat-slider text-center two">
                                        <h2 className="heading">Discover, and collect
                                        </h2>	
                                        <h1 className="heading"><span className="tf-text s1">extraordinary</span>
                                            <span>Monster NFTs</span>
                                        </h1>
                                        <p className="sub-heading mg-t-29 mg-bt-50">Marketplace for monster character cllections non fungible token NFTs
                                        </p>
                                        <div className="flat-bt-slider flex">
                                            <a href="explore-1.html" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                            </span></a>
                                            <a href="create-item.html" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                            </span></a>
                                        </div>
                                    </div>
                                </div>					                           
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="slider-item">	
                                <div className="themesflat-container flex">
                                    <div className="image three">
                                        <img src="assets/images/box-item/imgslider-3.png" alt="Image"/>
                                        <img className="img-bg" src="assets/images/backgroup-secsion/img-bg-sliderhome3.png" alt="Image"/>
                                    </div>
                                    <div className="wrap-heading flat-slider h3 three">
                                        <h2 className="heading">Discover, and collect
                                        </h2>	
                                        <h2 className="heading">extraordinary</h2>
                                        <h2 className="heading h3"><span className="fill">Monster </span>NFTs</h2>
                                        <p className="sub-heading mt-29 mb-35">Marketplace for monster character cllections non fungible token NFTs
                                        </p>
                                        <div className="flat-bt-slider flex style2">
                                            <a href="explore-1.html" className="sc-button header-slider style style-1 rocket fl-button pri-1"><span>Explore
                                            </span></a>
                                            <a href="create-item.html" className="sc-button header-slider style style-1 note fl-button pri-1"><span>Create
                                            </span></a>
                                        </div>
                                    </div>
                                </div>					                           
                            </div>
                        </div>
                    </div>     
                    <div className="swiper-pagination"></div>               
                </div>    
                <div className="swiper-button-next btn-slide-next active"></div>
                <div className="swiper-button-prev btn-slide-prev"></div>                   
            </section>
      <main style={{ padding: "1rem 0" }}>
      
        <section className="tf-section live-auctions style3 pad-b-54 no-pt-mb mobie-pb-70">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions mg-bt-21">
                                <h2 className="tf-title pad-l-7">
                                    Today's Picks</h2>
                                <a href="explore-3.html" className="exp style2">EXPLORE MORE</a>
                            </div>
                        </div>
                  
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken1.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">Chicken Pet One</a></h5>
                                    <div className="tags">bts</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product coming_soon">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken2.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                    <div className="coming-soon">coming soon</div>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Space babe - Night 2/25”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-2.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 10.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken3.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5><a href="item-details.html">"CyberPrimal 042 LAN”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-4.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken2.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5><a href="item-details.html">"Crypto Egg Stamp #5”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-3.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken1.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Travel Monkey Club #45”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-12.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Ralph Garraway</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken2.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5><a href="item-details.html">"Sir. Lion Swag #371"</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Mason Woodward</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken1.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Living Vase 01 by Lanz...</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-3.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Tyler Covington</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/item-chicken/chicken2.png" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Travel Monkey Club #45”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-12.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Ralph Garraway</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/card-item-3.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"The RenaiXance Rising the sun  "</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product coming_soon">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/card-item-4.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                    <div className="coming-soon">coming soon</div>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Space babe - Night 2/25”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-2.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/card-item-2.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5><a href="item-details.html">"CyberPrimal 042 LAN”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-4.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/card-item-7.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5><a href="item-details.html">"Crypto Egg Stamp #5”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-3.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">SalvadorDali</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/card-item8.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Travel Monkey Club #45”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-12.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Ralph Garraway</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/card-item-9.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5><a href="item-details.html">"Sir. Lion Swag #371"</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Mason Woodward</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/image-box-11.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Living Vase 01 by Lanz...</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-3.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Tyler Covington</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="sc-card-product">
                                <div className="card-media">
                                    <a href="item-details.html"><img src="assets/images/box-item/card-item8.jpg" alt="Image"/></a>
                                    <button className="wishlist-button heart"><span className="number-like"> 100</span></button>
                                </div>
                                <div className="card-title">
                                    <h5 className="style2"><a href="item-details.html">"Travel Monkey Club #45”</a></h5>
                                    <div className="tags">bsc</div>
                                </div>
                                <div className="meta-info">
                                    <div className="author">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avt-12.jpg" alt="Image"/>
                                        </div>
                                        <div className="info">
                                            <span>Owned By</span>
                                            <h6> <a href="author02.html">Ralph Garraway</a> </h6>
                                        </div>
                                    </div>
                                    <div className="price">
                                        <span>Current Bid</span>
                                        <h5> 4.89 AURA</h5>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                    <a href="activity1.html" className="view-history reload">View History</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 wrap-inner load-more text-center mg-t-4">
                            <a href="#" id="loadmore" className="sc-button loadmore fl-button pri-3"><span>Load More</span></a>
                        </div>
                    </div>
                </div>
            </section>
      </main>
    </LayoutBasic>
  );
}
