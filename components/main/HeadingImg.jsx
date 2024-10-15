import { assets } from "../../assets/assets";
import styles from "./Navbar.module.css"
const Navbar = () =>{

  return(
    <>
    <img src={assets.user_icon} alt="" className={styles.nav}/>
    </>
  )
}
export default Navbar;