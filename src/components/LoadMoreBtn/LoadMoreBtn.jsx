import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <div>
      <button className={css.btn} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};
