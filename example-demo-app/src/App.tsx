import ExampleItem from './components/ExampleItem';
import './styles/examples.css';

export default function App() {
  return (
    <main>
      <h1>Demos</h1>
      <p>
        <a href="https://github.com/loput12ouj35/React-slide-rule">
          React-slide-rule
        </a>
        &nbsp;allows users to select a value along a subjectvie range and step.
        This application lists demos of the component.
      </p>
      <h2 id="basic">Basic</h2>
      <ul>
        <ExampleItem id="basic" />
        <ExampleItem id="input-element" />
        <ExampleItem id="vertical" />
      </ul>
      <h2 id="Advanced">Advanced</h2>
      <ul>
        <ExampleItem id="custom-styled" />
        <ExampleItem id="rotate-number" />
        <ExampleItem id="custom-cursor" />
        <ExampleItem id="multiple-pointers" />
        <ExampleItem id="full-width" />
        <ExampleItem id="window-resize-observer" />
      </ul>
      <h2>Playground</h2>
      <p>(todo)</p>
    </main>
  );
}
