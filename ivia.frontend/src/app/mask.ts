export function MaskedDate(event: any) {

    var v = event.target.value;
    if(v.match(/[A-z]/g)){
      event.target.value = "";
    } 
    if(v.match(/^\d{2}$/) !== null) {
      event.target.value = v + '/';
    } else if(v.match(/^\d{2}\/\d{2}$/) !== null) {
      event.target.value = v + '/';
    } else if(v.match(/^\d{2}\/\d{2}\/\d{4}$/) !== null) {
      event.target.value = v ;
    }
  }