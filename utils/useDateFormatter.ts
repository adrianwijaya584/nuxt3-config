import moment from 'moment';

type DateFormat= 'DD-MM-YYYY HH:mm:ss' | 'DD-MM-YYYY'

export default (date: any, format: DateFormat)=> {
  return moment(date).format(format);
};