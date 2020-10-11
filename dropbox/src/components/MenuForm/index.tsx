import React from 'react';

// Let's build a menu where the user can add his samples

import { 
    Container, 
    Navigation, 
    DropboxLogo, 
    Form } 
    from './styles';

const MenuForm: React.FC = ( ) => {
    function handleToggle( ) {
        if (window.toggleActiveMenu) window.toggleActiveMenu( );
    }

    return (
        <Container>
            <Navigation>
                <h1>
                    <DropboxLogo />
                    <span>Dropbox</span>
                </h1>
                <button className="action--close" onClick={handleToggle}>
                    X
                </button>
            </Navigation>

            <Form>
                <span className="title">SignUp</span>
                <span className="subtitle">Please, fill the following form </span>

                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Surname" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Password" />

                <button>Proceed</button>

                <span className="terms">
                    This page is under privacy therms of service.
                </span>
            </Form>
        </Container>
    );
};

export default MenuForm;
