import React, {ReactElement} from 'react';
import './ErrorMessage.scss';

const ErrorMessage: React.FC<{}> = (): ReactElement => <p className='error'>Что-то пошло не так, попробуйте еще раз позже.</p>;

export default ErrorMessage;
