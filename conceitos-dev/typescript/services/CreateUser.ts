/**
 * Forma simples de "tipar" parâmetros
 * export default function createUser(name = "", email: string, password: string) {
 *
 * Mas complica quando há a necessidade de informar muitos
 * parâmetros
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; //opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
