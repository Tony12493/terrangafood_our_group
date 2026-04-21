# Rapport d’exploration — Lab 0

## Équipe : [Nom de guerre]

---

## Architecture Backend (par DB — [abdou drame])

- Nombre de modèles : 3
Restaurant : Gère les informations des établissements (nom, adresse, image).

Plat (ou Menu) : Gère les items vendus par les restaurants.

Categorie : Gère le type de cuisine (Fast-food, Traditionnel, etc.).
- Endpoints existants :
  -Ressource : Restaurants (/api/restaurants)
GET / : Liste de tous les restaurants.
GET /:id : Détails d'un restaurant spécifique.
POST / : Créer un nouveau restaurant.
PUT /:id : Modifier un restaurant existant.
DELETE /:id : Supprimer un restaurant.
Ressource : Plats (/api/plats)
GET / : Liste de tous les plats.
GET /restaurant/:restaurantId : Tous les plats d'un restaurant précis.
GET /:id : Détails d'un plat spécifique.
POST / : Créer un nouveau plat.
PUT /:id : Modifier un plat existant.
DELETE /:id : Supprimer un plat.

  - ...
- Pattern utilisé : MVC
1.	Dans restaurantController.js :
La fonction utilise Restaurant.find().
Logique spécifique : Elle ajoute un tri via .sort({ note: -1 }), ce qui signifie que les restaurants les mieux notés apparaissent en premier dans la liste envoyée au frontend.
2.	Dans platController.js :
La fonction utilise Plat.find().
Logique spécifique : Elle utilise .populate('restaurant', 'nom'). Au lieu de renvoyer juste l'ID du restaurant, elle "remplit" le champ avec le nom réel du restaurant. C'est une jointure virtuelle qui permet au frontend d'afficher directement quel restaurant propose quel plat sans faire de deuxième appel.


---

## Architecture Frontend (par DF — [Prénom])

- Nombre de pages : ...
- Composants réutilisables :
  - Header
  - RestaurantCard
  - PlatCard
- Méthode d’appel API :
  - fetch dans `lib/api.js`

---

## Configuration (par DO — [Prénom])

- Variables d’environnement :
  - MONGODB_URI
  - PORT
- Scripts npm :
  - dev
  - start
  - seed
- Fichiers ignorés par Git :
  - node_modules
  - .env
  - .next

---

## Tests fonctionnels (par QA — [Prénom])

- Fonctionnalités testées :
  - ...
- Bugs trouvés :
  - ...

---

## Synthèse (par CP — [Prénom])

- Ce qui fonctionne bien :
  - Connexion à MongoDB
  - API fonctionnelle
  - Communication frontend/backend

- Ce qui manque (le 30%) :
  - Validation des données
  - Gestion des erreurs
  - Sécurité (authentification)
  - Optimisation des performances
  - Tests automatisés
