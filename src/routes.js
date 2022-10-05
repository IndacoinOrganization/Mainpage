// Pages

import Home from '@/pages/Home';
import Business from '@/pages/Business';
import Faq from '@/pages/Faq';

import Blog from '@pages/Blog';
// import BlogOrder from '@pages/BlogOrder';
// import Buy from '@pages/Buy';
import Authorization from '@pages/Authorization';
import ConfirmEmail from '@pages/ConfirmEmail';
import ForgotPassword from '@pages/ForgotPassword';
import RecoveryPassword from '@pages/RecoveryPassword';
import Referral from '@pages/Referral';
import TermsAndAml from '@pages/TermsAndAml';
import Change from '@pages/Change';
import ApiDoc from '@pages/ApiDoc';
import Listing from '@pages/Listing';
import Status from '@pages/Status';
import Inda from '@pages/IndaToken';
import Landing from '@pages/Landing';
import Unsubscribe from '@pages/Unsubscribe';
import Subscribe from '@pages/Subscribe';
import RestoreAccount from '@pages/RestoreAccount';
import Charts from '@pages/Charts';

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
        path: 'referral',
        component: Referral,
    },
    {
        path: 'blog',
        component: Blog,
    },
    // {
    //     path: 'blog/:sampleNews',
    //     component: BlogOrder,
    // },
    {
        path: 'status',
        component: Change,
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
        path: 'terms',
        component: TermsAndAml,
    },
    {
        path: 'terms/amlpolicy',
        component: TermsAndAml,
    },
    {
        path: 'api_doc',
        component: ApiDoc,
    },
    {
        path: 'listing',
        component: Listing,
    },
    {
        path: 'payment-status',
        component: Status
    },
    {
        path: 'landing',
        component: Landing
    },
    {
        path: ':crypto-usd-price-charts',
        component: Charts
    },
    {
        path: 'unsubscribe/:email/:token',
        component: Unsubscribe
    },
    {
        path: 'subscribe/:email/:token',
        component: Subscribe
    },
    {
        path: 'restore-account/:email/:token',
        component: RestoreAccount
    },
    // {
    //     path: 'dashboard',
    //     component: () => {
    //         window.location.href = env.BASENAME + '/panel/exchange';
    //         return null;
    //     },
    // },
    {
        path: 'tokens',
        component: Inda
    },
    {
        path: 'tokens/buy-:crypto-with-card',
        component: Inda
    },
    {
        path: 'verification',
        component: Verification
    },
];

export const AUTH_ROUTES = [
    {
        path: 'auth/forgot',
        component: ForgotPassword,
    },
    {
        path: 'auth/recovery/:email/:code',
        component: RecoveryPassword,
    },
    {
        path: 'auth/confirm/:email/:code',
        component: ConfirmEmail,
    },
    {
        path: 'auth/:action(login|register)',
        component: Authorization,
    },
];
