import { Main, BoardCont } from "../common/styles/Main.styles"
import Header from "../common/ui/Header";
import Board from '../common/ui/Board';

const App = () => {
  return (
    <Main>
      <Header />
      <BoardCont>
        <Board />
      </BoardCont>
    </Main>
  )
}

export default App
