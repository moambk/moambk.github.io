// Détéction langage utilisateur
const userLanguage = navigator.language || navigator.userLanguage;

if (userLanguage.startsWith('fr')) {
  window.location.href = '/fr';
} else {
  window.location.href = '/en';
}