/************************
  PREP
  Challenge: TO return a welcome message in the right language as required
  
  P - one string that specifies the right language
  R - return, the right welcome message
  E - ('english'), 'Welcome';
      ('dutch'), 'Welkom';
      (('IP_ADDRESS_INVALID'), 'Welcome';
      
  P - create an object that stores all the languages;
      use a function that takes string parameter of the language and then returns the value as the greeting
************************/

function greet(language) {
  let database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
    IP_ADDRESS_INVALID: 'Welcome',
    IP_ADDRESS_NOT_FOUND: 'Welcome',
    IP_ADDRESS_REQUIRED: 'Welcome'
  }
  
  return database[language] ;
}