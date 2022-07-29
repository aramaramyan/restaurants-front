import "./Button.scss";

export default function Button({ width, height, content }) {
  return <button
    type="submit"
    className="Button"
    style={{
      width: width,
      height: height
    }}
  >{ content }</button>
}