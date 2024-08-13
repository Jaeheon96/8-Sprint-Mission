import Image from "next/image"
import { ChangeEvent, useState } from "react"
import ArticlePost from "@/DTO/articlePost"
import styles from "@/styles/Addboard.module.css"

const INITIAL_FORM_DATA: ArticlePost = {
  title: '',
  content: '',
  image: '',
}

export default function Addboard() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  
  const isButtonDisabled = (formData.title.length <= 0) || (formData.content.length <= 0)

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value
    }))
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleChange(e.target.name, e.target.value);
  }

  return (
    <main className={styles.addboardMain}>
      <div className={styles.addboardHead}>
        <h1 className={styles.addboardHeadTitle}>게시글 쓰기</h1>
        <button className={styles.addboardButton} disabled={isButtonDisabled}>등록</button>
      </div>
      <form className={styles.addboardForm}>
        <label className={styles.addboardFormLabel}>
          <h2 className={styles.addboardFormLabelText}>*제목</h2>
          <input name="title" value={formData.title} className={styles.addboardFormInput} placeholder="제목을 입력해주세요" onChange={handleTextChange} />
        </label>
        <label className={styles.addboardFormLabel}>
          <h2 className={styles.addboardFormLabelText}>*내용</h2>
          <textarea name="content" value={formData.content} className={styles.addboardFormTextarea} placeholder="내용을 입력해주세요" onChange={handleTextChange} />
        </label>
        <div className={styles.addboardFormLabel}>
          <h2 className={styles.addboardFormLabelText}>이미지</h2>
          <div className={styles.addboardFormImagesContainer}>
            <label>
              <input type="file" className={styles.addboardFormFileInput} />
              <div className={styles.addboardFormFileInputPlaceholder}>
                <div className={styles.plusIconContainer}>
                  <Image fill src="/images/ic_plus.svg" alt="추가" />
                </div>
                <span>이미지 등록</span>
              </div>
            </label>
          </div>
        </div>
      </form>
    </main>
  )
}