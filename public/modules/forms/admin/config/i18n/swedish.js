'use strict';

angular.module('forms').config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('sv', {
		// Konfigurera Formulär Tab Vy
		ADVANCED_SETTINGS: 'Avancerade Inställningar',
		FORM_NAME: 'Namn På Formulär',
		FORM_STATUS: 'Status På Formulär',
		PUBLIC: 'Offentlig',
		PRIVATE: 'Privat',
		GA_TRACKING_CODE: 'Google Analytics Spårningskod',
		DISPLAY_FOOTER: 'Visa Formulär Footer?',
		SAVE_CHANGES: 'Spara Ändringar',
		CANCEL: 'Avbryt',
		DISPLAY_START_PAGE: 'Visa Startsida?',
		DISPLAY_END_PAGE: 'Visa Anpassad Avslutningssida?',

		// Lista Formulär-vy
		CREATE_A_NEW_FORM: 'Skapa ett nytt formulär',
		CREATE_FORM: 'Skapa formulär',
		CREATED_ON: 'Skapad den',
		MY_FORMS: 'Mina Formulär',
		NAME: 'Namn',
		SPRACHE: 'Språk',
		FORM_PAUSED: 'Formulär pausat',

		// Redigera Fält Modal
		EDIT_FIELD: 'Redigera detta fält',
		SAVE_FIELD: 'Spara',
		ON: 'PÅ',
		AUS: 'AV',
		REQUIRED_FIELD: 'Obligatoriskt',
		LOGIC_JUMP: 'Logiskt Hopp',
		SHOW_BUTTONS: 'Ytterligare Knappar',
		SAVE_START_PAGE: 'Spara',

		// Admin-vy
		ARE_YOU_SURE: "Är du ABSOLUT säker?",
		READ_WARNING: 'Oförväntade dåliga saker kommer hända om du inte läser detta!',
		DELETE_WARNING1: 'Denna handling kan INTE göras ogjord. Den kommer att permanent radera "',
		DELETE_WARNING2: '"Formuläret och alla associerade inskick.',
		DELETE_CONFIRM: 'Vänligen skriv in namnet av formuläret för att bekräfta',
		I_UNDERSTAND: "Jag förstår konsekvenserna, radera detta formulär.",
		DELETE_FORM_SM: 'Radera',
		DELETE_FORM_MD: 'Radera Formulär',
		DELETE: 'Radera',
		FORM: 'Formulär',
		VIEW: 'Vy',
		LIVE: 'Live',
		PREVIEW: 'Förhandsvy',
		COPY: 'Kopiera',
		COPY_AND_PASTE: 'Kopiera och Klistra in detta för att lägga till din OhMyForm till din hemsida.',
		CHANGE_WIDTH_AND_HEIGHT: 'Ändra bredd- och höjdvärden för att det ska passa dig bäst',
		POWERED_BY: 'Genererad av',
		OHMYFORM_URL: "Din OhMyForm är permanent på denna URL",

		// Redigera Form-vy
		DISABLED: 'Avaktiverat',
		JA: 'JA',
		NO: 'NEJ',
		ADD_LOGIC_JUMP: 'Lägg till Logic Jump',
		ADD_FIELD_LG: 'Klicka för att Lägga Till Nytt Fält',
		ADD_FIELD_MD: 'Lägg Till Nytt Fält',
		ADD_FIELD_SM: 'Lägg Till Fält',
		EDIT_START_PAGE: 'Redigera Startsida',
		EDIT_END_PAGE: 'Redigera Slutsida',
		WELCOME_SCREEN: 'Startsida',
		END_SCREEN: 'Slutsida',
		INTRO_TITLE: 'Titel',
		INTRO_PARAGRAPH: "Stycke",
		INTRO_BTN: 'Startknapp',
		TITLE: "Titel",
		PARAGRAPH: "Stycke",
		BTN_TEXT: 'Gå Tillbaka Knapp',
		BUTTONS: 'Knappar',
		BUTTON_TEXT: 'Text',
		BUTTON_LINK: 'Länk',
		ADD_BUTTON: 'Lägg Till Knapp',
		PREVIEW_FIELD: 'Förhandsgranska Fråga',
		QUESTION_TITLE: 'Titel',
		QUESTION_DESCRIPTION: 'Beskrivning',
		OPTIONS: 'Alternativ',
		ADD_OPTION: 'Lägg Till Alternativ',
		NUM_OF_STEPS: 'Antal Steg',
		CLICK_FIELDS_FOOTER: 'Klicka på fälten för att lägga till dem här',
		IF_THIS_FIELD: 'Om detta fält',
		IS_EQUAL_TO: 'är lika med',
		IS_NOT_EQUAL_TO: 'inte lika med',
		IS_GREATER_THAN: 'är större än',
		IS_GREATER_OR_EQUAL_THAN: 'är större eller lika med än',
		IS_SMALLER_THAN: 'är mindre än',
		IS_SMALLER_OR_EQUAL_THAN: 'är mindre eller lika med än',
		CONTAINS: 'innehåller',
		DOES_NOT_CONTAINS: 'inte innehåller',
		ENDS_WITH: 'slutar med',
		DOES_NOT_END_WITH: 'inte slutar med',
		STARTS_WITH: 'börjar med',
		DOES_NOT_START_WITH: 'inte börjar med',
		THEN_JUMP_TO: 'hoppa då till',

		// Redigera Inskicks-vy
		TOTAL_VIEWS: 'totalt antal unika besök',
		RESPONSES: 'svar',
		COMPLETION_RATE: 'grad av fullföljande',
		AVERAGE_TIME_TO_COMPLETE: 'snitt på tid för fullföljande',

		DESKTOP_AND_LAPTOP: 'Datorer',
		TABLETS: "Plattor",
		PHONES: 'Telefoner',
		OTHER: 'Andra',
		UNIQUE_VISITS: 'Unika Besök',

		FIELD_TITLE: 'Titel på fält',
		FIELD_VIEWS: 'Vyer på fält',
		FIELD_DROPOFF: 'Fullföljande på fält',
		FIELD_RESPONSES: 'Svar på fält',
		DELETE_SELECTED: 'Ausgewählte löschen',
		EXPORT_TO_EXCEL: 'Exportera till Excel',
		EXPORT_TO_CSV: 'Exportera till CSV',
		EXPORT_TO_JSON: 'Exportera till JSON',
		PERCENTAGE_COMPLETE: 'Procent fullföljt',
		TIME_ELAPSED: 'Tid som gått',
		DEVICE: 'Utrustning',
		LOCATION: 'Ort',
		IP_ADDRESS: 'IP-Adress',
		DATE_SUBMITTED: 'Datum för inskick',

		// Designvy
		BACKGROUND_COLOR: 'Bakgrundsfärg',
		DESIGN_HEADER: 'Ändra hur ditt Formulär ser ut',
		QUESTION_TEXT_COLOR: 'Frågetextens färg',
		ANSWER_TEXT_COLOR: 'Svarstextens färg',
		BTN_BACKGROUND_COLOR: 'Knappens bakgrundsfärg',
		BTN_TEXT_COLOR: 'Knappens textfärg',

		// Delningsvy
		EMBED_YOUR_FORM: 'Bädda in ditt Formulär',
		SHARE_YOUR_FORM: 'Dela ditt Formulär',

		// Admin-tab
		CREATE_TAB: 'Skapa',
		DESIGN_TAB: 'Designa',
		CONFIGURE_TAB: 'Konfigurera',
		ANALYZE_TAB: 'Analysera',
		SHARE_TAB: 'Dela',

		// Fälttyper
		SHORT_TEXT: 'Korttext',
		EMAIL: 'E-post',
		MULTIPLE_CHOICE: 'Flervalsfråga',
		DROPDOWN: 'Rullgardinslista',
		DATE: 'Datum',
		PARAGRAPH_T: "Stycke",
		YES_NO: 'Ja / Nej',
		LEGAL: "Juridiskt",
		RATING: 'Betygssättning',
		NUMBERS: 'Nummer',
		SIGNATURE: "Signatur",
		FILE_UPLOAD: 'Filuppladdning',
		OPTION_SCALE: 'Alternativskala',
		PAYMENT: "Betalning",
		STATEMENT: 'Uttalande',
		LINK: 'Länk',

		// Förhandsgranskning Formulär
		FORM_SUCCESS: 'Formulär framgångsrikt inskickat!',
		REVIEW: 'Granska',
		BACK_TO_FORM: 'Gå Tillbaka till Formulär',
		EDIT_FORM: 'Redigera denna OhMyForm',
		ADVANCEMENT: '{{done}} av {{total}} svarade',
		CONTINUE_FORM: 'Fortsätt till Formulär',
		REQUIRED: 'obligatorisk',
		COMPLETING_NEEDED: '{{answers_not_completed}} svar kräver komplettering',
		OPTIONAL: 'valfri',
		ERROR_EMAIL_INVALID: 'Vänligen ange en giltig e-postadress',
		ERROR_NOT_A_NUMBER: 'Vänligen ange endast giltiga nummer',
		ERROR_URL_INVALID: 'Vänligen en giltig URL',
		OK: 'OK',
		ENTER: 'tryck ENTER',
		NEWLINE: 'tryck SHIFT+ENTER för att skapa ny rad',
		CONTINUE: 'Fortsätt',
		LEGAL_ACCEPT: "Jag accepterar",
		LEGAL_NO_ACCEPT: "Jag accepterar inte",
		SUBMIT: 'Skicka',
		UPLOAD_FILE: 'Ladda upp din Fil'
	});

}]);
