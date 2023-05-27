import React, { useState } from 'react';
import './styles.scss';

interface Announcement {
  prevTitle?: string;
  prevPost?: string;
}

export const AddAnnouncementPage = (ann: Announcement) => {
  const [formData, setFormData] = useState({
    title: ann.prevTitle ? ann.prevTitle : '',
    post: ann.prevPost ? ann.prevPost : '',
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <main>
      <div className="addann__container">
        <div className="addann">
          <h1 className="h1 colorBlue">Объявления</h1>
          <form action="submit" className="addann__form">
            <div className="field">
              <label htmlFor="title " className="paragraph colorGray">
                Заголовок
              </label>
              <input
                name="title"
                type="text"
                className="input"
                id="name"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="post" className="paragraph colorGray">
                Текст объявления
              </label>
              <textarea
                name="post"
                rows={10}
                value={formData.post}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button className="button button__red paragraph"> Отправить объявление </button>
          </form>
        </div>
      </div>
    </main>
  );
};
