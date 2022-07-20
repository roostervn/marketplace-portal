import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type Props = {};

const itemsLength = [
  {
    id: "card-item8",
    img: "assets/images/box-item/card-item8.jpg",
    alt: "Image",
  },
  {
    id: "image-box-10.jpg",
    img: "assets/images/box-item/image-box-10.jpg",
    alt: "Image",
  },
  {
    id: "image-box-11",
    img: "assets/images/box-item/image-box-11.jpg",
    alt: "Image",
  },
  {
    id: "image-box-21",
    img: "assets/images/box-item/image-box-21.jpg",
    alt: "Image",
  },
];

const items = itemsLength.map((item, index) => {
  const style = { width: 350 };
  return (
    <div className="item" style={style} key={`${item.id}`}>
      <img src={`${item.img}`} alt={`${item.alt}`} />
    </div>
  );
});

export default function ComponentGridCardBasic({}: Props) {
  return <AliceCarousel autoWidth infinite mouseTracking items={items} />;
}
