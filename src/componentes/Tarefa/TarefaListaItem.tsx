import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { InterfaceTarefa } from "../../interfaces/Tarefa";

export const TarefaListaItem = (props: {
	tarefa: InterfaceTarefa;
	cliqueParaApagar: (tarefa: InterfaceTarefa) => void;
	cliqueParaFinalizar: (identificador: number) => void;
}) => {
	const labelId = `checkbox-list-label-${props.tarefa.id}`;

	return (
		<ListItem
			key={props.tarefa.id}
			secondaryAction={
				<IconButton
					edge="end"
					aria-label="comments"
					onClick={() => props.cliqueParaApagar(props.tarefa)}
				>
					<DeleteIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton
				role={undefined}
				dense
				onClick={() => props.cliqueParaFinalizar(props.tarefa.id)}
			>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={props.tarefa.realizado}
						tabIndex={-1}
						disableRipple
						inputProps={{ "aria-labelledby": labelId }}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={props.tarefa.titulo} />
			</ListItemButton>
		</ListItem>
	);
};
