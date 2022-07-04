export default function Basic() {
  return (
    <section className="flat-title-page style2">
      <img
        className="bgr-gradient gradient1"
        src="assets/images/backgroup-secsion/bg-gradient1.png"
        alt=""
      />
      <img
        className="bgr-gradient gradient2"
        src="assets/images/backgroup-secsion/bg-gradient2.png"
        alt=""
      />
      <img
        className="bgr-gradient gradient3"
        src="assets/images/backgroup-secsion/bg-gradient3.png"
        alt=""
      />
      <div className="shape item-w-16" />
      <div className="shape item-w-22" />
      <div className="shape item-w-32" />
      <div className="shape item-w-48" />
      <div className="shape style2 item-w-51" />
      <div className="shape style2 item-w-51 position2" />
      <div className="shape item-w-68" />
      <div className="overlay" />
      <div className="swiper-container mainslider home auctions">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider-item">
              <div className="themesflat-container ">
                <div className="wrap-heading flat-slider flex">
                  <div className="content">
                    <h2 className="heading">Discover, find,</h2>
                    <h1 className="heading mb-style">
                      <span className="tf-text s1">Sell extraordinary</span>
                    </h1>
                    <h1 className="heading">Monster NFTs</h1>
                    <p className="sub-heading mg-t-29 mg-bt-44">
                      Marketplace for monster character cllections non fungible
                      token NFTs
                    </p>
                    <div className="flat-bt-slider flex style2">
                      <a
                        href="explore-1.html"
                        className="sc-button header-slider style style-1 rocket fl-button pri-1"
                      >
                        <span>Explore</span>
                      </a>
                      <a
                        href="create-item.html"
                        className="sc-button header-slider style style-1 note fl-button pri-1"
                      >
                        <span>Create</span>
                      </a>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      className="img-bg"
                      src="assets/images/backgroup-secsion/img-bg-sliderhome2.png"
                      alt="Image"
                    />
                    <img
                      src="assets/images/box-item/imgslider2.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* item*/}
          </div>
          <div className="swiper-slide">
            <div className="slider-item">
              <div className="themesflat-container">
                <div className="wrap-heading flat-slider text-center two">
                  <h2 className="heading">Discover, and collect</h2>
                  <h1 className="heading">
                    <span className="tf-text s1">extraordinary</span>
                    <span>Monster NFTs</span>
                  </h1>
                  <p className="sub-heading mg-t-29 mg-bt-50">
                    Marketplace for monster character cllections non fungible
                    token NFTs
                  </p>
                  <div className="flat-bt-slider flex">
                    <a
                      href="explore-1.html"
                      className="sc-button header-slider style style-1 rocket fl-button pri-1"
                    >
                      <span>Explore</span>
                    </a>
                    <a
                      href="create-item.html"
                      className="sc-button header-slider style style-1 note fl-button pri-1"
                    >
                      <span>Create</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* item*/}
          </div>
          <div className="swiper-slide">
            <div className="slider-item">
              <div className="themesflat-container flex">
                <div className="image three">
                  <img
                    src="assets/images/box-item/imgslider-3.png"
                    alt="Image"
                  />
                  <img
                    className="img-bg"
                    src="assets/images/backgroup-secsion/img-bg-sliderhome3.png"
                    alt="Image"
                  />
                </div>
                <div className="wrap-heading flat-slider h3 three">
                  <h2 className="heading">Discover, and collect</h2>
                  <h2 className="heading">extraordinary</h2>
                  <h2 className="heading h3">
                    <span className="fill">Monster </span>NFTs
                  </h2>
                  <p className="sub-heading mt-29 mb-35">
                    Marketplace for monster character cllections non fungible
                    token NFTs
                  </p>
                  <div className="flat-bt-slider flex style2">
                    <a
                      href="explore-1.html"
                      className="sc-button header-slider style style-1 rocket fl-button pri-1"
                    >
                      <span>Explore</span>
                    </a>
                    <a
                      href="create-item.html"
                      className="sc-button header-slider style style-1 note fl-button pri-1"
                    >
                      <span>Create</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* item*/}
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="swiper-button-next btn-slide-next active" />
      <div className="swiper-button-prev btn-slide-prev" />
    </section>
  );
}
