import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./Mapa.css";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import red from "@material-ui/core/colors/red";
import Room from "@material-ui/icons/Room";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const latlng = {
  lat: -22.1276,
  lng: -51.3856,
};

export default function Mapa() {
  const [array_dados, setDados] = useState<Coleta[]>([]);
  const [array_dados_backup, setDadosBackup] = useState<Coleta[]>([]);

  useEffect(() => {
    console.log("tudo carregado!");
    let aux_array_dados: Coleta[] = [];

    fetch("http://localhost:8080/dados_coletados")
      .then((res) => res.json())
      .then((res) => {
        for (let aux = 0; aux < res.length; aux++) {
          let aux_dado = {
            endereco: {
              rua: res[aux].rua,
              numero: res[aux].numero,
              complemento: res[aux].complemento,
              bairro: res[aux].bairro,
              cidade: res[aux].cidade,
            },
            coords: {
              lat: res[aux].lat,
              lng: res[aux].lng,
            },
            beneficios: {
              acao_jovem: res[aux].acao_jovem,
              bolsa_jovem: res[aux].bolsa_jovem,
              bpc: res[aux].bpc,
              renda_cidada: res[aux].renda_cidada,
              viva_leite: res[aux].viva_leite,
            },
            comunicacao: {
              telefone: res[aux].telefone,
              internet: res[aux].internet,
            },
            edificacao: {
              estrutura: res[aux].id_estrutura,
              revestimentoExterno: res[aux].id_revestimentoExterno,
              piso: res[aux].id_piso,
              forro: res[aux].id_forro,
              revestimentoInterno: res[aux].id_revestimentoInterno,
              pintura: res[aux].id_pintura,
              instalacaoEH: res[aux].id_instalacaoEH,
              cobertura: res[aux].id_cobertura,
              posicao: res[aux].id_posicao,
              situacaoConstrucao: res[aux].id_situcaoConstrucao,
              esquadrias: res[aux].id_esquadrias,
              estadoConservacao: res[aux].id_estadoConservacao,
            },
            educacao: {
              analfabetos: res[aux].analfabetos,
              usuario_creche: res[aux].usuario_creche,
              pre_publica: res[aux].pre_publica,
              pre_particular: res[aux].pre_particular,
              fundamental_publica: res[aux].fundamental_publica,
              fundamental_particular: res[aux].fundamental_particular,
              medio_publico: res[aux].medio_publico,
              medio_particular: res[aux].medio_particular,
              superior_publico: res[aux].superior_publico,
              superior_particular: res[aux].superior_particular,
            },
            lote: {
              id_ocupacao: res[aux].id_ocupacao,
              id_patrimonio: res[aux].id_patrimonio,
              id_relevo: res[aux].id_relevo,
              id_limTestada: res[aux].id_limTestada,
              id_uso: res[aux].id_uso,
              id_caracterizacao: res[aux].id_caracterizacao,
            },
            residentes: {
              homens: res[aux].homens,
              mulheres: res[aux].mulheres,
              outros_generos: res[aux].outros_generos,
              menos_um: res[aux].menos_um,
              um_a_tres: res[aux].um_a_tres,
              quatro_a_cinco: res[aux].quatro_a_cinco,
              seis_a_nove: res[aux].seis_a_nove,
              dez_a_quinze: res[aux].dez_a_quinze,
              dezesseis_a_vinteum: res[aux].dezesseis_a_vinteum,
              vintedois_a_quarentacinco: res[aux].vintedois_a_quarentacinco,
              quarentaseis_a_sessenta: res[aux].quarentaseis_a_sessenta,
              mais_sessenta: res[aux].mais_sessenta,
            },
            saude: {
              cardiopatia: res[aux].cardiopatia,
              def_auditiva: res[aux].def_auditiva,
              def_fisica: res[aux].def_fisica,
              def_visual: res[aux].def_visual,
              def_mental: res[aux].def_mental,
              dengue: res[aux].dengue,
              dep_quimico: res[aux].dep_quimico,
              depressao: res[aux].depressao,
              dist_linguagem: res[aux].dist_linguagem,
              fibromialgia: res[aux].fibromialgia,
              hanseniase: res[aux].hanseniase,
              hipertensao: res[aux].hipertensao,
              mal_parkinson: res[aux].mal_parkinson,
              tuberculose: res[aux].tuberculose,
              aids: res[aux].aids,
            },
            socioeconomicos: {
              aposentados: res[aux].aposentados,
              pensionistas: res[aux].pensionistas,
              desempregados: res[aux].desempregados,
              emp_comercio: res[aux].emp_comercio,
              emp_industria: res[aux].emp_industria,
              emp_servico: res[aux].emp_servico,
              emp_rurais: res[aux].emp_rurais,
              emp_publico: res[aux].emp_publico,
              autonomo: res[aux].autonomo,
              emp_informais: res[aux].emp_informais,
              vei_local: res[aux].vei_local,
              vei_fora: res[aux].vei_fora,
            },
          };
          aux_array_dados.push(aux_dado);
        }

        setDados([...aux_array_dados]);
        setDadosBackup([...aux_array_dados]);
      });
  }, []);

  function removerFiltros() {
    setDados([...array_dados_backup]);
  }

  return (
    <div className="container">
      <div className="col-principal">
        <div className="col-esq">
          <div className="header-colEsq">Filtros</div>
          <div className="linha-colEsq">
            <button className="botao-esq">Marcadores</button>
          </div>
          <div className="linha-colEsq">
            <button className="botao-esq">Marcadores</button>
          </div>
          <div className="linha-colEsq">
            <button className="botao-esq">Marcadores</button>
          </div>
          <div className="linha-colEsq">
            <button className="botao-esq">Marcadores</button>
          </div>
        </div>

        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "",
            }}
            defaultCenter={{ lat: -22.1276, lng: -51.3856 }}
            defaultZoom={8}
          >
            {}
            {array_dados.map((dado, index) => {
              return (
                <Room
                  key={index}
                  fontSize="large"
                  style={{
                    color: red[400],
                    transform: "translate(-50%, -100%)",
                  }}
                  {...{ lat: dado.coords.lat, lng: dado.coords.lng }}
                  onClick={() => console.log("clicou no " + index)}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

type Coleta = {
  endereco: {
    rua: String;
    numero: Number;
    complemento: String;
    bairro: String;
    cidade: String;
  };
  coords: {
    lat: Number;
    lng: Number;
  };
  beneficios: {
    acao_jovem: Number;
    bolsa_jovem: Number;
    bpc: Number;
    renda_cidada: Number;
    viva_leite: Number;
  };
  comunicacao: {
    telefone: Number;
    internet: Number;
  };
  edificacao: {
    estrutura: Number;
    revestimentoExterno: Number;
    piso: Number;
    forro: Number;
    revestimentoInterno: Number;
    pintura: Number;
    instalacaoEH: Number;
    cobertura: Number;
    posicao: Number;
    situacaoConstrucao: Number;
    esquadrias: Number;
    estadoConservacao: Number;
  };
  educacao: {
    analfabetos: Number;
    usuario_creche: Number;
    pre_publica: Number;
    pre_particular: Number;
    fundamental_publica: Number;
    fundamental_particular: Number;
    medio_publico: Number;
    medio_particular: Number;
    superior_publico: Number;
    superior_particular: Number;
  };
  lote: {
    id_ocupacao: Number;
    id_patrimonio: Number;
    id_relevo: Number;
    id_limTestada: Number;
    id_uso: Number;
    id_caracterizacao: Number;
  };
  residentes: {
    homens: Number;
    mulheres: Number;
    outros_generos: Number;
    menos_um: Number;
    um_a_tres: Number;
    quatro_a_cinco: Number;
    seis_a_nove: Number;
    dez_a_quinze: Number;
    dezesseis_a_vinteum: Number;
    vintedois_a_quarentacinco: Number;
    quarentaseis_a_sessenta: Number;
    mais_sessenta: Number;
  };
  saude: {
    cardiopatia: Number;
    def_auditiva: Number;
    def_fisica: Number;
    def_visual: Number;
    def_mental: Number;
    dengue: Number;
    dep_quimico: Number;
    depressao: Number;
    dist_linguagem: Number;
    fibromialgia: Number;
    hanseniase: Number;
    hipertensao: Number;
    mal_parkinson: Number;
    tuberculose: Number;
    aids: Number;
  };
  socioeconomicos: {
    aposentados: Number;
    pensionistas: Number;
    desempregados: Number;
    emp_comercio: Number;
    emp_industria: Number;
    emp_servico: Number;
    emp_rurais: Number;
    emp_publico: Number;
    autonomo: Number;
    emp_informais: Number;
    vei_local: Number;
    vei_fora: Number;
  };
};
