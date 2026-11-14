# Journal

Méthode de travail : la feuille de route a été construite avec l'aide d'une IA (Claude), qui me sert aussi de relecteur de code. Tout le code JavaScript est écrit par moi.

## 14/11/2026 – Étape 1 : terminal qui répète la saisie

Premier truc qui marche : je tape une commande, Entrée, elle s'affiche avec `>` devant et le champ se vide. Style terminal en noir/vert.

Ce que j'ai appris en faisant la review de mon code :
- J'avais écrit `document.getElementById('sortie')` sans le mettre dans une variable, et ça marchait quand même. En fait le navigateur crée une variable globale pour chaque id. Pratique mais à éviter, donc `const sortie = ...`.
- J'affichais la saisie avec `innerHTML +=`. Mauvaise idée : si on tape du HTML, il est interprété (faille XSS). Remplacé par `createElement` + `textContent` + `appendChild`.
- Ajout d'un `.gitignore` pour garder certains fichiers en local.

Prochaine étape : étape 2, reconnaître les commandes (`aide`, commande inconnue). Et ignorer les saisies vides avec `.trim()`.
