import Product from "../product/Product";
import "./Main.css";
import desktop from "../../assets/images/top-desktop-air.png";
import tablet from "../../assets/images/top-tablet-air.png";
import mobile from "../../assets/images/top-mobile-air.png";
import desktopCenter from "../../assets/images/center-air-desktop.png";
import tabletCenter from "../../assets/images/center-air-tablet.png";
import mobileCenter from "../../assets/images/center-air-mobile.png";
import desktopBottom from "../../assets/images/bottom-air-desktop.png";
import tabletBottom from "../../assets/images/bottom-air-tablet.png";
import mobileBottom from "../../assets/images/bottom-air-mobile.png";
import BestAudioGear from "../best-audio-gear/BestAudioGear";
import OtherPageReference from "../other-page-reference/OtherPageReference";
import earphoneDesk from '../../assets/images/earphone-desk.png'
import speakerDesk from '../../assets/images/speaker-desk.png'
import headphoneDesk from '../../assets/images/headphone-desk.png'


export default function Main() {
  const productItems = [
    {
      title: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      isNew: true,
      img: { desktop, tablet, mobile },
    },
    {
      title: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      isNew: false,
      img: {
        desktop: desktopCenter,
        tablet: tabletCenter,
        mobile: mobileCenter,
      },
    },
    {
      title: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      isNew: false,
      img: {
        desktop: desktopBottom,
        tablet: tabletBottom,
        mobile: mobileBottom,
      },
    },
  ];

  const productOther=[
    {
      img:headphoneDesk,
      title:"HEADPHONES"
    },
    {
      img:speakerDesk,
      title:"SPEAKERS"
    },
    {
      img:earphoneDesk,
      title:"EARPHONES"
    }
  ]

  return (
    <main className="main">
      {productItems.map((prduct, index) => {
        return <Product key={index} {...prduct}
        special={index===1} />;
      })}
      <div className="card-center container">
      {productOther.map((prod,ind)=>{
        return <OtherPageReference key={ind} {...prod}/>
      })
      }
      </div>
     
      
      <BestAudioGear/>
    </main>
  );
}
