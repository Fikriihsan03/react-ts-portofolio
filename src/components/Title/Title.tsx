import styles from "./Title.module.css"

interface IProps {
    text: string
}

const Title = ({ text }: IProps) => {
    return (
        <h1 className={styles.textHeader}>{text}</h1>
    );
}

export default Title;