---
id: JavaEE
title: JavaEE
---

I can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Markdown Syntax

**Bold** _italic_ `code` [Links](#url)

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Historia i wersje
JavaEE (Java for Enterprise Edition) jest platformą do tworzenia aplikacji biznesowych agregującą zestaw specyfikacji dla języka Java, które w założeniu mają upraszczać rozwiązywanie złożonych i powtarzalnych problemów związanych z wytwarzaniem oprogramowania.

Początkowo platforma nosiła nazwę J2EE (Java 2 Platform Enterprise Edition) i zawierała tylko wąski wycinek tego co obecnie, m.in.:

JDBC jako główną specyfikację komunikacji z bazami danych
Java servlets jako komponenty komunikacji sieciowej w oparcui o protokół HTTP
JSP (Java ServerPages) pozwalające tworzyć dynamiczne strony HTML
EJB (Enterprise Java Beans) stanowiące podstawowe komponenty budowy warstwy usług aplikacji
i wiele więcej
Pierwsze wersje J2EE nie były zbytnio lubiane przez programistów. Pomimo iż oparte o Javę dawały spore możliwości skalowania, rozproszenia komponentów i ogólnej wydajności, to sam model był dosyć skomplikowany. Szczególną rolę odegrała tutaj dosyć znienawidzona technologia EJB (w wersji wcześniejszej niż 3), która była jedną z przyczyn powstania najpopularniejszego dziś frameworka Spring.

Z powodu wielu narzekań i słabnącej popularności J2EE na rzecz frameworków takich jak Spring, czy Struts, w wersji 5 postanowiono odciąć się od wcześniejszej numeracji (1.1, 1.2, itd) oraz samej nazwy J2EE zastępując ją krótszą wersją Java EE 5.

Co ciekawe w ofertach pracy nadal bardzo często pojawia się historyczne nazewnictwo, co najczęściej sugeruje, że rekruter ma niewielkie pojęcie o samej Javie.

Najważniejsze zmiany, które przyniosła Java EE 5 to zupełna zmiana modelu EJB i dodanie specyfikacji mapowania obiektowo-relacyjnego JPA bazującego na doświadczeniach frameworka Hibernate.

Wersje 6 i 7 to dalsze prace nad tym, aby platforma była coraz lżejsza i intuicyjna, wprowadzenie frameworka MVC w postaci JSF (JavaServer Faces) oraz standardu wstrzykiwania zależności pomiędzy różnymi komponentami w postaci CDI (Contexts and Dependency Injection).

Specyfikacje
Java EE to w rzeczywistości zbiór specyfikacji opisujących zachowanie poszczególnych jej elementów. Nie są to więc żadne elementy w rozumieniu semantycznym (nie znajdziemy tutaj nowych typów danych, czy nowych rodzajów pętli), a jedynie zbiór interfejsów oraz opis ich działania. Warto wymienić tutaj takie elementy jak :

CDI (Context and dependency injection) - wstrzykiwanie zależności
JPA (Java Persistence API) - mapowanie obiektowo relacyjne
EJB (Enterprise Java Beans) - warstwa usług ze wsparciem dla zarządzania transakcjami
JaxRS - specyfikacja dedykowana do tworzenia aplikacji REST
JSF (Java ServerFaces) - framework MVC integrujący się z innymi elementami JEE
...
specyfikacje jee7

Cała platforma Java EE składa się obecnie z kilkudziesięciu specyfikacji, a wersja 8 planowana na wydanie w roku 2017 doda do tego zbioru kolejne elementy i zaktualizuje już istniejące.

Co ciekawe istnieje wiele implementacji poszczególnych specyfikacji. Dlatego jako implementację JPA możemy wybrać zarówno Hibernate jak i EclipseLink i w obu przypadkach docelowe działanie powinno być identyczne. Dla każdej specyfikacji istnieje jednak tzw. implementacja referencyjna, która uznawana jest za wzorcową.

Serwery Javy EE
Wśród serwerów dedykowanych dla technologii Java EE można dokonać podziału na takie, które są wyłącznie kontenerami serwletów, np. Tomcat, czy Jetty oraz serwery z pełnym wsparciem Javy EE takie jak JBoss/Wildfly, Glassfish, WebLogic, WebSphere, które rozwijane są przez różne firmy.

Serwery JEE

Co ciekawe najpopularniejszym serwerem jest Tomcat, który jest jednym z najprostszych w tym zestawieniu. Jego popularność wynika przede wszystkim z tego, że jest on mocno powiązany ze Spring Framework. Różnica pomiędzy kontenerami serwletów, a serwerami aplikacji polega przede wszystkim na ich możliwościach. W serwerze aplikacji wszystkie biblioteki takie jak Hibernate są już nam dostarczone, w przypadku kontenerów serwletów będziemy musieli zadbać o wszystkie biblioteki samodzielnie.
