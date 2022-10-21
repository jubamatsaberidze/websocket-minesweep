import { Main, BoardCont } from "../common/styles/Main.styles"
import Header from "../common/ui/Header";
import Board from '../common/ui/Board';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const App = () => {
  const { status } = useSelector((state: RootState) => state.board);
  const message = status === 0 ? 'Game Over.' : status === 1 ? 'You Win!' : '';
  return (
    <Main>
      <Header />
      <BoardCont>
        {message}
        <Board />
      </BoardCont>
    </Main>
  )
}

export default App
