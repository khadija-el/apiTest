export class User {
  id = 0;
  nom = '';
  prenom = '';
  tel = '00';
  email = '';
  password = '';
  isActive = 0;
  date = new Date();
  adresse = 'temara';
  imageUrl = '';
  role = '';
}


export class Blog {
  id = 0;
  titre = '';
}

export class Projet {
  id = 0;
  nom = '';
  imageUrl = '';
  date =  new Date();
  git = '';
  url = '';
  description = '';
  technologie = '';

}
