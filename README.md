# React + Vite: API-Daten abrufen und anzeigen

## Projektbeschreibung

Diese React-Anwendung wurde mit Vite erstellt und zeigt Daten aus einer öffentlichen API an. Die Anwendung nutzt Axios, um Daten von der [REST Countries API](https://restcountries.com/) abzurufen, und stellt diese in einer Liste dar. Zusätzlich wurde ein Suchfeld integriert, um die Daten interaktiv zu filtern.

## Aufgabenbeschreibung

### 1. Vorbereitung
- Ein neues React-Projekt wurde mit Vite erstellt.
- Axios wurde für den Datenabruf installiert: `npm install axios`.
- GitHub Copilot wurde genutzt, um den Code zu generieren und Vorschläge zu erhalten.

### 2. Funktionale Anforderungen
- **Datenabruf über eine öffentliche API**:
  - Die [REST Countries API](https://restcountries.com/) wurde gewählt, um Länderinformationen abzurufen.
  - Axios wurde verwendet, um die Daten abzurufen.
  - Die Daten werden in einem React State (`useState`) gespeichert.

### 3. Anzeigen der Daten in einer Liste
- Die Anwendung zeigt eine Liste von Ländern an, die den Ländernamen und die Hauptstadt enthält.
- Die Daten werden dynamisch aus der API geladen und in der Benutzeroberfläche dargestellt.

### 4. Einfache Interaktion
- Ein Suchfeld wurde integriert, mit dem Nutzer:innen die Liste der Länder nach Namen filtern können.
- Die Suchanfrage wird in einem React State (`useState`) gespeichert und die Liste wird in Echtzeit aktualisiert.

## Installation und Ausführung

1. **Repository klonen**:
   ```bash
   git clone <repository-url>
   cd react-mit-githubcopilot
