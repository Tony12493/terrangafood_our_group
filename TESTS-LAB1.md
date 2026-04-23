# Rapport de tests -- Lab 1

## Équipe : [our-group]
## Testeur : [onil] (QA)
## CP : [abdou-drame]

| # | Test | Résultat | Notes |
| --- | ---------------------------------------- | -------- | ----- |
| 1 | POST commande valide | PASS | 201 Created recu |
| 2 | POST commande sans client | PASS | 400 Donnees invalides recu |
| 3 | GET toutes les commandes | PASS | 200 OK recu |
| 4 | GET commande par ID | NON TESTE | A executer |
| 5 | GET commande ID inexistant | NON TESTE | A executer |
| 6 | PATCH en attente -> confirmee | PASS | 200 OK recu |
| 7 | PATCH confirmee -> en_livraison | NON TESTE | A executer |
| 8 | PATCH en_livraison -> livree | NON TESTE | A executer |
| 9 | PATCH transition interdite | PASS | 400 Transition de statut interdite recu |
| 10 | PATCH commande livree | NON TESTE | A executer |
| 11 | DELETE commande | NON TESTE | A executer |
| 12 | Populate restaurant visible | PASS | Objet restaurant visible dans la reponse |
| 13 | Populate plats visible | PASS | Tableau plats populate visible dans la reponse |

## Note QA provisoire

- Tests executes : 7/13
- Tests PASS : 7/7 executes
- Couverture actuelle : 53.8%
- Note provisoire : 10.8/20
