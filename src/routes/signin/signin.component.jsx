import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utility';

import SignUp from '../../components/sign-up/sign-up.component';

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
            <SignUp />
        </div>
    );
};

export default SignIn;