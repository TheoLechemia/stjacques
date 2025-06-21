# Installation

Installer nvm sur votre machine https://github.com/nvm-sh/nvm 
puis installer la version de npm défini dans le projet :

::
    # Depuis le répertoire racine de l'application
    nvm install
    nvm use

Installer les dépendances frontend:

::
    npm install

Désampler le fichier de configuration et le remplir:

::
    cp src/config/config.json.sample src/config/config.json

Le paramètre `INTERNAL_API_ENDPOINT` correspond  l'url de l'API
Le paramtre `DISPLAY_RANDOM_SEARCH` permet d'afficher/masquer le bloc de recherche aléatorie de la page d'accueil.


L'application est codé avec le framework Angular v16.

## Lancer le serveur de développement

Lancez `npm run start` pour lancer le serveur de développement : celui-ci sera disponible à l'addresse  `http://localhost:4200/`. Le navigateur se raffraichit automatiquement lors de modifications des fichiers sources


## Compilation

Lancer `npm run build` pour compilier le projet. Le code déployable est compilé dans le répertoire `dist/`.
