// Cuadrante de Tareas - Gisela, José Ángel y Erika
var personas = ["Gisela 16 años","José Ángel 12 años","Erika 10 años"];
var tareas = [
  {dia:"LUNES",persona:"Gisela 16 años",zona:"HABITACIÓN",texto:"Plegar ropa + Ordenar ropa y zapatos + Hacer camas + Suelos limpios, barridos y fregados + Todo bien ordenado"},
  {dia:"LUNES",persona:"José Ángel 12 años",zona:"COCINA",texto:"Fregar platos + Sacar lavadora + Tender y descolgar ropa del tendedero + Sacar basura + Trapos limpios"},
  {dia:"LUNES",persona:"Erika 10 años",zona:"COMEDOR + BAÑO",texto:"Quitar el polvo + Estanterías ordenadas + Objetos y utensilios todo recogido + Suelo barrido y fregado + Fuera polvo"},
  {dia:"MARTES",persona:"Gisela 16 años",zona:"COCINA",texto:"Fregar platos + Sacar lavadora + Tender y descolgar ropa + Sacar basura + Trapos limpios"},
  {dia:"MARTES",persona:"José Ángel 12 años",zona:"COMEDOR + BAÑO",texto:"Quitar el polvo + Estanterías ordenadas + Todo recogido + Suelo barrido y fregado"},
  {dia:"MARTES",persona:"Erika 10 años",zona:"HABITACIÓN",texto:"Plegar ropa + Ordenar ropa y zapatos + Hacer camas + Suelos limpios y fregados"},
  {dia:"MIÉRCOLES",persona:"Gisela 16 años",zona:"COMEDOR + BAÑO",texto:"Quitar polvo + Estanterías ordenadas + Todo recogido + Suelo barrido y fregado + Fuera polvo"},
  {dia:"MIÉRCOLES",persona:"José Ángel 12 años",zona:"HABITACIÓN",texto:"Plegar ropa + Ordenar ropa y zapatos + Hacer camas + Suelos limpios y fregados"},
  {dia:"MIÉRCOLES",persona:"Erika 10 años",zona:"COCINA",texto:"Fregar platos + Sacar lavadora + Tender y descolgar ropa + Sacar basura + Trapos limpios"},
  {dia:"JUEVES",persona:"Gisela 16 años",zona:"HABITACIÓN",texto:"Plegar ropa + Ordenar ropa y zapatos + Hacer camas + Suelos limpios y fregados"},
  {dia:"JUEVES",persona:"José Ángel 12 años",zona:"COCINA",texto:"Fregar platos + Sacar lavadora + Tender y descolgar ropa + Sacar basura + Trapos limpios"},
  {dia:"JUEVES",persona:"Erika 10 años",zona:"COMEDOR + BAÑO",texto:"Quitar polvo + Estanterías ordenadas + Todo recogido + Suelo barrido y fregado"},
  {dia:"VIERNES",persona:"Gisela 16 años",zona:"COCINA",texto:"Fregar platos + Sacar lavadora + Tender y descolgar ropa + Sacar basura + Trapos limpios"},
  {dia:"VIERNES",persona:"José Ángel 12 años",zona:"COMEDOR + BAÑO",texto:"Quitar polvo + Estanterías ordenadas + Todo recogido + Suelo barrido y fregado"},
  {dia:"VIERNES",persona:"Erika 10 años",zona:"HABITACIÓN",texto:"Plegar ropa + Ordenar ropa y zapatos + Hacer camas + Suelos limpios y fregados"},
  {dia:"SÁBADO",persona:"Gisela 16 años",zona:"HABITACIÓN",texto:"A FONDO: Armarios a fondo + Plegar ropa + Camas + Suelos barridos y fregados + Baño a fondo"},
  {dia:"SÁBADO",persona:"José Ángel 12 años",zona:"COCINA",texto:"A FONDO: Campana + Horno a fondo + Fregar platos + Sacar lavadora + Tender ropa + Basura + Trapos limpios"},
  {dia:"SÁBADO",persona:"Erika 10 años",zona:"COMEDOR",texto:"A FONDO: Armarios + Mesa y sillas a fondo + Estanterías ordenadas + Suelo barrido y fregado + Sábanas con ayuda"},
  {dia:"DOMINGO",persona:"Gisela 16 años",zona:"COCINA",texto:"A FONDO: Campana + Horno + Fregar platos + Sacar lavadora + Tender ropa + Basura"},
  {dia:"DOMINGO",persona:"José Ángel 12 años",zona:"COMEDOR + BAÑO",texto:"A FONDO: Armarios + Mesa y sillas + Estanterías + Quitar polvo + Suelo barrido y fregado + Baño a fondo"},
  {dia:"DOMINGO",persona:"Erika 10 años",zona:"HABITACIÓN",texto:"A FONDO: Armarios a fondo + Plegar ropa + Camas + Suelos barridos y fregados"}
];
var editando = -1;
var dias = ["LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO","DOMINGO"];

