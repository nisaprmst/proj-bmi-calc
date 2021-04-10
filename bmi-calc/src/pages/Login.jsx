import AuthModal from '../components/AuthModal';

export default function Login(props) {

    return (
        <AuthModal {...props} show={props.show}  refresh={true} onHide={props.onHide} buttonText1={"Login"} title={"Log In"} login={true} />
    )
}