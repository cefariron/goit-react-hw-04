import css from "../ErrorMessage/ErrorMessage.module.css";

export function ErrorMessage({ children }) {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>{children}</p>
      </div>
    </>
  );
}
