import React, { useEffect } from "react";
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
  useEffect(() => {
    //fazer a requisição dos dados aqui dentro!!!
    console.log("tudo carregado!");
  }, []);

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
              key: "AIzaSyAAx7_a4MbuI0eeWOJEkP5hYh4vWBpQRO8",
            }}
            defaultCenter={{ lat: -22.1276, lng: -51.3856 }}
            defaultZoom={8}
          >
            {/* <AnyReactComponent
              {...{ lat: -22.1276, lng: -51.3856 }}
              text="eae mennnnnnnnnnn"
            /> */}
            {/* <Tooltip title="" {...latlng} style={{ color: red[500] }}>
                <LocationOnIcon style={{ transform: "translate(-50%, -100%)" }} />
            </Tooltip> */}
            <Room
              fontSize="large"
              style={{ color: red[500], transform: "translate(-50%, -100%)" }}
              {...{ lat: -22.1276, lng: -51.3856 }}
              onClick={() => console.log("clicou")}
            />

            <Room
              fontSize="large"
              style={{ color: red[500], transform: "translate(-50%, -100%)" }}
              {...{ lat: -23.2657, lng: -47.2991 }}
              onClick={() => console.log("clicou")}
            />

            <Room
              fontSize="large"
              style={{ color: red[500], transform: "translate(-50%, -100%)" }}
              {...{ lat: -23.3645, lng: -46.7403 }}
              onClick={() => console.log("clicou")}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}
