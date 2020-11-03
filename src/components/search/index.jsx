import React from 'react';

import ApiSearch from '../../api/api.jsx';

import '../../styleGlobal.css';
import './style.css';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            nome: '',
            imagem: '',
            peso: '',
            tamanho: '',
            listTipos: '',
            listHabilidades: '',
            defesa: '',
            especialDefesa: '',
            ataque: '',
            especialAtaque: '',
            hp: '',
            velocidade: '',
            passoEvolucao: ''

        }
    }

    handleDados(evento) {
        // ARMAZANA O VALOR DIGITADO PELO USARIO NA VARIAVEL
        const pokedex = evento.target.value;

        // ACESSA O ARQUIVO E VERIFICA OS ARQUIVOS CONTIDOS NELE
        ApiSearch.Search(pokedex)
            .then((res) => {
            console.log("Response: ", res);
            console.log("Response: ", res.data);
            console.log("Nome: ", res.data.name);
            console.log("Sprits: ", res.data.sprites.other.dream_world.front_default);
            console.log("Altura: ", res.data.height);
            console.log("Peso: ", res.data.weight);

            let nome = res.data.name;
            let imagem = res.data.sprites.other.dream_world.front_default;
            let peso = res.data.weight;
            let tamanho = res.data.height;
            let listTipos = [res.data.types.length];
                for(let i = 0; i < res.data.types.length; i++){
                    listTipos[i] = res.data.types[i].type.name;

                    console.log("Lista de Tipos: ", listTipos);

                }

                //893
                
            let listHabilidades = [res.data.abilities.length];
                for(let i = 0; i < res.data.abilities.length; i++){
                    listHabilidades[i] = res.data.abilities[i].ability.name;

                    console.log("Lista de Habilidades: ", listHabilidades);

                }
            
            let defesa = 0;
            let especialDefesa = 0;
            let ataque = 0;
            let especialAtaque = 0;
            let hp = 0;
            let velocidade = 0;
                for(let i = 0; i < res.data.stats.length; i++){
                    console.log(res.data.stats[i].stat.name, "-", res.data.stats[i].base_stat);
                    
                    switch(res.data.stats[i].stat.name) {
                        case "hp":
                            hp = res.data.stats[i].base_stat;
                        break;

                        case "attack":
                            ataque = res.data.stats[i].base_stat;
                        break;

                        case "defense":
                            defesa = res.data.stats[i].base_stat;
                        break;

                        case "special-attack":
                            especialAtaque = res.data.stats[i].base_stat;
                        break;

                        case "special-defense":
                            especialDefesa = res.data.stats[i].base_stat;
                        break;

                        case "speed":
                            velocidade = res.data.stats[i].base_stat;
                        break;

                        default:
                            console.log("Valor nao localizado!");
                        break;
                    }

                }

            //let passoEvolucao = res;

            // ATRIBUIE O VALORES BUSCADOS NAS VARIAVEIS
            this.setState({
                nome: nome,
                imagem: imagem,
                peso: peso,
                tamanho: tamanho,
                listTipos: listTipos,
                listHabilidades: listHabilidades,
                defesa: defesa,
                especialDefesa: especialDefesa,
                ataque: ataque,
                especialAtaque: especialAtaque,
                hp: hp,
                velocidade: velocidade,
                //passoEvolucao: passoEvolucao

            })

        })
        ApiSearch.Evolution(pokedex)
            .then((res) => {
            //console.log("Evolucao: ", res.data.chain);
            
            let passoEvolucao = res;

            /*let passoEvolucao = res.data.chain.evolves_to[0];

            if(res.data.chain.evolves_to) {
                console.log("evolves_to LOCALIZADO");
                passoEvolucao[0] = passoEvolucao.species.name;

            }else{
                console.log("evolves_to NAO LOCALIZADO");

            }

            if(passoEvolucao.evolves_to) {
                console.log("evolves_to LOCALIZADO");
                passoEvolucao[1] = passoEvolucao.evolves_to[0].species.name;
                //console.log(passoEvolucao[1]);

            }else{
                console.log("evolves_to NAO LOCALIZADO");

            }

            console.log("Imprimir Evolucao: ", passoEvolucao);*/
            
            
                /*for(let i = 0; i < passoEvolucao.length; i++){
                    if(res.data.chain.evolves_to[i].evolves_to[i]) {
                        passoEvolucao[i+1] = res.data.chain.evolves_to[i].evolves_to[i].species.name;

                    }else if(res.data.chain.evolves_to[i].evolves_to[i].evolves_to[i]) {
                        passoEvolucao[i+2] = res.data.chain.evolves_to[i].evolves_to[i].evolves_to[i].species.name;

                    }

                    passoEvolucao[i] = passoEvolucao[i].species.name;

                    console.log("Lista de Tipos: ", passoEvolucao);
                    console.log("Proxima evolucao: ", passoEvolucao[0].species.name);

                    for(let j = 0; j < res.data.chain.evolves_to[i].evolves_to.length; j++){
                        passoEvolucao[i+1] = res.data.chain.evolves_to[i].evolves_to[i].species.name;
    
                        console.log("Lista de Tipos: ", passoEvolucao);
                        console.log("Proxima evolucao: ", res.data.chain.evolves_to[i].evolves_to[i].species.name);
                        console.log("Proxima evolucao: ", res.data.chain.evolves_to[i].evolves_to.length);
    
                    }

                }

                for(let i = 0; i < res.data.chain.evolves_to[0].evolves_to.length; i++){
                    passoEvolucao[i] = res.data.chain.evolves_to[i].evolves_to[i].species.name;

                    console.log("Lista de Tipos: ", passoEvolucao);
                    console.log("Proxima evolucao: ", res.data.chain.evolves_to[0].evolves_to[0].species.name);

                }*/

            // ATRIBUIE O VALORES BUSCADOS NAS VARIAVEIS
            this.setState({
                passoEvolucao: passoEvolucao

            })

        })
    
    }

    render() {
        return (
            <div id="container">
                <div id="page">
                    <header id="header">
                        <h1>Pokedex</h1>
                        <div id="inputSearch">
                            <input type="text" onBlur={ this.handleDados.bind(this) } placeholder="Pokedex" />

                        </div>

                    </header>
                    
                </div>

                <section id="section">
                    <div id="card">
                        <div id="nome">
                            <h1>{this.state.nome}</h1>

                        </div>
                        <div id="imgCard">
                            <img src={this.state.imagem} />

                        </div>
                        <div id="tipoEspecie" className="dropdown">
                            <h1>Tipo: </h1>
                            <div className="dropdown-content">
                                <p>Teste</p>
                            
                            </div>
                            <p>{this.state.listTipos[0]}</p>
                            <p>{this.state.listTipos[1]}</p>

                        </div>
                        <div id="listHabilidades">
                            <h1>Habilidades: </h1>
                            <div id="listHabilidadesP">
                                <p>{this.state.listHabilidades[0]}</p>
                                <p>{this.state.listHabilidades[1]}</p>

                            </div>
                        </div>
                        <div id="stats">
                            <div id="statsHpVeloc">
                                <h1>HP: </h1>
                                <p>{this.state.hp}</p>

                                <h1>Vel: </h1>
                                <p>{this.state.velocidade}</p>

                            </div>

                            <div id="statsPerfil">
                                <h1>Alt:</h1>
                                <p>{this.state.tamanho}</p>

                                <h1>peso:</h1>
                                <p>{this.state.peso}</p>

                            </div>

                            <div id="statsPoder">
                                <h1>At: </h1>
                                <p>{this.state.ataque}</p>

                                <h1>Esp: </h1>
                                <p>{this.state.especialAtaque}</p>

                            </div>

                            <div id="statsPoder">
                                <h1>Def: </h1>
                                <p>{this.state.defesa}</p>

                                <h1>Esp: </h1>
                                <p>{this.state.especialDefesa}</p>

                            </div>

                        </div>

                    </div>

                    <div id="card">
                        <div id="nome">
                            <h1>{this.state.passoEvolucao[0]}</h1>

                        </div>

                    </div>

                    <div id="card">
                        <div id="nome">
                            <h1>{this.state.passoEvolucao[1]}</h1>

                        </div>

                    </div>

                </section>

            </div>

        )

    };

}

export default Search;