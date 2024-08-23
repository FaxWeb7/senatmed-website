import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../../../constants';

const Mail = () => {
  const {isChecked, setIsChecked} = useState(true)
  const { register, formState: { errors, /*isValid*/ },  handleSubmit, reset } = useForm({mode: "onBlur"});

  const onSubmit = ({name, email, mess, phone}) => {
    var dataToSend = {message: `Имя: ${name}\nЭл.почта: ${email}\nТелефон: ${phone}\nСообщение: ${mess}`};
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch(`${SERVER_URL}/api/mail/send-mail`, {
      method: "POST",
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
    })
    // console.log(name, email, mess, phone)
    reset();
  }

  const handleCheckChange = () => {
    setIsChecked(false)
  }

  return (
    <section className="mail">
      <div className="divider"></div>
      <div className="bg"></div>
      <div className="container">
        <div className="mail__inner">
          <div className="mail__content">
            <div className="mail__contacts">
              <div className="mail__contacts-content" data-aos="zoom-in-up" data-aos-duration="1000" >
                <h2 className="mail__contacts-title">Контакты</h2>
                <h3 className="mail__contacts-text" id="mail-aos-anchor1">Вы можете связаться с нами удобным для вас способом</h3>
              </div>
              <div className="mail__location" data-aos="zoom-in-up" data-aos-duration="1000" >
                <h3 className="mail__location-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                  г. Москва, г. Московский, ул. Солнечная, д. 3 "А", стр.1
                </h3>
                <h3 className="mail__location-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512"><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/></svg>
                  +7(926)579-03-93
                </h3>
                <a className="mail__location-item" href="mailto:senatmed.info@yandex.ru" style={{color: "black"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                senatmed.info@yandex.ru</a>
                {/* <h3 className="mail__location-item" style={{marginTop: 25,  flexDirection: 'column', alignItems: 'start'}}>
                  <h5 style={{fontSize: 17, fontWeight: 600}}>Полное наименование предприятия</h5>
                  <h5 style={{fontSize: 14, fontWeight: 600}}>-- Общество с ограниченной ответственностью «СЕНАТМЕД» </h5>
                </h3>
                <h3 className="mail__location-item" style={{marginTop: 10,  flexDirection: 'column', alignItems: 'start'}}>
                  <h5 style={{fontSize: 17, fontWeight: 600}}>Юридический и почтовый адрес</h5>
                  <h5 style={{fontSize: 14, fontWeight: 600}}>-- 108811, г. Москва, г. Московский, ул. Солнечная, д. 3 А, стр. 1, ком. 16</h5>
                </h3>
                <h3 className="mail__location-item">
                  <h5 style={{fontSize: 17, fontWeight: 600}}>ИНН</h5>
                  7751163033
                </h3> */}
              </div>
            </div>
            <div className="mail__form" id="mail">
              <h2 className="mail__form-title" data-aos="zoom-in-up" data-aos-duration="1000" >Напишите нам</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mail__form-content" id="form" data-aos="zoom-in-up"  data-aos-duration="1000">
                <input type="text" id="et_pb_contact_name_0" name="name" className="mail__form-item _req name" placeholder="Имя *" 
                {...register('name', {
                  required: "Поле обязательно к заполнению!"
                  })}
                />
                {errors?.name && <p className='form-err-text'>{errors?.name?.message}</p>}
                  <input type="text" id="et_pb_contact_email_0" name="email"  className="mail__form-item _email _req email" placeholder="Электронный адрес *" 
                  {...register('email', {
                    required: "Поле обязательно к заполнению!",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Электронный адрес введён некорректно'
                      } 
                    })}
                  />
                  {errors?.email && <p className='form-err-text'>{errors?.email?.message}</p>}
                  <input type="text" id="et_pb_contact_tel_0" className="mail__form-item _phone _req input phone" name="phone" placeholder="Телефон *" 
                  {...register('phone', {
                    required: "Поле обязательно к заполнению!",
                    pattern: {
                      // eslint-disable-next-line
                      value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                      message: 'Номер телефона введён некорректно'
                      } 
                    })}
                  />
                  {errors?.phone && <p className='form-err-text'>{errors?.phone?.message}</p>}
                <textarea type="text" name="message" id="et_pb_contact_message_0" className="mail__form-item _req message" cols="30" rows="5" placeholder="Сообщение *"
                {...register('mess')}
                ></textarea>
                <input className="mail__form-checkbox _req checkbox" name="checkbox" onChange={handleCheckChange} checked={isChecked} type="checkbox" id="et_pb_contact_soglasie_4_0 checkbox" value="даю согласие на обработку моих персональных данных" data-id="-1" 
                {...register('checkbox', {
                  required: "Вы должны дать согласие"
                  })}
                />
                <label className="mail__form-label" htmlFor="suggest">даю согласие на обработку моих персональных данных</label>
                {errors?.checkbox && <p className='form-err-text'>{errors?.checkbox?.message}</p>}
                <button className="mail__form-btn btn-error" type="submit" /*disabled={!isValid}*/>отправить</button>
              </form>
            </div>
          </div>
          <div className="mail__copyright">
            <h4><Link to={"/terms-of-use"} className="mail__link">пользовательское соглашение</Link></h4>
            <h4><Link to={"/privacy-policy"} className="mail__link">политика конфиденциальности</Link></h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mail;
