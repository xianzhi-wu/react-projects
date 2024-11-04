export default function Footer() {
  return (
    <nav id="home-menu" className="box-layout fixed-btm">
        <a href="${basePath}/products/index" className="box-col active" id="home">主页</a>
        <a href="${basePath}/discover/discoverIndex" className="box-col" id="discover">发现</a>
        <a href="${basePath}/user/userCenter" className="box-col" id="me">我的</a>
    </nav>
  );
}