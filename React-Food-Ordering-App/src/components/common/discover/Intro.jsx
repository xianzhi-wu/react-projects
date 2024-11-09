import Header from "../../layouts/Header";
import introImage from '../../../assets/images/intro.png';

export default function Intro() {
  return (
    <>
      <Header title="About Us" />
      <div id="intro-bsf">
        <img src={introImage}/>
      </div>
    </>
  );
}