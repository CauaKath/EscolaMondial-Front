import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Classe de configuração da biblioteca de toasts
 */

toast.configure();

const tempo = 10000;

export const successfulNotify = (mensagem: string) => {
  toast.success(mensagem, {autoClose: tempo});
}

export const errorfulNotify = (mensagem: string) => {
  toast.error(mensagem, {autoClose: tempo});
}