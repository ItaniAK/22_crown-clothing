import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase';

import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    console.log(user);
    createUserDocumentFromAuth(user);
  }
  return(
      <div>
        <h1>Sign in page</h1>
        <button onClick={logGoogleUser}>
          Sign in with Google
        </button>
        <SignUpForm />
      </div>
  )
}

export default SignIn;
