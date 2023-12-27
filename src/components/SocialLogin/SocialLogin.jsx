import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <button className="btn btn-accent" onClick={handleGoogleSignIn}>Google</button>
        </div>
    );
};

export default SocialLogin;