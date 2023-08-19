import "./CvInfo.css";
import { useState } from "react";
import foto from "../../public/foto.jpg";

function CvInfo() {
  const [contenidoVisible, setContendoVisible] = useState(false);

  const toggleContent = () => {
    setContendoVisible(!contenidoVisible);
  };

  return (
    <div className="cvBloque">
      <div className="infoBloque">
        <picture className="infoFoto">
          <img src={foto} alt="" />
        </picture>
        <div className="infoTexto">
          <div className="infoDatos">
            <h2>CONTACTO</h2>
            <div className="line"></div>
            <div className="infoContacto">
              <div className="circulo">
                <i class="bx bxs-mobile"></i>
              </div>
              <p>+51 902 071 245</p>
            </div>
            <div className="infoContacto">
              <div className="circulo">
                <i class="bx bxs-envelope"></i>
              </div>
              <p>jasovi15@gmail.com</p>
            </div>
            <div className="infoContacto">
              <div className="circulo">
                <i class="bx bxs-map"></i>
              </div>
              <p>
                Mz. “D” Lt. 21 <br></br>Urb. El Olivar, S.M.P.
              </p>
            </div>
            <div className="infoContacto">
              <div className="circulo">
                <i class="bx bxs-cake"></i>
              </div>
              <p>01 de Abril de 1995</p>
            </div>
          </div>
          <div className="infoDatos">
            <h2>EDUCACION</h2>
            <div className="line"></div>
            <div className="infoEdu1">
              <h3>UNIVERSIDAD PRIVADA DEL NORTE</h3>
              <p>2016 - Actualmente Administración y Marketing - 6° ciclo</p>
            </div>
            <div className="infoEdu2">
              <h3>TOULOUSE LAUTREC</h3>
              <p>Curso Marketing Digital - 2018 SEP 2017 - MAR 2018</p>
            </div>
          </div>
          <div className="infoDatos">
            <h2>HABILIDADES</h2>
            <div className="line"></div>
            <div className="infoHabilidades">
              <h3>BLANDAS</h3>
              <p>// Trabajo en Equipo</p>
              <p>// Creatividad</p>
              <p>// Empatia</p>
            </div>
            <div className="infoHabilidades">
              <h3>TECNICAS</h3>
              <p>// Ingles - Intermedio</p>
              <p>// Microsoft Office - Intermedio</p>
              <p>// Diseño Grafico - Basico</p>
            </div>
          </div>
        </div>
      </div>
      <div className="descripBloque">
        <div className="cabecera">
          <h1>JOSUE SOLANO V.</h1>
          <h3>FULL STACK DELOVEPERS</h3>
          <p>
            Soy un desarrollador Front-End con conocimientos en Administración y
            Maketing desde niño he tenido un espíritu emprendedor que me impulso
            a iniciar pequeños negocios y que me enseñaron a enfrentar desafíos.
            Ahora con la tecnología combine mis experiencias vividas con
            soluciones creativas y estoy buscando oportunidades para aplicar mis
            conocimientos en el desarrollo de experiencias digitales
            impactantes.
          </p>
        </div>
        <button onClick={toggleContent}>
          {contenidoVisible ? "Ocultar Experiencia" : "Mostrar Experiencia"}
        </button>
        {contenidoVisible && 
        <div className="cuerpo">
            <h2>EXPERIENCIA LABORAL</h2>
          <div className="line"></div>
          <div className="trabajo">
            <h3>
              <b>BRANDINT S.A.C.</b> / ASISTENTE DE MARKETING
            </h3>
            <h4>MAY 2022 - AGO 2022</h4>
            <p>• Ejecutor operativo del plan de marketing</p>
            <p>• Construcción de comunidad e Interacción con los usuarios</p>
            <p>
              • Apoyo en la creación del plan de contenidos creativos - grilla
            </p>
            <p>• Supervisión del status de las tiendas de la marca</p>
            <p>• Seguimiento y evaluación de las métricas</p>
          </div>
          <div className="trabajo">
            <h3>
              <b>TOTTUS S.A.</b> / ASISTENTE DE OPERACIONES WEB.COM
            </h3>
            <h4>AGO 2021 - MAY 2022</h4>
            <p>
              • Trabaje a la par con el encargado de MKT Digital dando soporte
            </p>
            <p>• Realice el monitoreo de los sistemas y medios de pago</p>
            <p>• Realizar la gestión de incidentes y reclamos</p>
            <p>• Reportar órdenes de compra con error al área encargada</p>
          </div>
          <div className="trabajo">
            <h3>
              <b>ORION S.A.C.</b> / ASISTENTE ADMINISTRATIVO
            </h3>
            <h4>AGO 2019 - ABR 2020</h4>
            <p>• Registro de gastos mensuales de la empresa</p>
            <p>• Pagos al personal planilla</p>
            <p>• Encargado de documentos administrativos y contables</p>
            <p>• Realizar la cobranza a proveedores por facturas pendientes</p>
            <p>• Organizar la agenda del Gerente</p>
          </div>
          <div className="trabajo">
            <h3>
              <b>SODALA S.A.C.</b> / ASISTENTE DE RECURSOS HUMANOS
            </h3>
            <h4>ENE 2018 - JUN 2018</h4>
            <p>• Registro de documentos de los trabajadores </p>
            <p>• Redactar y emitir memorándum, cartas, informes </p>
            <p>• Capacitación al nuevo personal </p>
            <p>• Organizar la agenda del Administrador</p>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default CvInfo;
