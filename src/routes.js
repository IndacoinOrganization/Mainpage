// Pages

import Home from '@/pages/Home';
import Business from '@/pages/Business';
import Faq from './pages/Faq/index.jsx';


// import BlogOrder from '@pages/BlogOrder';
// import Buy from '@pages/Buy';
// import Authorization from '@pages/Authorization';
// import ConfirmEmail from '@pages/ConfirmEmail';
// import ForgotPassword from '@pages/ForgotPassword';
// import RecoveryPassword from '@pages/RecoveryPassword';
// import Referral from '@pages/Referral';
// import TermsAndAml from '@pages/TermsAndAml';
// import Change from '@pages/Change';
// import ApiDoc from '@pages/ApiDoc';
// import Listing from '@pages/Listing';
// import Status from '@pages/Status';
// import Inda from '@pages/IndaToken';
// import Landing from '@pages/Landing';
// import Unsubscribe from '@pages/Unsubscribe';
// import Subscribe from '@pages/Subscribe';
// import RestoreAccount from '@pages/RestoreAccount';
// import Charts from '@pages/Charts';

import Verification from '@/pages/Verification';

export const ROUTES = [
    {
        path: '',
        component: Home,
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: 'business',
        component: Business,
    },
    {
        path: 'faq',
        component: Faq,
    },
    {
        path: 'verification',
        component: Verification
    },
];

// export const AUTH_ROUTES = [
//     {
//         path: 'auth/forgot',
//         component: ForgotPassword,
//     },
//     {
//         path: 'auth/recovery/:email/:code',
//         component: RecoveryPassword,
//     },
//     {
//         path: 'auth/confirm/:email/:code',
//         component: ConfirmEmail,
//     },
//     {
//         path: 'auth/:action(login|register)',
//         component: Authorization,
//     },
// ];
