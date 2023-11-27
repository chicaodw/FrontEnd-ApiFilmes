import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(dataString: string | number | Date) {
    const dataFormatada = format(new Date(dataString), 'dd/MM/yyyy', { locale: ptBR });
    return dataFormatada;
}

export function convertMinutes(minutes : number){
    const hours = Math.floor(minutes / 60);
    const remaining = minutes % 60;

    const formatHours = hours > 0 ? `${hours}h`: '';
    const formatMinutes = remaining > 1 ? `${remaining}m` : '';

    return `${formatHours}${formatMinutes}`;
}
