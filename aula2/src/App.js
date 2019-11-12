import React from 'react';
import './App.css';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      visibilidade: true
    };
  }
  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  menosUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador - 1
      }
    })
  }
  resetarContador = () => {
    this.setState(() => {
      return {
        contador: 0
      }
    })
  }


  alternarVisibilidade = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        visibilidade: !prevState.visibilidade
      }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.alternarVisibilidade}> {this.state.visibilidade === true ? "Fechar Contador" : "Abrir Contador"}
        </button>
        
        {this.state.visibilidade === true ? (
        <div>
            <button className="btnMaisUm" onClick={this.adicionarUm}>+1</button>
            <button className="btnMenosUm" onClick={this.menosUm}>-1</button>
            <button className="btnResetar" onClick={this.resetarContador}>resetar</button>
        </div>
        ) : ''}
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}
export default App;