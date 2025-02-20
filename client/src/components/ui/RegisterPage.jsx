
import React from 'react';

export default function SignupPage({ signupHandler, user }) {
  if(user )
console.log(user)
  return (
    <form onSubmit={signupHandler}>
      <input name="firstName" type="text" placeholder="Имя" required />
      <input name="lastName" type="text" placeholder="Фамилия" required />
      <input name="middleName" type="text" placeholder="Отчество" />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Пароль" required />
      <input name="federalDistrict" type="text" placeholder="Федеральный округ" />
      <input name="region" type="text" placeholder="Регион" />
      <input name="municipality" type="text" placeholder="Муниципалитет" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
