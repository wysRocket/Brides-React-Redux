import React from 'react';
import LoadingModal from './../components/Loading/Loading';

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<LoadingModal/>} >
            < Component {...props} />
            </React.Suspense>
    }
}