import footherstyle from "../sass/foother.module.scss";

const Footer = () => {
  return (
    <footer className={footherstyle["footer"]}>
     <p className={footherstyle.text}>Happy Coding  😎 { new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
