import React, { useState, FC } from 'react';
import styles from './LoginPage.module.css';

interface LoginProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: FC<LoginProps> = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password: string) => {
        // The regex checks for at least 8 characters, 1 uppercase, 1 lowercase, and 1 special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!validatePassword(password)) {
            setError("Invalid password");
        } else {
            setError("");
            setIsLoggedIn(true);
        }
    };

    const passwordTooltip = 'Must contain at least 8 characters, 1 uppercase, 1 lowercase, and 1 special character.';

    return (
        <div className={styles.container}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <div className={styles.validationInfo} data-tooltip={passwordTooltip}>
                    <input
                        className={styles.inputField}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {showPassword ?
                        <svg className={styles.showHideIcon} onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 24" stroke="currentColor">
                            <path d="M8.10869891,20.8913011 C4.61720816,18.8301147 3,16 3,16 C3,16 7,9 16,9 C17.3045107,9 18.5039752,9.14706466 19.6014388,9.39856122 L18.7519017,10.2480983 C17.8971484,10.0900546 16.9800929,10 16,10 C8,10 4.19995117,16 4.19995117,16 C4.19995117,16 5.71472808,18.3917225 8.84492713,20.1550729 L8.10869891,20.8913011 L8.10869891,20.8913011 L8.10869891,20.8913011 Z M12.398561,22.601439 C13.4960246,22.8529356 14.6954892,23.0000001 16,23 C25,22.999999 29,16 29,16 C29,16 27.3827918,13.1698856 23.8913008,11.1086992 L23.1550727,11.8449273 C26.2852719,13.6082776 27.8000488,16 27.8000488,16 C27.8000488,16 24,21.999999 16,22 C15.019907,22.0000001 14.1028515,21.9099455 13.2480981,21.7519019 L12.398561,22.601439 L12.398561,22.601439 L12.398561,22.601439 Z M19.8986531,15.1013469 C19.9649658,15.3902115 20,15.6910144 20,16 C20,18.2091391 18.2091391,20 16,20 C15.6910144,20 15.3902115,19.9649658 15.1013469,19.8986531 L16,19 C16.7677669,19.0000001 17.5355339,18.7071068 18.1213203,18.1213203 C18.7071068,17.5355339 19.0000001,16.7677669 19,16 L19.8986531,15.1013469 L19.8986531,15.1013469 L19.8986531,15.1013469 Z M16.8986531,12.1013469 C16.6097885,12.0350342 16.3089856,12 16,12 C13.7908609,12 12,13.7908609 12,16 C12,16.3089856 12.0350342,16.6097885 12.1013469,16.8986531 L13,16 C12.9999999,15.2322331 13.2928932,14.4644661 13.8786797,13.8786797 C14.4644661,13.2928932 15.2322331,12.9999999 16,13 L16.8986531,12.1013469 L16.8986531,12.1013469 L16.8986531,12.1013469 Z M24,7 L7,24 L8,25 L25,8 L24,7 L24,7 Z" />
                        </svg>
                        :
                        <svg className={styles.showHideIcon} onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 24" stroke="currentColor">
                            <path d="M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z" fill="none" id="XMLID_10_" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                            <circle cx="16" cy="16" fill="none" id="XMLID_12_" r="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                        </svg>
                    }
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button className={styles.submitButton} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;