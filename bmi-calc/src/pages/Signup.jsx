import AuthModal from '../components/AuthModal';

export default function Login(props) {

    return (
        <AuthModal {...props} show={props.show} refresh={props.refresh}  onHide={props.onHide} buttonText1={"Sign up"} title={"Sign Up"} login={false} />
    )
}