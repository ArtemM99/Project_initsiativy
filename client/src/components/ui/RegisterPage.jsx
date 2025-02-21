import React from 'react';


export default function SignupPage({ signupHandler }) {

  return (
    <form onSubmit={signupHandler}>
      <input name="firstName" type="text" placeholder="Имя" required />
      <input name="lastName" type="text" placeholder="Фамилия" required />
      <input name="middleName" type="text" placeholder="Отчество" />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Пароль" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
