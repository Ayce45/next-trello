# Exercice Développeur React (Trello)

## Énoncé

- L’objectif est de recréer le plus fidèlement possible l'application fournie : [https://next-trello.web.app/](https://next-trello.web.app/).
- Le but est d’avoir une application _pixel perfect_
- Il n’est pas demandé d’améliorer l’application
- Il n’y a pas besoin de gérer quelconque base de données
- L’application sera à déployer via Firebase ([Hosting](https://firebase.google.com/products/hosting))

## Points d’attention

- La durée est libre, dans la limite de 24 heures
- Le projet doit utiliser React (≥ 16.8.0)
- Le code livré doit respecter les bonnes pratiques standards de développement (formatage, DRY, séparation des responsabilités, composants atomiques, gestion des erreurs, etc)
- Le livrable est un lien vers le repo avec en README :
  - des indications (exhaustives) sur comment installer et lancer l'application en local
  - un lien de la version en ligne
  - un rapide (et succinct) bilan de l'exercice (2 difficultés, 2 réussites, 2 évolutions possibles)

Le repository peut être hébergé sur Github ou Gitlab. Si l’accès est privé, il est possible de m’ajouter si besoin avec @sevseux

## Comment installer et lancer l'application en local

```
npm install 
```
```
npm run dev
```

## Lien de la version en ligne

https://ferway-bea2e.web.app/

## Bilan de l'exercice

- Cypress avec test de l'application dans la CI (`npm run cypress`)
- Storybook avec tous les composants de l'application, branch [feature/storybook](https://github.com/Ayce45/ferway-trello/tree/feature/storybook) (`npm run storybook`)
- Décomposition atomique de l'exercice sur [Figma](https://www.figma.com/file/hMCt82dPx92iJXznWPkQdx/Exercice-D%C3%A9veloppeur-React-(Trello)?node-id=0%3A1)

### Difficultés

- Storybook, installation compliquée dû à l'optimisation des images
- Typescript, c'était la deuxième fois, il y a beaucoup d'any

### Réussites

- Code propre
- PIXEL PERFECT

### Évolutions possibles

- Drag and drop
- Remplacer les confirm par des modals
