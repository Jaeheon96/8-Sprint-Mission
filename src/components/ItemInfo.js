import styles from "./ItemInfo.module.css"
import { ReactComponent as HeartIcon } from '../assets/ic_heart.svg';

function ItemInfo({ item }) {

    return (
        <section className={styles.itemInfo}>
            <img src={item.images[0]} alt={item.name} className={styles.itemImage} />
            <div className={styles.itemContents}>
                <div className={styles.itemHeader}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>{item.price.toLocaleString()}원</span>
                </div>
                <div className={styles.itemBody}>
                    <div>
                        <span className={styles.itemBodyCategory}>상품 소개</span>
                        <div className={styles.itemBodyDescription}>{item.description}</div>
                    </div>
                    <div>
                        <span className={styles.itemBodyCategory}>상품 태그</span>
                        <ul className={styles.itemBodyTagList}>
                            {item.tags.map((tag, index) => {
                                return (<li key={index} className={styles.itemBodyTag}>#{tag}</li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <button className={styles.favoriteButton}>
                        <HeartIcon className={styles.heartIcon} />
                        {item.favoriteCount}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ItemInfo;