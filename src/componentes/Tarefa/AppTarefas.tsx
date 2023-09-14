import List from "@mui/material/List";

import { InterfaceTarefa } from "../../interfaces/Tarefa";
import { TarefaListaItem } from "./../Tarefa/TarefaListaItem.tsx";

const AppTarefas = (props: {
	tarefa: any;
	tarefas: Array<InterfaceTarefa>;
	funcaoApagar: (tarefa: InterfaceTarefa) => void;
	funcaoFinalizar: (id: number) => void;
}) => {
	return (
		<List sx={{ width: "100%", bgcolor: "background.paper" }}>
			{props.tarefas.map((tarefa) => (
				<TarefaListaItem
					key={tarefa.id}
					tarefa={tarefa}
					cliqueParaApagar={props.funcaoApagar}
					cliqueParaFinalizar={props.funcaoFinalizar}
				/>
			))}
		</List>
	);
};

export default AppTarefas;
