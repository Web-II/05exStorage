# 05exStorage
## Oefening 1:  Countdown.


1	  De bedoeling van deze oefening is om in de local storage in je browser belangrijke momenten (milestones) voor jou in de toekomst bij te houden. 

  •	Als op de + geklikt wordt, wordt de milestone toegevoegd aan de local storage op voorwaarde dat de datum groter is dan vandaag

  •	Als op Clear all milestones geklikt wordt, worden alle milestones verwijderd uit de local storage


2	Deze oefening is volledig analoog aan het stickies voorbeeld. Je kan hiervan gebruik maken.

![countdown1.png](/docs/countdown1.png 'Voorbeeld')


3	De klasse Milestone is reeds gegeven


4	De class MilestonesComponent bevat alle data en acties die op de pagina plaatsvinden. Het bevat volgende properties en methodes : 

  •	milestones: een array van milestones

  •	storage : verwijst naar localStorage

  •	getMilestonesFromStorage: haalt de array op uit storage

  •	setMilestonesInStorage: stopt de milestones in de storage

  •	addMilestone: maakt een nieuwe milestone aan en plaatst deze in de storage

  •	deleteMilestone: verwijdert 1 milestone uit de array milestones en plaatst de nieuwe array in de storage

  •	clearMilestones: maakt de array milestones leeg en verwijdert de milestones uit de storage

  •	toHTML: overloopt alle milestones en toont deze.


5	De functie init haalt initieel de milestones op in de storage en toont die in HTML + de eventhandlers worden ingesteld


6	Een milestone toevoegen
  
  •	Voeg code toe aan de functie addMilestone()
	Als de datum kleiner is of gelijk is aan vandaag, verschijnt een alert met de foutmelding: This milestone is already in the past and isn't added
  Als de datum groter is dan vandaag, wordt de nieuwe milestone toegevoegd aan de array.
Wanneer de milestone succesvol werd toegevoegd, wordt de functie toHTML opgeroepen.
  
  •	Voeg code toe aan de functie init() zodat een nieuwe milestone wordt toegevoegd als op de knop met id “add” wordt geklikt

  •	Bekijk de bestaande code bij de functie toHTML. Deze code zorgt ervoor dat alle milestones verschijnen als een unordered list. De volgende code wordt gebruikt om het aantal resterende dagen te berekenen

```javascript
const oneDay = 24 * 60 * 60 * 1000;
const diffDays = Math.round(Math.abs((new Date().getTime() - new Date(cursor.value.date).getTime()) / (oneDay)));
```

7	Alle milestones verwijderen
  
  •	Voeg code toe aan de functie clearMilestones()
  	De array wordt leeg gemaakt
  	De functie toHTML wordt opgeroepen 
  •	Voeg code toe aan de functie init() zodat de functie clearMilestones() wordt uitgevoerd als op de knop met id “clear” wordt geklikt


8	Een milestone verwijderen op positie position
  
  •	Voeg code toe aan de functie deleteMilestone() 
    De milestone op positie position wordt verwijderd uit de array
    De functie toHTML wordt opgeroepen
  
  •	Voeg code toe aan de functie toHTML() zodat bij het overlopen van de milestones in de array er gecontroleerd  wordt of de datum kleiner is dan of gelijk is aan de datum van vandaag.

    Als de datum kleiner is dan of gelijk is aan de datum van vandaag, wordt die milestone verwijderd en wordt de volgende boodschap weggeschreven naar de console: Milestone naam_van_de_milestone at date_van_de_milestone was removed

    Als de datum groter is dan vandaag gebeurt er niets.
Probeer dit uit door in de functie addMilestone de controle op de datum tijdelijk in commentaar te zetten, waardoor je tijdelijk wel milestones kunt toevoegen met een datum kleiner dan vandaag. Bij het uitschrijven, zal je zien dat de foutmelding verschijnt in de console.


9	Storage
 
 •	Voeg code toe aan de functie getMilestonesFromStorage om de milestones op te halen uit de storage en in de array milestones te stoppen

  •	Voeg code toe aan de functie setMilestonesInStorage om de milestones in de storage te stoppen

  •	Voeg code toe aan
    o	addMilestone()  om de veranderde array in de storage te stoppen (maak gebruik van setMilestonesInStorage)
    o	deleteMilestone()  om de veranderde array in de storage te stoppen (maak gebruik van setMilestonesInStorage)
    o	clearMilestone()  om de array uit de storage te verwijderen

  •	Test dit uit. Bekijk de storage via de Developer Tools


10	Storage – Vervolg

  •	Voeg helemaal vooraan de init() functie code toe
    o	Als de browser geen localStorage ondersteunt, moeten de knoppen add en clear disabled worden
    o	Anders worden de milestones opgehaald uit de storage en getoond (met behulp van de functie toHTML)
