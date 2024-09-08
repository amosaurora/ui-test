import styles from './Button.module.css'

function Button(){

  const handleClick = (e) => e.target.textContent = "Ouch!";
  return(<button onClick={(e) => handleClick(e)} className={styles.button}>Click Me</button>);
}

export default Button