function pintar(){
  var htmlP = "";
  for(var i=0;i<personas.length;i++){
    htmlP += '<span class="pill">'+personas[i]+' <button class="mini" onclick="borrarPersona('+i+')">✕</button></span>';
  }
  document.getElementById("listaPersonas").innerHTML = htmlP;
  document.getElementById("tituloPersonas").innerHTML = "<b>"+personas.join(" • ")+"</b>";
  var sel = document.getElementById("selPersona");
  sel.innerHTML = "";
  for(var j=0;j<personas.length;j++){
    var o = document.createElement("option");
    o.text = personas[j]; o.value = personas[j];
    sel.appendChild(o);
  }
  var cab = "<th>DÍA</th>";
  for(var k=0;k<personas.length;k++){ cab += "<th>"+personas[k].toUpperCase()+"</th>"; }
  document.getElementById("cabecera").innerHTML = cab;
  var cuerpo = "";
  for(var d=0;d<dias.length;d++){
    cuerpo += "<tr><td><b>"+dias[d]+"</b></td>";
    for(var p=0;p<personas.length;p++){
      cuerpo += "<td>";
      for(var t=0;t<tareas.length;t++){
        if(tareas[t].dia===dias[d] && tareas[t].persona===personas[p]){
          cuerpo += '<div class="task"><b>'+tareas[t].zona+':</b> '+tareas[t].texto+'<br><button class="mini" onclick="editarTarea('+t+')">✏️ Editar</button> <button class="mini" onclick="borrarTarea('+t+')">🗑️ Borrar</button></div>';
        }
      }
      cuerpo += "</td>";
    }
    cuerpo += "</tr>";
  }
  document.getElementById("cuerpo").innerHTML = cuerpo;
  document.getElementById("verHorarios").innerHTML = "<br>"+document.getElementById("h1").value+"<br>"+document.getElementById("h2").value+"<br>"+document.getElementById("h3").value;
  var normas = document.getElementById("normas").value.split("\n");
  var hn = "";
  for(var n=0;n<normas.length;n++){ if(normas[n].trim()!=="") hn += "<li>"+normas[n]+"</li>"; }
  document.getElementById("verNormas").innerHTML = hn;
}
function anadirPersona(){
  var input = document.getElementById("nuevaPersona");
  var nombre = input.value.trim();
  if(nombre===""){ alert("Escribe un nombre primero"); return; }
  personas.push(nombre);
  input.value = "";
  document.getElementById("msgPersona").innerText = "✅ Añadido: " + nombre;
  pintar();
  setTimeout(function(){ document.getElementById("msgPersona").innerText=""; }, 2000);
}
function borrarPersona(i){
  if(!confirm("¿Borrar "+personas[i]+"?")) return;
  var nombre = personas[i];
  personas.splice(i,1);
  var nuevas = [];
  for(var t=0;t<tareas.length;t++){ if(tareas[t].persona!==nombre) nuevas.push(tareas[t]); }
  tareas = nuevas;
  pintar();
}
function guardarTarea(){
  var texto = document.getElementById("textoTarea").value.trim();
  if(texto===""){ alert("Escribe la tarea"); return; }
  var nueva = {dia:document.getElementById("dia").value, persona:document.getElementById("selPersona").value, zona:document.getElementById("zona").value, texto:texto};
  if(editando>=0){ tareas[editando]=nueva; editando=-1; document.getElementById("editInfo").innerText=""; }
  else { tareas.push(nueva); }
  limpiar();
  pintar();
  alert("✅ Tarea guardada");
}
function editarTarea(i){
  editando = i;
  document.getElementById("dia").value = tareas[i].dia;
  document.getElementById("selPersona").value = tareas[i].persona;
  document.getElementById("zona").value = tareas[i].zona;
  document.getElementById("textoTarea").value = tareas[i].texto;
  document.getElementById("editInfo").innerText = " ✏️ Editando, pulsa Guardar";
  window.scrollTo(0,0);
}
function borrarTarea(i){
  if(confirm("¿Borrar esta tarea?")){ tareas.splice(i,1); pintar(); }
}
function limpiar(){ document.getElementById("textoTarea").value=""; editando=-1; document.getElementById("editInfo").innerText=""; }
function rotar(){
  var nombres = personas.slice();
  if(nombres.length<2) return;
  for(var t=0;t<tareas.length;t++){
    var idx = nombres.indexOf(tareas[t].persona);
    if(idx>=0 && tareas[t].dia!=="SÁBADO" && tareas[t].dia!=="DOMINGO"){
      tareas[t].persona = nombres[(idx+1)%nombres.length];
    }
  }
  pintar();
  alert("Rotado ✓ La próxima semana cada uno empieza en otra zona.");
}
function abrirVistaPrevia(){
  var cab = "<th>DÍA</th>";
  for(var k=0;k<personas.length;k++){ cab += "<th>"+personas[k].toUpperCase()+"</th>"; }
  var cuerpo = "";
  for(var d=0;d<dias.length;d++){
    cuerpo += "<tr><td><b>"+dias[d]+"</b></td>";
    for(var p=0;p<personas.length;p++){
      cuerpo += "<td>";
      for(var t=0;t<tareas.length;t++){
        if(tareas[t].dia===dias[d] && tareas[t].persona===personas[p]){
          cuerpo += "<div style='background:#fffbeb;border:1px solid #fde68a;padding:8px;border-radius:8px;margin-bottom:6px'><b>"+tareas[t].zona+":</b> "+tareas[t].texto+"</div>";
        }
      }
      cuerpo += "</td>";
    }
    cuerpo += "</tr>";
  }
  var normas = document.getElementById("normas").value.split("\n");
  var hn = "";
  for(var n=0;n<normas.length;n++){ if(normas[n].trim()!=="") hn += "<li>"+normas[n]+"</li>"; }
  var html = "<html><head><meta charset='UTF-8'><title>Vista previa - Cuadrante</title><style>body{font-family:Arial;padding:20px}table{width:100%;border-collapse:collapse}th{background:#1a2f47;color:#fff;padding:10px}td{border:1px solid #ddd;padding:10px;vertical-align:top}button{padding:12px 20px;border-radius:999px;border:0;font-weight:800;cursor:pointer;background:#0f766e;color:#fff;font-size:16px}@media print{button{display:none}}</style></head><body>"
    + "<button onclick='window.print()'>🖨 IMPRIMIR AHORA</button> <button onclick='window.close()' style='background:#ccc;color:#000'>✕ Cerrar vista previa</button>"
    + "<h1>CUADRANTE DE TAREAS DEL HOGAR</h1><p><b>"+personas.join(" • ")+"</b></p>"
    + "<table><thead><tr>"+cab+"</tr></thead><tbody>"+cuerpo+"</tbody></table>"
    + "<div style='display:flex;gap:12px;margin-top:14px'><div style='flex:1;background:#0f766e;color:#fff;padding:14px;border-radius:12px'><b>HORARIOS</b><br>"+document.getElementById("h1").value+"<br>"+document.getElementById("h2").value+"<br>"+document.getElementById("h3").value+"</div>"
    + "<div style='flex:1.3;border:1px solid #ddd;padding:14px;border-radius:12px'><b>NORMAS</b><ol>"+hn+"</ol></div></div>"
    + "<p style='text-align:center;color:#888;font-size:12px'>Imprimir en A4 Horizontal, Ajustar a 1 página, Márgenes ninguno</p>"
    + "</body></html>";
  var win = window.open("", "_blank");
  if(!win){ alert("Tu navegador bloqueó la ventana. Permite ventanas emergentes y vuelve a pulsar Vista previa."); return; }
  win.document.write(html);
  win.document.close();
}
document.getElementById("h1").addEventListener("input", pintar);
document.getElementById("h2").addEventListener("input", pintar);
document.getElementById("h3").addEventListener("input", pintar);
document.getElementById("normas").addEventListener("input", pintar);
pintar();
