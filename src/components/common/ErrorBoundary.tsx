import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-bg px-6 text-center">
          <div>
            <p className="font-display text-xl font-semibold text-text">Something went wrong.</p>
            <p className="mt-2 text-sm text-muted">Please refresh the page. If the problem persists, this section can be safely skipped.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
