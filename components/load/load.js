import Image from "next/image";
import styles from '../load/load.module.css'

const Load=()=>{
    return(<div className={styles.loa}>
            <h1 className={styles.animate}>
            <div><Image src={"/load2.gif"} width='300' height='300' alt="gif loadergi" className={styles.img}/></div>
               <div>Next Movies . . .</div></h1>
    </div>
    )
};export default Load