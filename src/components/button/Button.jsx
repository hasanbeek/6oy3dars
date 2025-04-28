import "./Button.css"
export default function Button({href = "/", text}) {
  return (
    <button className="button1">
      <a href={href}>{text}</a>
    </button>
  );
}
