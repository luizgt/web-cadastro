(this["webpackJsonpweb-cadastro"]=this["webpackJsonpweb-cadastro"]||[]).push([[0],{24:function(e,a,o){},27:function(e,a,o){},33:function(e,a,o){"use strict";o.r(a);var c=o(2),i=o(1),s=o.n(i),r=o(3),t=o.n(r),n=(o(24),o(11)),d=o(5),u=o(9),l=o(17),f=(o(27),o(16)),p=o.n(f),m=o(14),b=o.n(m),h=[{dado:"Cardiopatia",valor:1},{dado:"Def. auditiva",valor:2},{dado:"Def. fisica",valor:3},{dado:"Def. visual",valor:4},{dado:"Def. mental",valor:5},{dado:"Dengue",valor:6},{dado:"Dep. qu\xedmico",valor:7},{dado:"Depress\xe3o",valor:8},{dado:"Dist linguagem",valor:9},{dado:"Fibromialgia",valor:10},{dado:"Hanseniase",valor:11},{dado:"Hipertensao",valor:12},{dado:"Mal de Parkinson",valor:13},{dado:"Tuberculose",valor:14},{dado:"AIDS",valor:15}],v=[{dado:"A\xe7\xe3o jovem",valor:1},{dado:"Bolsa jovem",valor:2},{dado:"BPC",valor:3},{dado:"Renda cidad\xe3",valor:4},{dado:"Viva leite",valor:5}],_=[{dado:"Analfabetos",valor:1},{dado:"Usu\xe1rio creche",valor:2},{dado:"Pr\xe9 p\xfablica",valor:3},{dado:"Pr\xe9 particular",valor:4},{dado:"Fun. publica",valor:5},{dado:"Fun. particular",valor:6},{dado:"M\xe9dio publico",valor:7},{dado:"M\xe9dio particular",valor:8},{dado:"Sup. publico",valor:9},{dado:"Sup. particular",valor:10}],k=[{dado:"Aposentados",valor:1},{dado:"Pensionistas",valor:2},{dado:"Desempregados",valor:3},{dado:"Emp. com\xe9rcio",valor:4},{dado:"Emp. ind\xfastria",valor:5},{dado:"Emp. servi\xe7o",valor:6},{dado:"Emp. rurais",valor:7},{dado:"Emp. p\xfablico",valor:8},{dado:"Aut\xf4nomo",valor:9},{dado:"Emp. informais",valor:10},{dado:"Ve\xedculo local",valor:11},{dado:"Ve\xedculo fora",valor:12}],j=[{dado:"Homens",valor:1},{dado:"Mulheres",valor:2},{dado:"Outros g\xeaneros",valor:3},{dado:"Menos de 1 ano",valor:4},{dado:"1 \xe0 3 anos",valor:5},{dado:"4 \xe0 5 anos",valor:6},{dado:"6 \xe0 9 anos",valor:7},{dado:"10 \xe0 15 anos",valor:8},{dado:"16 \xe0 21 anos",valor:9},{dado:"22 \xe0 45 anos",valor:10},{dado:"46 \xe0 60 anos",valor:11},{dado:"Mais de 70 anos",valor:12}],O=[{dado:"Telefone",valor:1},{dado:"Internet",valor:2}];function x(){var e=Object(i.useState)([]),a=Object(u.a)(e,2),o=a[0],s=a[1],r=Object(i.useState)([]),t=Object(u.a)(r,2),f=t[0],m=t[1],x=Object(i.useState)([]),g=Object(u.a)(x,2);g[0],g[1];return Object(i.useEffect)((function(){console.log("tudo carregado!");var e=[];fetch("https://13fab03313f9.ngrok.io/dados_coletados").then((function(e){return e.json()})).then((function(a){for(var o=0;o<a.length;o++){var c={endereco:{rua:a[o].rua,numero:a[o].numero,complemento:a[o].complemento,bairro:a[o].bairro,cidade:a[o].cidade},coords:{lat:a[o].lat,lng:a[o].lng},beneficios:{acao_jovem:a[o].acao_jovem,bolsa_jovem:a[o].bolsa_jovem,bpc:a[o].bpc,renda_cidada:a[o].renda_cidada,viva_leite:a[o].viva_leite},comunicacao:{telefone:a[o].telefone,internet:a[o].internet},edificacao:{estrutura:a[o].id_estrutura,revestimentoExterno:a[o].id_revestimentoExterno,piso:a[o].id_piso,forro:a[o].id_forro,revestimentoInterno:a[o].id_revestimentoInterno,pintura:a[o].id_pintura,instalacaoEH:a[o].id_instalacaoEH,cobertura:a[o].id_cobertura,posicao:a[o].id_posicao,situacaoConstrucao:a[o].id_situcaoConstrucao,esquadrias:a[o].id_esquadrias,estadoConservacao:a[o].id_estadoConservacao},educacao:{analfabetos:a[o].analfabetos,usuario_creche:a[o].usuario_creche,pre_publica:a[o].pre_publica,pre_particular:a[o].pre_particular,fundamental_publica:a[o].fundamental_publica,fundamental_particular:a[o].fundamental_particular,medio_publico:a[o].medio_publico,medio_particular:a[o].medio_particular,superior_publico:a[o].superior_publico,superior_particular:a[o].superior_particular},lote:{id_ocupacao:a[o].id_ocupacao,id_patrimonio:a[o].id_patrimonio,id_relevo:a[o].id_relevo,id_limTestada:a[o].id_limTestada,id_uso:a[o].id_uso,id_caracterizacao:a[o].id_caracterizacao},residentes:{homens:a[o].homens,mulheres:a[o].mulheres,outros_generos:a[o].outros_generos,menos_um:a[o].menos_um,um_a_tres:a[o].um_a_tres,quatro_a_cinco:a[o].quatro_a_cinco,seis_a_nove:a[o].seis_a_nove,dez_a_quinze:a[o].dez_a_quinze,dezesseis_a_vinteum:a[o].dezesseis_a_vinteum,vintedois_a_quarentacinco:a[o].vintedois_a_quarentacinco,quarentaseis_a_sessenta:a[o].quarentaseis_a_sessenta,mais_sessenta:a[o].mais_sessenta},saude:{cardiopatia:a[o].cardiopatia,def_auditiva:a[o].def_auditiva,def_fisica:a[o].def_fisica,def_visual:a[o].def_visual,def_mental:a[o].def_mental,dengue:a[o].dengue,dep_quimico:a[o].dep_quimico,depressao:a[o].depressao,dist_linguagem:a[o].dist_linguagem,fibromialgia:a[o].fibromialgia,hanseniase:a[o].hanseniase,hipertensao:a[o].hipertensao,mal_parkinson:a[o].mal_parkinson,tuberculose:a[o].tuberculose,aids:a[o].aids},socioeconomicos:{aposentados:a[o].aposentados,pensionistas:a[o].pensionistas,desempregados:a[o].desempregados,emp_comercio:a[o].emp_comercio,emp_industria:a[o].emp_industria,emp_servico:a[o].emp_servico,emp_rurais:a[o].emp_rurais,emp_publico:a[o].emp_publico,autonomo:a[o].autonomo,emp_informais:a[o].emp_informais,vei_local:a[o].vei_local,vei_fora:a[o].vei_fora}};e.push(c)}s([].concat(e)),m([].concat(e))}))}),[]),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"col-principal",children:[Object(c.jsxs)("div",{className:"col-esq",children:[Object(c.jsx)("div",{className:"header-colEsq",children:"Filtros"}),Object(c.jsx)("div",{className:"linha-colEsq",children:Object(c.jsx)("button",{className:"botao-esq",onClick:function(){s(Object(d.a)(f));for(var e=1;e<11;e++){document.getElementById("check-educacao".concat(e)).checked=!1}for(var a=1;a<16;a++){document.getElementById("check-saude".concat(a)).checked=!1}for(var o=1;o<6;o++){document.getElementById("check-beneficios".concat(o)).checked=!1}for(var c=1;c<13;c++){document.getElementById("check-socioeconomicos".concat(c)).checked=!1}for(var i=1;i<13;i++){document.getElementById("check-residentes".concat(i)).checked=!1}for(var r=1;r<3;r++){document.getElementById("check-comunicacao".concat(r)).checked=!1}},children:"Limpar Filtro"})}),Object(c.jsxs)("div",{className:"div-sessao",children:[Object(c.jsx)("div",{className:"titulo-sessao",children:Object(c.jsx)("p",{children:"Educa\xe7\xe3o"})}),_.map((function(e,a){return Object(c.jsx)("div",{className:"linha-colEsq",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"checkbox",id:"check-educacao".concat(e.valor),onClick:function(){return E(1,e.valor)},value:e.valor},a)," ",e.dado]})})}))]}),Object(c.jsxs)("div",{className:"div-sessao",children:[Object(c.jsx)("div",{className:"titulo-sessao",children:Object(c.jsx)("p",{children:"Sa\xfade"})}),h.map((function(e,a){return Object(c.jsx)("div",{className:"linha-colEsq",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"checkbox",id:"check-saude".concat(e.valor),value:e.valor,onClick:function(){return E(3,e.valor)}},a),e.dado]})})}))]}),Object(c.jsxs)("div",{className:"div-sessao",children:[Object(c.jsx)("div",{className:"titulo-sessao",children:Object(c.jsx)("p",{children:"Benef\xedcios"})}),v.map((function(e,a){return Object(c.jsx)("div",{className:"linha-colEsq",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"checkbox",id:"check-beneficios".concat(e.valor),value:e.valor,onClick:function(){return E(4,e.valor)}},a)," ",e.dado]})})}))]}),Object(c.jsxs)("div",{className:"div-sessao",children:[Object(c.jsx)("div",{className:"titulo-sessao",children:Object(c.jsx)("p",{children:"Socioecon\xf4mico"})}),k.map((function(e,a){return Object(c.jsx)("div",{className:"linha-colEsq",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"checkbox",id:"check-socioeconomicos".concat(e.valor),value:e.dado,onClick:function(){return E(5,e.valor)}},a)," ",e.dado]})})}))]}),Object(c.jsxs)("div",{className:"div-sessao",children:[Object(c.jsx)("div",{className:"titulo-sessao",children:Object(c.jsx)("p",{children:"Residentes"})}),j.map((function(e,a){return Object(c.jsx)("div",{className:"linha-colEsq",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"checkbox",id:"check-residentes".concat(e.valor),value:e.valor,onClick:function(){return E(6,e.valor)}},a)," ",e.dado]})})}))]}),Object(c.jsxs)("div",{className:"div-sessao",children:[Object(c.jsx)("div",{className:"titulo-sessao",children:Object(c.jsx)("p",{children:"Comunica\xe7\xe3o"})}),O.map((function(e,a){return Object(c.jsx)("div",{className:"linha-colEsq",children:Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"checkbox",className:"checkbox",id:"check-comunicacao".concat(e.valor),value:e.valor,onClick:function(){return E(7,e.valor)}},a)," ",e.dado]})})}))]})]}),Object(c.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(c.jsx)(l.a,{bootstrapURLKeys:{key:"AIzaSyCYQkLGHjY6-zt2TJwa3__boSFhPolOke4"},defaultCenter:{lat:-21.95481972847981,lng:-51.41548096623229},defaultZoom:16,children:o.map((function(e,a){return Object(c.jsx)(b.a,Object(n.a)(Object(n.a)({fontSize:"large",style:{color:p.a[400],transform:"translate(-50%, -100%)"}},{lat:e.coords.lat,lng:e.coords.lng}),{},{onClick:function(){return console.log("clicou no "+a)}}),a)}))})})]})});function E(e,a){switch(e){case 1:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-educacao".concat(e)).checked){switch(e){case 1:c=o.filter((function(e){if(e.educacao.analfabetos>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.educacao.usuario_creche>0)return e;a.dados.push(e)}));break;case 3:c=o.filter((function(e){if(e.educacao.pre_publica>0)return e;a.dados.push(e)}));break;case 4:c=o.filter((function(e){if(e.educacao.pre_particular>0)return e;a.dados.push(e)}));break;case 5:c=o.filter((function(e){if(e.educacao.fundamental_publica>0)return e;a.dados.push(e)}));break;case 6:c=o.filter((function(e){if(e.educacao.fundamental_particular>0)return e;a.dados.push(e)}));break;case 7:c=o.filter((function(e){if(e.educacao.medio_publico>0)return e;a.dados.push(e)}));break;case 8:c=o.filter((function(e){if(e.educacao.medio_particular>0)return e;a.dados.push(e)}));break;case 9:c=o.filter((function(e){if(e.educacao.superior_publico>0)return e;a.dados.push(e)}));break;case 10:c=o.filter((function(e){if(e.educacao.superior_particular>0)return e;a.dados.push(e)}))}console.log(c),s(Object(d.a)(c))}}(a);case 2:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-edificacao".concat(e)).checked){switch(console.log("Filtrado"),e){case 1:c=o.filter((function(e){if(e.edificacao.estrutura>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.edificacao.revestimentoExterno>0)return e;a.dados.push(e)}));break;case 3:c=o.filter((function(e){if(e.edificacao.piso>0)return e;a.dados.push(e)}));break;case 4:c=o.filter((function(e){if(e.edificacao.forro>0)return e;a.dados.push(e)}));break;case 5:c=o.filter((function(e){if(e.edificacao.revestimentoInterno>0)return e;a.dados.push(e)}));break;case 6:c=o.filter((function(e){if(e.edificacao.pintura>0)return e;a.dados.push(e)}));break;case 7:c=o.filter((function(e){if(e.edificacao.instalacaoEH>0)return e;a.dados.push(e)}));break;case 8:c=o.filter((function(e){if(e.edificacao.cobertura>0)return e;a.dados.push(e)}));break;case 9:c=o.filter((function(e){if(e.edificacao.posicao>0)return e;a.dados.push(e)}));break;case 10:c=o.filter((function(e){if(e.edificacao.situacaoConstrucao>0)return e;a.dados.push(e)}));break;case 11:c=o.filter((function(e){if(e.edificacao.esquadrias>0)return e;a.dados.push(e)}));break;case 12:c=o.filter((function(e){if(e.edificacao.estadoConservacao>0)return e;a.dados.push(e)}))}s(Object(d.a)(c))}else console.log("desfiltrar!")}(a);case 3:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-saude".concat(e)).checked){switch(e){case 1:c=o.filter((function(e){if(e.saude.cardiopatia>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.saude.def_auditiva>0)return e;a.dados.push(e)}));break;case 3:c=o.filter((function(e){if(e.saude.def_fisica>0)return e;a.dados.push(e)}));break;case 4:c=o.filter((function(e){if(e.saude.def_visual>0)return e;a.dados.push(e)}));break;case 5:c=o.filter((function(e){if(e.saude.def_mental>0)return e;a.dados.push(e)}));break;case 6:c=o.filter((function(e){if(e.saude.dengue>0)return e;a.dados.push(e)}));break;case 7:c=o.filter((function(e){if(e.saude.dep_quimico>0)return e;a.dados.push(e)}));break;case 8:c=o.filter((function(e){if(e.saude.depressao>0)return e;a.dados.push(e)}));break;case 9:c=o.filter((function(e){if(e.saude.dist_linguagem>0)return e;a.dados.push(e)}));break;case 10:c=o.filter((function(e){if(e.saude.fibromialgia>0)return e;a.dados.push(e)}));break;case 11:c=o.filter((function(e){if(e.saude.hanseniase>0)return e;a.dados.push(e)}));break;case 12:c=o.filter((function(e){if(e.saude.hipertensao>0)return e;a.dados.push(e)}));break;case 13:c=o.filter((function(e){if(e.saude.mal_parkinson>0)return e;a.dados.push(e)}));break;case 14:c=o.filter((function(e){if(e.saude.tuberculose>0)return e;a.dados.push(e)}));break;case 15:c=o.filter((function(e){if(e.saude.aids>0)return e;a.dados.push(e)}))}s(Object(d.a)(c))}}(a);case 4:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-beneficios".concat(e)).checked){switch(e){case 1:c=o.filter((function(e){if(e.beneficios.acao_jovem>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.beneficios.bolsa_jovem>0)return e;a.dados.push(e)}));break;case 3:c=o.filter((function(e){if(e.beneficios.bpc>0)return e;a.dados.push(e)}));break;case 4:c=o.filter((function(e){if(e.beneficios.renda_cidada>0)return e;a.dados.push(e)}));break;case 5:c=o.filter((function(e){if(e.beneficios.viva_leite>0)return e;a.dados.push(e)}))}s(Object(d.a)(c))}}(a);case 5:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-socioeconomicos".concat(e)).checked){switch(e){case 1:c=o.filter((function(e){if(e.socioeconomicos.aposentados>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.socioeconomicos.pensionistas>0)return e;a.dados.push(e)}));break;case 3:c=o.filter((function(e){if(e.socioeconomicos.desempregados>0)return e;a.dados.push(e)}));break;case 4:c=o.filter((function(e){if(e.socioeconomicos.emp_comercio>0)return e;a.dados.push(e)}));break;case 5:c=o.filter((function(e){if(e.socioeconomicos.emp_industria>0)return e;a.dados.push(e)}));break;case 6:c=o.filter((function(e){if(e.socioeconomicos.emp_servico>0)return e;a.dados.push(e)}));break;case 7:c=o.filter((function(e){if(e.socioeconomicos.emp_rurais>0)return e;a.dados.push(e)}));break;case 8:c=o.filter((function(e){if(e.socioeconomicos.emp_publico>0)return e;a.dados.push(e)}));break;case 9:c=o.filter((function(e){if(e.socioeconomicos.autonomo>0)return e;a.dados.push(e)}));break;case 10:c=o.filter((function(e){if(e.socioeconomicos.emp_informais>0)return e;a.dados.push(e)}));break;case 11:c=o.filter((function(e){if(e.socioeconomicos.vei_local>0)return e;a.dados.push(e)}));break;case 12:c=o.filter((function(e){if(e.socioeconomicos.vei_fora>0)return e;a.dados.push(e)}))}s(Object(d.a)(c))}}(a);case 6:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-residentes".concat(e)).checked){switch(e){case 1:c=o.filter((function(e){if(e.residentes.homens>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.residentes.mulheres>0)return e;a.dados.push(e)}));break;case 3:c=o.filter((function(e){if(e.residentes.outros_generos>0)return e;a.dados.push(e)}));break;case 4:c=o.filter((function(e){if(e.residentes.menos_um>0)return e;a.dados.push(e)}));break;case 5:c=o.filter((function(e){if(e.residentes.um_a_tres>0)return e;a.dados.push(e)}));break;case 6:c=o.filter((function(e){if(e.residentes.quatro_a_cinco>0)return e;a.dados.push(e)}));break;case 7:c=o.filter((function(e){if(e.residentes.seis_a_nove>0)return e;a.dados.push(e)}));break;case 8:c=o.filter((function(e){if(e.residentes.dez_a_quinze>0)return e;a.dados.push(e)}));break;case 9:c=o.filter((function(e){if(e.residentes.dezesseis_a_vinteum>0)return e;a.dados.push(e)}));break;case 10:c=o.filter((function(e){if(e.residentes.vintedois_a_quarentacinco>0)return e;a.dados.push(e)}));break;case 11:c=o.filter((function(e){if(e.residentes.quarentaseis_a_sessenta>0)return e;a.dados.push(e)}));break;case 12:c=o.filter((function(e){if(e.residentes.mais_sessenta>0)return e;a.dados.push(e)}))}s(Object(d.a)(c))}}(a);case 7:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-comunicacao".concat(e)).checked){switch(e){case 1:c=o.filter((function(e){if(e.comunicacao.telefone>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.comunicacao.internet>0)return e;a.dados.push(e)}))}s(Object(d.a)(c))}}(a);case 8:return void function(e){var a={sessao:1,item:e,dados:[]},c=[];if(document.getElementById("check-lote".concat(e)).checked){switch(e){case 1:c=o.filter((function(e){if(e.lote.id_ocupacao>0)return e;a.dados.push(e)}));break;case 2:c=o.filter((function(e){if(e.lote.id_patrimonio>0)return e;a.dados.push(e)}));break;case 3:c=o.filter((function(e){if(e.lote.id_relevo>0)return e;a.dados.push(e)}));break;case 4:c=o.filter((function(e){if(e.lote.id_limTestada>0)return e;a.dados.push(e)}));break;case 5:c=o.filter((function(e){if(e.lote.id_uso>0)return e;a.dados.push(e)}));break;case 6:c=o.filter((function(e){if(e.lote.id_caracterizacao>0)return e;a.dados.push(e)}))}s(Object(d.a)(c))}}(a)}}}var g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,44)).then((function(a){var o=a.getCLS,c=a.getFID,i=a.getFCP,s=a.getLCP,r=a.getTTFB;o(e),c(e),i(e),s(e),r(e)}))};t.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.19480e7c.chunk.js.map