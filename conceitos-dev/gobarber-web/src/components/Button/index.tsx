import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// Quando criamos uma interface extends e não alteramos nada, podemos
// transformá-la em um type (no caso feito automaticamente pelo eslint)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// Como o texto do botão está no children, ao invés de fazer assim
// const Button: React.FC<ButtonProps> = props => (
//   <Container>
//     <button type="button" {...props}>
//       text
//     </button>
//   </Container>
// );

// Faz assim:
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
