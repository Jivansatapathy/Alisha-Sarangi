import React from "react";

export class WebGLErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Carousel Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

export function WebGLFallback({ className, message = "This carousel requires WebGL, which is unavailable in this browser." }) {
  return (
    <div className={`flex items-center justify-center p-8 text-center text-sm text-[#8f9bb3] bg-[#0c101a] rounded-2xl ${className || ""}`}>
      <p>{message}</p>
    </div>
  );
}
