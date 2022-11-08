import classNames from 'classnames';
import React from 'react';
import { Button, Input } from '../../@atoms';

function Form({ form, fieldBg }) {
    return (
        <form action="#" class="form unique-concept__form">
            <div class="form__title">
                Узнайте больше
                о&nbsp;фитнес&nbsp;клубе FITNESSON
            </div>
            <div class="form__body">
                {form.fields.map(field => (
                    <label>
                        <Input {...field} fieldBg={fieldBg} />
                    </label>
                ))}
                <Button className="form__btn" text={form.btn.text} type="submit" />
            </div>
            <p class="form-agree">
                Отправляя заявку вы соглашаетесь
                с условиями обработки персональных данных
            </p>
        </form>
    );
}

export default Form;