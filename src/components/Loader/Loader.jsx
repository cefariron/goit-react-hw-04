import { Puff } from "react-loader-spinner";
import css from '../Loader/Loader.module.css';


export function Loader () {

    return (
      <>
        <div className={css.container}>
        <Puff color="green" />
        </div>
      </>
    )
  }