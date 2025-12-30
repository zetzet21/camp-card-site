import React from 'react';
import '../styles/contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-page">
            <div className="contacts-page-content">
                <h2>Контакты</h2>
                <div className="company-contact-info">
                    <h3>Свяжитесь с нами</h3>
                    <p>Почта компании: <a href="mailto:egorlovemed@mail.ru">egorlovemed@mail.ru</a></p>
                    <p>Контактный номер: <a href="tel:+79128787043">+7 (912) 878 70 43</a></p>
                    <p>Остались вопросы или нужна помощь?
                        Напишите нам или позвоните. Мы стремимся помогать каждому клиенту максимально быстро и эффективно.</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

