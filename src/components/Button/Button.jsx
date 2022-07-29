import "./Button.scss";

export default function Button({ w, h, content, action }) {
  return <button
    type="submit"
    className="Button"
    style={{
      width: w,
      height: h
    }}
    onClick={action}
  >{ content }</button>
}