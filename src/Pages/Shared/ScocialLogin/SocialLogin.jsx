import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleSingIn = () => {

        googleLogin()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleSingIn} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;