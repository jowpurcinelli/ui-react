import React from 'react';

//import { CompleteForm} from '../Autocomplete';

declare global {
    interface Window {
        toggleActiveMenu:   (() => void  ) | undefined;
    }
}

const scrollThreshold = 300;

const SideMenu : React.FC = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [ scrollY, setScrollY ] = useState(0);

    useEffect(() => {
        function onScroll ( ) {
            setScrollY( windows.scrollY );
            setIsActive (false);
        }

        window.addEventListener('scroll', onScroll);
        return ( ) => window.removeEventListener('scroll', onScroll);
    },
        [scrollY]);
    
    const classes = [
        isActive ? 'open' :  ' ' ,
        scrollY <= scrollThreshol ? 'scrollOpen' :  ' ',   
    ];
    const className = classes.join('  ').trim( );

        function toggleActiveMenu( ) {
            setIsActive((prev) => !prev );
        }

        window.toggleActiveMenu = toggleActiveMenu;
        return <Container className={className}>{children}</Container>;
};

export default SideMenu;

