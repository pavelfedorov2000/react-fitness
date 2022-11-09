import classNames from 'classnames';
import React from 'react';
import { Button, FormAgree, Input, Select } from '../../@atoms';

function Form({className, formClassName, fieldBg, title, fields, btn, agree }) {
    return (
        <form action="#" class={classNames(!formClassName && 'form', className, formClassName)}>
            {title &&
                <div class="form__title">
                    {title.text}
                </div>
            }

            {!formClassName &&
                <div class="form__body">
                    {fields.map(field => (
                        <label>
                            <Input {...field} fieldBg={fieldBg} />
                        </label>
                    ))}
                </div>
            }

            {formClassName &&
                fields.map(field => (
                    field.name === 'select' ?<Select key={field.name.toString()} className="form-block__select" fieldBg={fieldBg} {...field} /> : <Input key={field.name.toString()} className="form-block__input" {...field} fieldBg={fieldBg} />
                ))
            }

            <Button className="form__btn" text={btn.text} type="submit" />

            {!formClassName && agree && <FormAgree />}
        </form>
    );
}

export default Form;