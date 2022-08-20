function magNumber(info){
    switch(info[0]){
        case 'PT92':
          return Math.ceil((info[1]*3)/17);
          break;
        case 'M4A1':
          return Math.ceil((info[1]*3)/30);
          break;
        case 'M16A2': 
          return Math.ceil((info[1]*3)/30);
          break;
        case 'PSG1':
          return Math.ceil((info[1]*3)/5);
          break;
        default:
          'Not in equipment list'
          break;
    }
  }  