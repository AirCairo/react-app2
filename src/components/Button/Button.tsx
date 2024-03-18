import stles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

//const Button = ({children, onClick, color = "primary"}: Props)
