angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"45% Complete":"45% abgeschlossen","<p>The privacyIDEA API seems to be offline!</p>\n    <p>Please try to reload and otherwise contact your system administrator!</p>":"<p>Die privacyIDEA API scheint offline zu sein!</p><p>Bitte laden Sie die Seite neu. Ansonsten wenden Sie sich an Ihren System Administrator!</p>","API Key":"API-Schlüssel","API client ID":"API Client ID","About privacyIDEA Web Client":"Über das privacyIDEA WebUI","Action":"Aktion ","Active":"Aktiv","Add a new user":"Benutzer hinzufügen","Add user":"Benutzer hinzufügen","Admin":"Administrator","Admin-Realm":"Admin-Realm","Administrative actions":"Administrative Requests","All CA Connectors":"All CA Konnektoren","All Machine Resolvers":"Alle Maschinen Resolver","All Machines":"Alle Maschinen","All Policies":"Alle Richtlinien","All Realms":"Alle Realms","All Resolvers":"Alle Resolver","All tokens":"Alle Token","All users":"Alle Benutzer","An Attribute or the DN to identify the machine":"Ein Attribut oder DN zur Identifizierung der Maschine","An Attribute that contains the IP address.":"Ein Attribut, das die IP-Adresse der Maschine enthält","Application":"Applikationen","Assgined User":"Benutzer zuweisen","Assign Token":"Token zuweisen","Assign User":"Benutzer zuweisen","Assign a new token {{ newTokenObject.serial }}":"Einen neuen Token {{ newTokenObject.serial }} zuweisen","Assign token to user":"Token einem Benutzer zuweisen","Assignment State":"Zuweisung","Attach Machine":"Maschine anhängen","Attach Token":"Token anhängen","Attach to a new Machine":"An eine neue Maschine anhängen","Attribute mapping":"Attributszuordnung","Audit":"Audit","Authentication Server URI":"URI des Authentisierungsservers","Authentication failed.":"Authentisierung fehlgeschlagen.","Auto resync timeout":"Timeout für Auto Resynchronisation","Automatic resync during authentication":"Automatische Resynchronisation während der Authentifizierung","Base DN":"Base DN","Bind DN":"Bind DN","Bind Password":"Bind Passwort","Bind Type":"Bind Typ","By entering an OTP value you can get the serial number of the token.\n    You can also enter additional optional parameters, to narrow down the\n    search for the token. So you can only search within certain token types\n    or in assigned or unassigned tokens.":"Sie können die Seriennummer eines Tokens bestimmen, indem Sie einen bisher nicht gebrauchten OTP-Wert dieses Tokens eingeben. Sie können weitere Parameter eingeben, um die Suche einzuschränken. So können Sie bspw. nur innerhalb bestimmter Tokentypen oder zugewiesener oder noch nicht zugewiesener Token suchen.","CA Certificate":"Zertifikat der Zeritfizierungsstelle (CA)","CA Connector":"CA Konnektor","CA Connector name":"CA Konnektor Name","CA Key":"Schlüssel der Zertifizierungsstelle","CAs":"Zertifizierungsstellen","Cancel":"Abbrechen","Certificate (PEM)":"Zertifikat (PEM)","Certificate Directory":"Zertifikats-Verzeichnis","Certificate Signing\n                Request Directory":"Verzeichnis für Zertifikatsanfragen","Certificate Signing Request (PEM)":"Zertifikatsanforderung (PEM)","Check the PIN locally":"PIN lokal verifizieren","Clear default realm":"Standard-Realm zurücksetzen","Click <a href=\"{{ enrolledToken.googleurl.value }}\">here</a> or scan\n            the QR Code, if you\n            want to add the Token to your Google Authenticator.":"Klicken Sie <a href=\"{{ enrolledToken.googleurl.value }}\">hier</a> oder scannen Sie den QR-Code, um den Token ihrer Google Authenticator- oder FreeOTP-App hinzuzufügen.","Click <a href=\"{{ enrolledToken.motpurl.value }}\">here</a> or scan\n            the QR Code, if you\n            want to add the Token to your mOTP App like Token2.":"Klicken Sie <a href=\"{{ enrolledToken.motpurl.value }}\">hier</a> oder scannen Sie den QR-Code, um den Token Ihrer mOTP App wie \"Token2\" hinzuzufügen.","Client":"Client ","Close":"Schließen","Config":"Konfiguration","Connection Parameters":"Verbindungsparameter","Connector name":"Konnektor-Name","Count":"Zähler","Count Window":"Zählerfenster","Count Window of\n                    newly enrolled tokens":"Zählerfenster für neu ausgerollte Token","Create Policy":"Richtlinie erzeugen","Create a new LDAP Resolver":"Erzeuge einen neuen LDAP Resolver","Create a new Local CA Connector":"Erzeuge einen neuen Lokalen CA Konnektor","Create a new Passwd Resolver":"Erzeuge einen neuen Passwd Resolver","Create a new Policy":"Erzeuge eine neue Richtlinie","Create a new SCIM Resolver":"Erzeuge einen neuen SCIM Resolver","Create a new SQL Resolver":"Erzeuge einen neuen SQL Resolver","Create a new hosts Machine\n        Resolver":"Erzeuge einen neuen Hosts Maschinen Resolver","Create a new hosts Machine Resolver":"Erzeuge einen neuen Hosts Maschinen Resolver","Create default realm":"Standard-Realm anlegen","Create new Policy":"Erzeuge einen neue Richtlinie","Create realm":"Realm anlegen","Database":"Datenbank","Database Encoding":"Datenbank-Enkodierung","Default":"Standard","Default Hashlib":"Standard Hashverfahren","Default RADIUS Secret":"Standard RADIUS Secret","Default RADIUS Server":"Standard RADIUS Server","Default Remote Server":"Standard Remote privacyIDEA Server","Default Time Shift":"Standard Zeitabweichung","Default Time Step":"Standard Zeitschritt","Default Time Window":"Standard Zeitfenster","Delete":"Löschen","Delete User":"Benutzer löschen","Delete user":"Benutzer löschen","Description":"Beschreibung","Detach":"abhängen","Details for machine {{ machineid }} in Machine Resolver\n        {{ machineresolver }}":"Details zur Maschine {{ machineid }} im Maschinen-Resolver {{ machineresolver }}","Details for user {{ username }} in realm":"Details zum Benutzer {{ username }} in Realm","Disable":"Deaktivieren","Do you really want to delete the user in the user store?":"Wollen Sie wirklich den Benutzer in der Benutzerquelle löschen?","Download":"Herunterladen","Download the certificate":"Zertifikat herunterladen","Driver":"Treiber","EMail Token settings":"Email Token Einstellungen","Edit":"Bearbeiten","Edit CA Connector {{ connectorname }}":"Bearbeite CA Konnector {{ connectorname }}","Edit LDAP Machine Resolver\n        {{ resolvername }}":"Bearbeite LDAP Maschinen Resolver {{ resolvername }}","Edit LDAP Resolver {{ resolvername }}":"Bearbeite LDAP Resolver {{ resolvername }}","Edit Local CA Connector\n        {{ connectorname }}":"Bearbeite Lokalen CA Konnektor {{ connectorname }}","Edit Machine Resolvers":"Maschinen-Resolver bearbeiten","Edit Options":"Optionen bearbeiten","Edit Passwd Resolver {{ resolvername }}":"Bearbeite Passwd Resolver {{ resolvername }}","Edit Policy {{ existingPolicyname }}":"Richtline {{ existingPolicyname }} bearbeiten","Edit Resolver {{ resolvername }}":"Bearbeite Resolver {{ resolvername }}","Edit SCIM Resolver {{ resolvername }}":"Bearbeite SCIM Resolver {{ resolvername }}","Edit SQL Resolver {{ resolvername }}":"Bearbeite SQL Resolver {{ resolvername }}","Edit hosts Machine Resolver\n        {{ resolvername }}":"Bearbeite Hosts Maschinen Resolver {{ resolvername }}","Edit realms":"Realms bearbeiten","Edit user":"Benutzer bearbeiten","Edit user store":"Benutzerquelle editierbar","Email":"EMail","Email Address":"EMail-Adresse","Enable":"Aktivieren","Enroll New Token":"Neuen Token ausrollen","Enroll Token":"Token ausrollen","Enroll a new token":"Neuen Token ausrollen ","Enter OTP key...":"OTP Schlüssel eingeben...","Enter PIN again":"PIN wiederholen","Enter PIN and OTP to check the token.":"PIN und OTP eingeben um den Token zu prüfen.","Enter PIN for token":"Token-PIN eingeben","Enter first OTP value":"Ersten OTP-Wert eingeben","Enter second OTP value":"Zweiten OTP-Wert eingeben","Enter your username and password and click Log In to authenticate.":"Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein, um sich anzumelden.","Fail counter":"Fehlerzähler","Failed authentication requests per token":"Fehlgeschlagene Authentisierungen pro Token","Failed authentication requests per user":"Fehlgeschlagene Authentisierungen pro Benutzer","File name":"Dateiname","First":"Anfang","For HOTP and TOTP tokens:":"Für HOTP und TOTP Token:","For OCRA tokens:":"Für OCRA Token:","Generate OTP Key on the Server":"OTP Schlüssel auf dem Server erzeugen","Generate Request":"Zertifikatsanforderung erzeugen","Generate the Key Pair on the Server":"Das Schlüsselpaar auf dem Server erzeugen","Get Serial":"Seriennummer bestimmen","Get Serial Number":"Seriennummer bestimmen","Get Serial number by OTP value":"Seriennummer anhand eines OTP-Wertes bestimmen","Get System Documentation":"System Dokumentation","Given name":"Vorname","HOTP Token settings":"HOTP Token Einstellungen","Hash algorithm":"Hash Algorithmus","Here you can define how the SMS will be sent - via which kind of gateway.":"Hier können Sie definieren, wie SMS versendet werden - über welche Art Gateway.","Here you can define settings, that will be set as default values, when\n    enrolling a HOTP token.":"Hier können Sie Werte definieren, die als Standard-Werte für neu ausgerollte HOTP Token verwendet werden.","Here you can define settings, that will be set as default values, when\n    enrolling a TOTP token.":"Hier können Sie Werte definieren, die als Standard-Werte für neu ausgerollte TOTP-Token verwendet werden.","Here you can upload a csv file for your OATH token.\n            The file is supposed to contain one token per line.":"Hier können Sie eine CSV-Datei mit OATH Token hochladen. Diese Datei enthält einen Token pro Zeile.","Here you can upload a csv file for your Yubikey token.\n            The file is supposed to contain one token per line.":"Hier können Sie eine CSV-Datei mit Yubikey Token hochladen. Diese Datei enthält einen Token pro Zeile.","Hide Policy templates":"Vorlagen ausblenden","Hostname":"Hostname","Hostname Attribute":"Attribut für Hostnamen","IP Address":"IP-Adresse","IP Address Attribute":"Attribut für IP-Adresse","Id":"ID","If the token is lost, you can enroll a temporary password based token and\n    give the password to the user. The OTP PIN of the old token is still the\n    same.":"Wenn ein Token verloren ist, können Sie einen temporären Passwort-basierten Token ausrollen und dieses Passwort an den Benutzer geben. Dieses Passwort muss vom Benutzer mit der OTP PIN des alten Tokens kombiniert werden.","If you change the name of the policy, it will create a new policy\n                with the new name!":"Wenn Sie den Namen der Richtlinie ändern, wird eine neue Richtlinie mit diesem Namen erzeugt. Die Richtlinie mit dem alten Namen bleibt erhalten.","Import Tokens":"Token imporieren","Import tokens from a file":"Tokendatei importieren","Include SAML attributes in the\n                authentication response.":"SAML Attribute in die Authentisierungsantwort mit einbinden.","Increase the failcounter if the wrong PIN was entered.":"Den Fehlerzähler erhöhen, wenn eine falsche PIN eingegeben wurde.","Info":"Info","Last":"Ende","Leave the Bind DN empty if you want to do anonymous binding.":"Lassen Sie Bind DN leer, um einen Anonymous Bind gegen das LDAP-Verzeichnis zu machen.","Length of UID":"Länger des UID","Licensed under":"Lizenziert unter","Limit":"Begrenzung","List tokens":"Tokenliste anzeigen","Loading Machines...":"Lade Maschinen...","Loading serials...":"Laden Seriennummern...","Loading users...":"Lade Benutzer...","Log":"Logbuch","Log In":"Anmelden","Log out":"Abmelden","Login":"Anmelden","Logout\n                        {{ loggedInUser.username }} @{{ loggedInUser.realm }}":"{{ loggedInUser.username }} @{{ loggedInUser.realm }} Abmelden","Lost Token":"Verlorener Token","Machine":"Maschine","Machine ID":"Maschinen-ID","Machine ID Attribute":"Attribut für Maschinen ID","Machine Resolver":"Maschinen-Resolver","Machines":"Maschinen","Machines this token is attached to":"Maschinen, an die dieser Token angehängt ist","Mail Sender Address":"Absenderadresse","Mail Server":"Mailserver","Mail User":"Mail-Benutzer","Mail User Password":"Passwort des Mailbenutzers","Mapping":"Zuordnung","Mark the token to be lost":"Den Token als verloren markieren","Max Failcount of\n                    newly enrolled tokens":"Maximale Fehlerzähler für neu ausgerollte Token","Maxfail":"Max. Fehlerzähler ","Maximum Authentication Count":"Maximale Authentisierungen","Maximum Success Auth Count":"Maximale erfolgreiche Authentisierungen","Microsoft Internet Explorer is not supported.":"Der Microsoft Internet Explorer wird nicht unterstützt.","Mobile":"Mobiltelefon","New Connectors":"Neue Konnektoren","New Resolvers":"Neue Resolver","New {{ connectortype | uppercase }} CA Connector":"Neuer {{ connectortype | uppercase }} CA Konnektor","New {{ mResolvertype | uppercase }} Resolver":"Neuer {{ mResolvertype | uppercase }} Resolver","New {{ resolvertype }}":"Neuer {{ resolvertype }}","Next":"Weiter","No":"Nein","No Serial number could be found for OTP value {{ otp }}.":"Zu dem OTP-Wert {{ otp }} konnte keine Seriennummer gefunden werden.","No anonymous referral chasing":"Referrals werden nicht (anonym) verfolgt.","Not yet implemented!":"Noch nicht implementiert!","Number of machines: {{ $scope.machinecount }}":"Anzahl der Maschinen: {{ $sope.machinecount }}","OTP Key":"OTP Schlüssel","OTP Length":"OTP-Länge","OTP PINs do not match!":"Die OTP-PINs sind nicht gleich!","OTP Value":"OTP-Wert","OTP length":"OTP-Länge ","OTP length of\n                    newly enrolled tokens":"OTP Länge von neu ausgerollten Token","OTP validity time":"Gültigkeitszeitraum für OTP","OTRS":"OTRS","Obviously you have no realms defined. Do you want me to create a\n          default realm for you from the machines /etc/passwd?":"Offenbar haben Sie bisher keinen Realm definiert. Wollen Sie, dassaus der Datei /etc/passwd dieser Maschine automatisch ein Standard Realm erzeugt wird?","Online Documentation":"Online Dokumentation","Open new tab to create certificate\n                    request":"Ein neues Tab öffnen, um die Zertifikatsanforderung zu erstellen.","OpenSSL config file":"OpenSSL Konfigurationsdatei","Options":"Optionen","Overall token usage":"Allgemeine Tokennutzung","Override Authorization Clients":"Überschreibe den authorisierenden Client","Owncloud":"ownCloud","PIN":"PIN","Pass, if the user does not exist":"Durchwinken, wenn der Benutzer nicht existiert","Pass, if the user has no token":"Durchwinken, wenn der Benutzer keinen Token hat","Password":"Passwort","Paste the ssh PUBLIC key":"Fügen Sie hier den öffentlichen SSH-Schlüssel ein.","Phone":"Telefon","Phone number":"Telefonnummer","Please sign in":"Anmelden","Policies":"Richtlinien","Policy Name":"Richtlinienname","Policy Templates":"Vorlagen für Richtlinien","Port":"Port","Prepend the PIN in front of the OTP value\n                . Otherwise it will be post pended.":"OTP-PIN dem OTP-Wert voranstellen. Ansonsten wird die OTP-PIN hinten angehängt.","Preset Active Directory":"Active Directory vorbelegen","Preset OpenLDAP":"OpenLDAP vorbelegen","Previous":"Zurück","Progress: {{ progressPercentage }}%":"Fortschritt: {{ progressPercentage }}%","Provider Config":"Provider Konfiguration","Push Yubikey button here...":"Drücken Sie hier den Knopf auf dem Yubikey...","Quick links":"Verwandte Themen","RADIUS Secret":"RADIUS Secret","RADIUS Server":"RADIUS-Server","RADIUS Token settings":"RADIUS Token Einstellungen","RADIUS User":"RADIUS Benutzer","RADIUS dictionary file":"RADIUS dictionary Datei","Realm":"Realm ","Realm defrealm created.":"Der Realm defrealm wurde erzeugt.","Realm name":"Realmname","Realms":"Realms","Refresh":"Aktualisieren","Registration Code":"Registrierungscode","Remote Realm":"Remote Realm","Remote Resolver":"Remote Resolver","Remote Serial":"Remote Seriennummer ","Remote Server":"Remote-Server","Remote Token settings":"Remote Token Einstellungen","Remote User":"Remote Benutzer","Repeat password":"Passwort wiederholen","Reset fail counter":"Fehlerzähler zurücksetzen","Resolver":"Resolver","Resolver name":"Resolvername","Resource Server URI":"URI des Resource Servers","Resync Token":" Token resynchronisieren","Revoke":"Widerrufen","Role":"Rolle","SMS Provider":"SMS Provider","SMS Token settings":"SMS Token Einstellungen","SSH public Key":"Öffentlicher SSH Schlüssel","Save":"Speichern","Save Options":"Optionen speichern","Save Resolver":"Resolver speichern","Save System Config":"Systemkonfiguration speichern","Save Token Info":"Tokeninfo speichern","Save realms":"Realms speichern","Save resolver":"Resolver speichern","Save user":"Benutzer speichern","Scope":"Geltungsbereich","Search Filter":"Suchfilter","Secret":"Secret","Select Realm":"Realm auswählen","Select file and import":"Datei auswählen und importieren","Serial":"Seriennummer ","Serial Substring":"Teil einer Seriennummer","Server":"Server","Server URI":"Server-URI","Set PIN":" PIN setzen","Set count window":"Zählerfenster setzen","Set description":"Beschreibung setzen","Set max fail":"Max. Fehlerzähler setzen","Set sync window":"Sync-Fenster setzen","Show Policy templates":"Vorlagen anzeigen","Size Limit":"Größenbeschränkung","Some nice words...":"Ein paar nette Worte...","Statistics":"Statistik","Support":"Support","Surname":"Nachname","Sync Window":"Sync-Fenster","Sync Window of\n                    newly enrolled tokens":"Synchronisationsfenster für neu ausgerollte Token","System":"System","System Config":"Systemkonfiguration","System Config saved.":"Systemkonfiguration gespeichert.","TOTP Token settings":"TOTP Token Einstellungen","Table":"Tabelle","Test LDAP Resolver":"LDAP Resolver testen","Test SCIM Resolver":"SCIM Resolver testen","Test SQL Resolver":"SQL Resolver testen","Test Yubikey":"Yubikey testen","Test token":" Token testen","The Certificate Token lets you enroll an x509 ceritificate\n    by the given CA.":"Der Zertifikatstoken wird dazu verwendet, um x509 Zertifikat von einer konfigurierten Zertifizierungsstelle ausstellen zu lassen.","The EMail token is a challenge response token that sends the OTP value to\n    the given email address, when the correct OTP PIN was presented by the user.":"Der EMail-Token ist ein Challenge-Response-Token, der - nachdem die richtige OTP-PIN eingegeben wurde -einen OTP-Wert an die hinterlegte EMail-Adresse sendet.","The Email Token sends the OTP value to the users email address.":"Der EMail Token sendet einen OTP-Wert an die EMail-Adresse des Benutzers.","The Google Authenticator only supports an OTP length of 6.":"Der Google Authenticator unterstützt lediglich OTP Länge 6.","The Google Authenticator only supports the SHA1 algorithm.":"Der Google Authenticator unterstützt lediglich den SHA1 Algorithmus.","The HOTP Token is a event based one time password token.\n    It is described in <a href=\"https://tools.ietf.org/html/rfc4226\">RFC\n    4226</a>.":"Der HOTP Token ist ein ereignisbasierte Einmal-Passwort-Token. Er ist in <a href=\"https://tools.ietf.org/html/rfc4226\">RFC\n    4226 beschrieben</a>.","The HOTP token is an event based token. You can paste a secret key or\n    have the server generate the secret and scan the QR code with a smartphone\n    app like the Google Authenticator turning your\n    smartphone into an authentication device.":"Der HOTP Token ist ein ereignisbasierter Token. Sie können einen existierenden geheimen Schlüssel einfügen oder vom Server erzeugen lassen. Den so erzeugten geheimen OTP-Schlüssel können Sie dann mit dem Smartphone und einer App wie dem Google Authenticator oder FreeOTP vom QR-Code einscannen. So können Sie das Smartphone zu einem Authentisierungs-Token umwandeln.","The OTP key":"Der OTP-Schlüssel","The RADIUS server may include the port number.":"Der RADIUS Server kann auch einen IP Port enthalten.","The RADIUS token forwards the authentication request to another\n    RADIUS server. You can choose if the PIN should be stripped and\n    checked locally.":"Der RADIUS Token leitet die Authentisierungsanfrage an einen RADIUS-Server weiter. Sie können auswählen, ob die PIN abgetrennt und lokal überprüft werden soll.","The RADIUS token forwards the authentication request to another RADIUS\n    server.":"Der RADIUS Token leitete die Authentisierungsanfrage an einen RADIUS Server weiter. ","The RSA keys will be generated in the browser.\n                You will be taken to a new browser window, where you can\n                create the Certificate Request. The private key remains in\n                your browser and you will be able to install the certificate\n                to the browser.":"Das RSA Schlüsselpaar wird im Browser erzeugt. Es wird ein neues Browser-Fenster geöffnet, in dem Sie die Zertifikatsanforderung erstellen können. Der private Schlüssel bleibt in ihrem Browser und Sie können anschließend das Zertifikat in Ihrem Browser installieren.","The Remote token forwards the authentication request to another\n    privacyIDEA server.":"Der Remote Token leitet die Authentisierungsanfrage an einen privacyIDEA server weiter.","The SMS Token is an event based token. After the user has tried to\n    authenticate with the OTP PIN, an SMS with an OTP value is sent to the\n    users mobile phone. Then user can authenticate with this OTP value in a\n    second step.":"Der SMS Token ist ein ereignisbasierter Challenge-Response Token. Nachdem der Benutzer die korrekte OTP-PINeingegeben hat, wird eine SMS mit dem OTP-Wert an die hinterlegte Handynummer gesendet.Im zweiten Schritt kann sich der Benutzer mit diesem OTP-Wert authentisieren.","The SMS Token sends an OTP value to the mobile phone of the user.":"Der SMS Token sendet einen OTP-Wert an das Mobiltelefon des Benutzers.","The SSH Key Token stores the public SSH Key in the server.\n    This can be used to authenticate to a secure shell.":"Der SSH Key Token speichert den öffentlichen SSH Schlüssel im Server. Damit kann der Benutzer sich an Servern mittels SSH anmelden.","The Serial number for the OTP value {{ otp }} is\n    <a ui-sref=\"token.details({tokenSerial:serial})\">{{ serial }}</a>.":"Die Seriennummer für den Token mit dem OTP-Wert {{ otp }} ist <a ui-sref=\"token.details({tokenSerial:serial})\">{{ serial }}</a>.","The Simple Pass Token does not take additional arguments. You only need to\n    specify a OTP PIN.":"Der Simple Pass Token benötigt keine zusätzlichen Argumente. Sie müssen lediglich eine OTP PIN angeben.","The TOTP Token is a time based one time password token.\n    It is described in <a href=\"https://tools.ietf.org/html/rfc6238\">RFC\n    6238</a>.":"Der TOTP Token ist ein zeitbasierter Einmal-Passwort-Token.Er ist in  <a href=\"https://tools.ietf.org/html/rfc6238\">RFC\n    6238</a> beschrieben.","The TOTP token is a time based token. You can paste a secret key or\n    have the server generate the secret and scan the QR code with a\n    smartphone app like the Google Authenticator or FreeOTP turning your\n    smartphone into an authentication device.":"Der TOTP Token ist ein zeitbasierter Token. Sie können den geheimen OTP-Schlüssel hier einfügen oder den Server einen Schlüssel generieren lassen. Diesen können Sie in Ihre Smartphone-App wie Google Authenticator oder FreeOTP importieren, indem Sie den QR-Code scannen.","The Yubico Cloud mode forwards the authentication request to the\n    YubiCloud. The Yubikey needs to be registered with the YubiCloud.":"Im Yubico Cloud Modus wird die Authentisierungsanfrage an die YubiCloud weitergeleitet. Der Yubikey muss in der YubiCloud registriert sein.","The Yubico Token is a Yubikey that is registered with the YubiCloud\n    service. The Yubikey emits a 44 charater one time password. The first 12\n    characters are a unique ID which is used to bind the device to the user.":"Der Yubico Token ist ein Yubikey der in der YubiCloud registriert ist.Der Yubikey erzeugt ein 44 Zeichen langes Passwort. Die ersten 12 Zeichensind eine eindeutige ID, welche verwendet wird, um den Token dem Benutzer zuzuordnen.","The Yubikey Token is an USB device that emits an event based One Time\n    Password. You can initialize the Yubikey using the tool ykpersonalize.\n    Paste the secret hex key here.\n    You also need to choose, if the Yubikey emits the additional UID, which\n    is either 12 or 16 characters long. You can check this in the test field.":"Der Yubikey ist ein USB-Gerät, das eine ereignis-basiertes Einmal-Passwort auswirft. Dazu wird es als Tastatur erkannt. Sie können den Yubikey mit dem Tool ykpersonalize initialisieren. Fügen Sie den geheimen Schlüssel hier ein. Außerdem können Sie auswählen, ob der Yubikey eine UID mit ausgibt. Diese kann entweder 12 oder 16 Zeichen lang sein.","The authentication request is forwarded to the YubiCloud. For accessing\n    the YubiCloud you need to enter an API Client ID and an API Key, which\n    you can request <a href=\"https://upgrade.yubico.com/getapikey/\" target=\"_extern\">here</a>.":"Die Authentisierungsanfrage wird an die YubiCloud weitergeleitet. Um die YubiCloud ansprechen zu können, benötigt man ein API Client ID und einen API Schlüssel.Dieser ist  <a href=\"https://upgrade.yubico.com/getapikey/\" target=\"_extern\">hier</a> erhältlich.","The certificate was enrolled successfully.":"Das Zertifikat wurde erfolgreich ausgestellt.","The challenge validity time":"Die Gültigkeitszeit der Challenge","The client ID":"Die Client ID","The mOTP PIN is the PIN that needs to be entered on the mobile device.":"Die mOTP PIN ist die PIN, die auf dem Mobiltelefon in der App eingegeben werden muss.","The mOTP token is a time based OTP token for mobile devices.\n    You can\n    have the server generate the secret and scan the QR code.":"Der mOTP Token ist ein zeitbasierter OTP Token für mobile Geräte.  Sie können den Server den geheimen Schlüssel erzeugen lassen und anschließen den QR-Coden mit einer App wie \"Token2\" scannen.","The number of lookahead OTP values. Default 10.":"Die Anzahl der untersuchten OTP-Werte (Standard 10)","The old token is disabled and can be deleted or enabled later.":"Der alte Token wird deaktiviert und kann später gelöscht oder wieder aktiviert werden.","The password can not be shown again, later!":"Das Passwort kann später nicht wieder angezeigt werden!","The password that needs to be combined with the OTP PIN:\n        <b>{{ lostResult.password }}</b>":"Das Passwort, das mit der alten OTP PIN kombiniert werden muss: <b>{{ lostResult.password }}</b>","The privacyIDEA authentication backend is licensed under the\n                    AGPLv3.\n                    Some components may be part to other licenses.\n                    privacyIDEA was originally forked from LinOTP, which was\n                    licensed\n                    by LSE Leading Security Experts GmbH.\n                    For detailed information please take a look at the\n                    <a href=\"http://github.com/privacyidea/privacyidea\" target=\"github\">backend\n                        service itself</a>.":"Das privacyIDEA Authentisierungsbackend ist unter der AGPLv3 lizenziert. Manche Komponenten können im Detail anderen Lizenzen folgen. privacyIDEA wurde ursprünglich als Fork von LinOTP erstellt, das durch dieLSE Leading Security Experts GmbH lizenziert wurde. Für weitere Details schauen Sie bitte beim  <a href=\"http://github.com/privacyidea/privacyidea\" target=\"github\">Backend Service</a>.","The privacyIDEA system seems to be offline. The API is not reachable!":"Das privacyIDEA System scheint offline zu sein. Die API ist nicht erreichbar.","The registration token is a code, that the user can use to authenticate once!\n    After using this code to login, the registration token is deleted and can\n    not be used anymore.":"Der Registrierungs-Token ist ein Code, den der Benutzer nur einmal zur Authentisierung verwenden kann. Nach der Benutzung wird der Registrierungs-Token gelöscht und kann nicht wieder verwendet werden.","The remote Server URL":"Die URL des Remote-Servers","The remote token forwards the authentication request to another\n    privacyIDEA server. You can choose if the PIN should be stripped and\n    checked locally.":"Der Remote-Token leitet die Authentisierungsanfrage an einen anderen privacyIDEA-Server weitern. Sie können auswählen, ob die PIN abgetrennt und lokal überprüft werden soll.","The serial number on the remote server":"Die Seriennummer auf dem Remote-Server","The serial of the new token is\n        <a ui-sref=\"token.details({tokenSerial:lostResult.serial})\">\n        {{ lostResult.serial }}</a>.":"Die Seriennummer des neuen Tokens ist <a ui-sref=\"token.details({tokenSerial:lostResult.serial})\">\n        {{ lostResult.serial }}</a>.","The server will create the OTP key\n            and a QR Code\n            will be\n            displayed to you to be scanned.":"Der Server erzeugt den geheimen Schlüssel und es wird ein QR-Code angezeigt, den Sie mit einer Smartphone-App scannen können.","The server will create the private RSA key and store it in\n                    the\n                    database. If want to create the key pair client side,\n                    uncheck\n                    this option.":"Der Server erzeugt das RSA Schlüsselpaar und speichert es in der Datenbank. Wenn Sie das Schlüsselpaar im Browser erzeugen wollen, entfernen Sie den Haken.","The server will create the secret key\n            and a QR Code\n            will be\n            displayed to you to be scanned with the Token2 app.":"Der Server erzeugt den geheimen Schlüssel und es wird ein QR-Code angezeigt, den Sie mit der Token2-App scannen können.","The time in seconds for which the sent OTP value is valid for\n        authentication.":"Die Zeit in Sekunden, für die der versendete OTP-Wert zur Authentisierung gültig ist.","The token is valid till {{ lostResult.end_date }}.":"Der Token ist bis   {{ lostResult.end_date }} gültig.","The token was marked lost successfully.":"Der Token wurde erfolgreich als verloren markiert.","The token was successfully enrolled with serial number\n            <a ui-sref=\"token.details({tokenSerial:enrolledToken.serial})\">\n                {{ enrolledToken.serial }}</a>\n            for user\n            <a ui-sref=\"user.details({username:newUser.user, realmname:newUser.realm})\">{{ newUser.user }}</a> in realm\n            {{ newUser.realm }}.":"Der Token mit der Seriennummer <a ui-sref=\"token.details({tokenSerial:enrolledToken.serial})\">\n            {{ enrolledToken.serial }}</a> wurde erfolgreich für den Benutzer <a ui-sref=\"user.details({username:newUser.user, realmname:newUser.realm})\">{{ newUser.user }}</a> in Realm {{ newUser.realm }}ausgerollt.","The token was successfully enrolled with serial number\n            <a ui-sref=\"token.details({tokenSerial:enrolledToken.serial})\">\n                {{ enrolledToken.serial }}</a>.":"Der Token mit der Seriennummer  <a ui-sref=\"token.details({tokenSerial:enrolledToken.serial})\">{{ enrolledToken.serial }}</a>  wurde erfolgreich ausgerollt.","The user data in this database can be modified from within\n                    privacyIDEA.":"Die Benutzerdaten in der Datenbank können von privacyIDEA aus verwaltet werden.","The user will have to authenticate with the old OTP PIN he knows and this\n    newly generated password.":"Der Benutzer muss sich mit der alten OTP PIN, die er kennt, und diesem neu erzeugten Passwort anmelden.","The username on the RADIUS server":"Der Benutzername auf dem RADIUS-Server","The username on the remote server":"Der Benutzername auf dem Remote-Server","These are the resolvers marked as editable. You can add\n                        a user\n                        to the resolver. The user will appear in the realms,\n                        that\n                        contain this resolver.":"Das sind die Resolver, die als editierbar markiert sind. SIe könne Benutzer in diesen Resolver hinzufügen. Der Benutzer erscheint dann in den Realm, in denen dieser Resolver enthalten ist.","These are the validate-requests (authentication) grouped by\n                users.\n                The successful and the failed requests are listed.":"Dies sind die Authentisierungsanfragen nach Benutzern sortiert.Außerdem wird nach erfolgreichen und fehlgeschlagenen Authentisierungsanfragen unterschieden.","These are the validate-requests (authentication) grouped by the\n                serial number of the token.\n                The successful and the failed requests are listed.":"Dies sind die Authentisierungsanfragen nach Token sortiert.Außerdem wird nach erfolgreichen und fehlgeschlagenen Authentisierungsanfragen unterschieden.","These client IP addresses or subnets are\n                    allowed to masquerade as another client.":"Diese Client IP Adressen oder Subnetze dürfen sich als ein anderer Client (andere IP-Adresse) ausgeben.","This documentation contains the current\n            configuration of your system in restructured text. You can use\n            this to document your installed system.":"Diese Dokumentation enthält die aktuelle System-Konfiguration im \"restructured text\" Format.Dies kann verwendet werden, um einen Dokumentation des installierten Systems zu erstellen.","This is a Single Page Application client that acts as a\n                        frontend for\n                        privacyIDEA authentication backend.":"Dies ist eine Single Page Applikation, die als Frontend für das privacyIDEA Authentisierungsbackend dient.","This is an RFC6030 OATH compliant PSKC file.\n            At the moment only unencrypted PSKC files are supported.\n            Please ask for an update to import encrypted PSKC files.":"Dies ist eine RFC6030 konformes PSKC-Datei. Im Moment werden nur unverschlüsselte PSKC-Dateien unterstützt. Bitte fragen Sie nach einem update, um verschlüsselte PSKC-Dateien zu importieren.","This is the overall token usage with\n                any\n                kind of action in regards to the serial number.":"Dies ist die allgemeine Tokennutzung, egal welche Aktion mit dem Tokenoder in Bezug auf den Token durchgeführt wurde.","This is used, so that the user can enroll a token on his own, after\n    logging in for the first time.":"Dieser wird verwendet, damit ein Benutzer sich einmalig anmelden kann, um danach sich selber einen Token auszustellen.","Timeout":"Time-out","Timeout (seconds)":"Time-out (Sekunden)","Timestep":"Zeitschritt","Tine 2.0":"Tine 2.0","Token Type":"Tokentyp ","Token data":"Tokendaten","Token details for {{ tokenSerial }}":"Details zu Token {{ tokenSerial }}","Token resync failed.":"Token Resync fehlgeschlagen.","Token resync successful.":"Token wurde erfolgreich resynchronisiert.","Token {{ selectedToken.serial }} is Lost!":"Der Token {{ selectedToken.serial }} ist verloren!","Tokens":"Token","Tokens and Applications for machine {{ machineid }}":"Token und Applikationen zur Maschine {{ machineid }}","Tokens for user {{ username }}":"Token des Benutzers {{ username }}","Type":"Typ","Type a password":"Geben Sie ein Passwort ein","Typo3":"TYPO3","UID Type":"UID Typ","Unassign Token":"Tokenzuweisung aufheben","Unassign User":"Benutzerzuweisung aufheben","Upload Certificate":"Zertifikat hochladen","Upload Request":"Zertifikatsanforderung hochladen","Uploaded File: {{ uploadedFile }}":"Hochgeladene Datei: {{ uploadedFile }}","Uploaded Tokens: {{ uploadedTokens }}":"Hochgeladene Token: {{ uploadedTokens }}","Use @ sign to split the username\n                and the realm.":"Verwende das @-Zeichen, um den Benutzernamen und den Realm abzutrennen.","Use TLS":"TLS verwenden","User":"Benutzer ","User Filter":"Benutzerfilter","User Id":"Benutzer ID","User created.":"Benutzer angelegt.","User deleted successfully.":"Benutzer erfolgreich gelöscht.","User updated successfully.":"Benutzer erfolgreich aktualisiert.","User-Realm":"Benutzerrealm","User-Resolver":"Benutzer-Resolver","Username":"Benutzer","Users":"Benutzer","Users phone number...":"Telefonnummer des Benutzers","Validate Requests per token":"Validate-Requests pro Token","Validate Requests per users":"Validate-Requests pro Benutzer","Validity End":"Beginn Gültigkeit","Validity Start":"Ende Gültigkeit","Verify SSL certificate":"SSL-Zertifikat verifizieren","View token in Audit log":"Token im Audit Log anzeigen","View user in Audit log":"Benutzer im Audit Log anzeigen","Where statement":"WHERE-Ausdruck","Which administrative request where the most popular.":"Die meistgenutzen administrativen Requests.","Wordpress":"Wordpress","Working Directory":"Arbeitsverzeichnis","You have no editable resolvers defined. So you can not write\n                to any user store. If you want to add users, you need to\n                <a ui-sref=\"config.resolvers.list\">define an editable\n                    resolver</a>\n                 (like SQLResolver) and check the\n                box \"Edit user store\".":"Sie haben keine editierbaren Resolver definiert. Daher können Sie in keine Benutzer-Quelle schreiben. Wenn Sie Benutzer hinzufügen wollen, müssen Sie einen <a ui-sref=\"config.resolvers.list\">editierbaren Resolver definieren</a> (bpsw. SQLResolver) und die Checkbox \"Benutzerquelle editierbar\" anhaken.","You may pass this registration code to the user.":"Sie können diesen Registrierungscode an den Benutzer übergeben.","You will be logged out in {{ myCountdown }} second(s).":"Sie werden nach {{ myCountdown }} Sekunden abgemeldet.","Yubico Token settings":"Yubico Token Einstellungen","Yubikey Identifier":"Yubikey ID","action":"Aktion","action detail":"Aktionsdetail","active":"aktiv","administrator":"Administrator","an optional serial substring":"Optionaler Teil der Seriennummer","clearance":"Freigabestufe","client":"Client","date":"Datum","description":"Beschreibung","disabled":"deaktiviert","email":"EMail","emit a public UID":"Die öffentliche UID mit ausgeben","enter some OTP value":"Geben Sie einen OTP-Wert ein...","failcounter":"Fehlerzähler","givenname":"Vorname","hostname":"Hostname","id":"ID","info":"Info","locked":"gesperrt","log level":"Logstufe","mOTP PIN":"mOTP PIN","maxfail":"Max. Fehlerzähler","missing_line":"Fehlende Zeile","mobile":"Mobiltelefon","new realm":"Neuer Realm","number":"Nr.","otplen":"OTP Länge","phone":"Telefon","privacyIDEA Single Page Web Client":"privacyIDEA Single Page Web Client","privacyIDEA authentication backend":"privacyIDEA Authentisierungsbackend","privacyidea server":"privacyIDEA Server","realm":"Realm","resolvers":"Resolver","revoked":"widerrufen","serial":"Seriennummer","serial number, seed, type, ocrasuite":"Seriennummer, OTP-Schlüssel, Typ, OCRA-Suite","serial number, seed, type, otplen, timeStep":"Seriennummer, OTP-Schlüssel, Typ, OTP-Länge, Zeitschritt","set Default":"Setze als Standard","sig_check":"Signatur","start typing a machine.":"Fangen Sie an, einen Maschinennamen zu tippen.","start typing a serial number of a token that is notassigned, yet.":"Fangen Sie an, eine nicht zugewiesene Seriennummer zu tippen.","start typing a serial number of a token.":"Fangen Sie an, eine Seriennummer zu tippen.","start typing a username":"Fangen Sie an, einen Benutzernamen zu tippen.","success":"Erfolg","surname":"Nachname","token type":"Tokentyp","total tokens: {{ tokendata.count }}":"Tokenanzahl: {{ tokendata.count }}","total users: {{ usercount }}":"Benutzeranzahl: {{ usercount }}","type":"Typ","type (default hotp), otplen (default 6), timeStep (default 30) and\n            ocrasuite are optional.":"Der Typ (Standard HOTP), OTP-Länge (Standard 6), Zeitschritt (Standard 30) und OCRA-Suite sind optional.","user":"Benutzer","username":"Benutzername","window":"Fenster","{{ auditdata.count }} entries found.":"Es wurden {{ auditdata.count }} Einträge gefunden."});
/* jshint +W100 */
}]);