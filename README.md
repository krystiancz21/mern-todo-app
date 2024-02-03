# Simple ToDo App 

Aplikacja przeznaczona do zarządzania zadaniami dodanymi przez użytkownika. Program oparty jest na stosie MERN, gdzie dane dotyczące użytkowników i zadań przechowywane są w nierelacyjnej bazie danych MongoDB.

**Główne funkcje aplikacji:**
* Rejestracja i logowanie użytkownika,
* Dodawanie, edytowanie oraz usuwanie zadań.
  
## Uruchomienie aplikacji
1. W oddzielnych terminalach należy wejść do folderów server i client, wykonując odpowiednio:
    ```
    cd server
    ```
    ```
    cd client
    ```

2. Następnie wprowadzamy polecenie które instaluje odpowiednie zależności:
    ```
    npm i
    ```

3. Uruchamiamy server i client'a:
    ```
    npm start
    ```

4. W tle można uruchomić MongoDBCompass, aby sprawdzić nowo dodane dane.

## Planowane aktualizacje
* Optymlizacja aplikacji i refaktoryzacja kodu
* Dodanie nowych funkcjonalności:
  * oznaczanie zadań jako wykonane,
  * tablica kanban,
  * notatki.

## Zrzuty ekranu z aplikacji 
![Screen 1](/screenshots/screenshot1.png)
![Screen 2](/screenshots/screenshot2.png)