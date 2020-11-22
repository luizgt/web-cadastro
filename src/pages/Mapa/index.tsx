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

  useEffect(() => {
    console.log("tudo carregado!");

    fetch("http://localhost:8080/dados_coletados")
      .then((res) => res.json())
      .then((res) => {
        setDados([...res]);
      });
  }, []);

  function filtrar() {
    let aux_array_dados_coletados = array_dados;

    aux_array_dados_coletados = array_dados.filter((dado) => {
      if (dado.variavel === 1) return dado;
    });

    setDados([...aux_array_dados_coletados]);
  }

  return (
    <div className="container">
      <div className="col-principal">
        <div className="col-esq">
          <div className="header-colEsq">Filtros</div>
          <div className="linha-colEsq">
            <button className="botao-esq" onClick={filtrar}>
              Marcadores
            </button>
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
              key: "AIzaSyDx67AXBO2zmnl6nV6_piHwf2rxRBd7AIY",
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
                  {...{ lat: dado.lat, lng: dado.lng }}
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
  lat: Number;
  lng: Number;
  endereco: {
    rua: String;
  };
  variavel: Number | null;
};
