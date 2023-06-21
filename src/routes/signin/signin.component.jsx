import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utility';

const SignIn = () => {

    const loginWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default SignIn;