## Obiettivo

Lo scopo di questa valutazione è quello di esaminare le tue competenze tecniche, la
capacità di risolvere problemi e l’approccio generale nello sviluppo di una soluzione
frontend. Il risultato prodotto sarà oggetto di discussione, ci mostrerai le soluzioni e
le scelte prese per far fronte alle problematiche incontrate.

## Requisiti di qualità minima

- Codice pulito, ben organizzato e manutenibile
- Pulizia e coerenza dei commit
- Design chiaro e di facile interpretazione per l’utente finale
- Mobile first

## Task
Realizzare una web app React e TypeScript che visualizzi la lista dei partecipanti di
un evento PowsUp!.
Hai a disposizione un endpoint che restituisce la lista dei partecipanti e le relative
informazioni personali, come id, nome fursona, immagine, tipo biglietto etc.
URL API: http://lesgoski.ddns.net:10621/api/pun25/attendees/flat-list
Documentazione API: http://lesgoski.ddns.net:10621/docs
Le prestazioni sono importanti, specialmente quando è necessario supportare
dispositivi con notevoli differenze di performance, ci aspettiamo che questa
applicazione possa funzionare su dispositivi di fascia bassa in condizioni di rete
poco affidabile.
Sono ammesse librerie di terze parti, purché giustificate e che risolvano reali
problemi che hai incontrato durante lo sviluppo.
Strumenti come V0 e generatori AI, per questo test non sono ammessi. Non ci
aspettiamo un CSS elaborato e con troppi fronzoli, puntiamo ad un’interfaccia
chiara, minimale e pulita. È ammesso l’utilizzo di framework CSS a piacimento e
component library (a patto che sia codice prevalentemente scritto da te), o se
preferisci CSS puro. Utilizza TypeScript creando interfaces e types adeguati; ricorda
il detto “fidarsi è bene ma non fidarsi è meglio”, i dati restituiti dal backend
potrebbero essere inconsistenti o incompleti, typescript non assicura l’integrità dei
dati a runtime.
1
Punti bonus
● Possibilità di filtrare gli utenti per nome
● Possibilità di filtrare gli utenti per le principali caratteristiche, come stato di
check-in, tipologia o flag fursuiter.
Consegna
Un link alla repository con il codice sorgente, contenente un breve README che
illustri le tecnologie utilizzate, le principali scelte implementative e spieghi come
avviare il progetto.
