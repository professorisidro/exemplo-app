import React from 'react';
class Detail extends React.Component {

    state = {
        nome : "Isidro",
        endereco : "Teste"
    }
    render() {
        return (
            <div class="row">
                <div class="col-12">
                    <h3> DETALHE </h3>
                    { this.state.nome }

                    <br/>
                    { this.state.endereco }
                </div>
            </div>
        );
    }
}

export default Detail;