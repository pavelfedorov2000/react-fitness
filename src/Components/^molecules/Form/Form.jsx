import classNames from 'classnames';
import React from 'react';
import { Button, FormAgree, Input } from '../../@atoms';

function Form({className, formClassName, fieldBg, title, fields, btn, agree }) {
    return (
        <form action="#" class={classNames('form', className, formClassName)}>
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
                    <Button className="form__btn" text={btn.text} type="submit" />
                </div>
            }

            {!formClassName && agree && <FormAgree />}
        </form>
    );
}

export default Form;