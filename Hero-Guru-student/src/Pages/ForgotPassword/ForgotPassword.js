// import { Component } from 'react'
// import { Container } from 'react-bootstrap'
// import { InputDefault } from '../../Assets/Components/InputDefault/InputDefault'
// import './ForgotPassword.css'


// class ForgotPassword extends Component {
//     render() {
//         return (
//             <Container fluid className='container_forgotpassword'>
//                 <div className='container_content_forgotpassword'>
//                     <InputDefault />
                    
//                 </div>
//             </Container>
//         )
//     }
// }
// export default ForgotPassword

import { FormEmail } from "./FormEmail/FormEmail";
import { SetNewPassword } from "./SetNewPassword/SetNewPassword";
import { VerifyEmail } from "./VerifyEmail/VerifyEmail";

export { SetNewPassword, FormEmail, VerifyEmail }