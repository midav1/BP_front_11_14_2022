
export default function DateService(_date) {
         let  d= new Date(_date);
        let date = d.getDate();
        let month = d.getMonth() + 1; 
     let year = d.getFullYear();
     let newDate = year + "-" + month + "-" + date;
     return (
        newDate
  )
}
