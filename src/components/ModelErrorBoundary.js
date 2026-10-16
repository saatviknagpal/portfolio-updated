import React from "react";

// Keeps the page alive if the 3D avatar fails to load (missing file, WebGL error, etc.).
export default class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("3D model failed to load:", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
