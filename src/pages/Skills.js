import Progress from "../components/Progress"
export default function Skills() {
    return(

        <div className="container mt-auto mb-5">
            <div style={{marginTop:'100px'}}>
                <Progress width="80" title="Office" color="info" />
                <Progress width="80" title="Trabajo en equipo" color="info" />
                <Progress width="80" title="Resolución de problemas" color="info" />
                <Progress width="25" title="Inglés Básico" color="warning" />
            </div>

        </div>
    )
}