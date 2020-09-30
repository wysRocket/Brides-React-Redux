import React from 'react'
import LoadingModal from '../components/Loading/Loading'

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP) => {
    return (
      <React.Suspense fallback={<LoadingModal />}>
        <WrappedComponent {...props} />
      </React.Suspense>
    )
  }
}
