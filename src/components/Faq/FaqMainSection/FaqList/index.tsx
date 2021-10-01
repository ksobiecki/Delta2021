import React from 'react';
import AccordeonItem from './AccordeonItem';

import { AccordeonList } from './styled';

const FaqList = () => {
	return (
		<AccordeonList>
			<AccordeonItem
				num={1}
				question="Co powinienem zabrać na wyjazd?"
				answer="– Dowolny dokument pozwalający potwierdzić tożsamość uczestnika na odprawie (dowód osobisty, paszport) /n
– Wypełnione oświadczenie obozowe (należy je wypełnić zgodnie ze stanem faktycznym) /n
– Niezbędną ilość leków, które musi przyjmować uczestnik oraz instrukcje ich podawania (dotyczy tylko osób przyjmujących leki na stałe – TAKA INFORMACJA MUSI ZNALEŹĆ SIĘ W OŚWIADCZENIU!) /n
– Ważną legitymację studencką /n
– Odzież odpowiednią do przewidywanej pogody /n
– I oczywiście dobry humor i chęć do zabawy!"
			/>
			<AccordeonItem
				num={2}
				question="Kiedy będzie odprawa obozowa?"
				answer="Odprawa obozowa jest planowana na czwartek, 4 listopada 2021r o godzinie 13.00. /n
Nie zapomnijcie ze sobą oświadczenia obozowego! /n
Uczestników informujemy, że na odprawie obozowej mogą pojawić się władze Wydziału Fizyki Technicznej, Informatyki i Matematyki Stosowanej. Osoby, które stawią się w miejscu zbiórki i odprawy w stanie wskazującym na spożycie alkoholu lub środków odurzających, będą w trybie natychmiastowym wydalone z Wyjazdu jeszcze przed wyjazdem z Łodzi bez możliwości ubiegania się Uczestnika o zwrot kosztów. W trakcie trwania Delta 2021 przewidywana jest również wizytacja Władz Uczelni, Wydziału oraz przedstawicieli Politechniki Łódzkiej."
			/>
			<AccordeonItem
				num={3}
				question="Co z Fakturą VAT za wyjazd?"
				answer="Uczestnicy którzy chcą otrzymać fakturę VAT za Wyjazd „Delta 2021”, zobowiązani są zgłosić ten fakt podczas wypełniania formularza rejestracyjnego oraz wysłać wiadomość mailową na adres delta@samorzad.p.lodz.pl i k.sobiecki@samorzad.p.lodz.pl. Wiadomość powinna zawierać wszelkie niezbędne dane do wystawienia faktury VAT (imię, nazwisko, numer NIP, adres odbiorcy faktury) oraz telefon kontaktowy. Informujemy jednocześnie, iż faktury VAT wystawiane będą dopiero po zakończeniu Delty, tj. od dnia 7.11.2021 r. Po odbiór faktury można zgłosić się do biura Wydziałowej Rady Samorządu przy ul. Bohdana Stefanowskiego 1/15, budynek B14, I piętro po wcześniejszym ustaleniu mailowym terminu odbioru faktury. Możliwe jest także otrzymanie faktury pocztą (adres do przesłania faktury musi podany być w mailu dotyczącym otrzymania faktury). Czas oczekiwania na fakturę VAT może wynosić nawet do 30 dni roboczych."
			/>
			<AccordeonItem
				num={4}
				question="Chciałbym zrezygnować z wyjazdu"
				answer="Zgodnie z Regulaminem, w razie rezygnacji z uczestnictwa w wyjeździe do dnia 21.10.2021 r. przysługuje Państwu zwrot całości wpłaconej kwoty. Rezygnacje w późniejszym terminie będą rozpatrywane indywidualnie, w zależności od podanego powodu rezygnacji. Czynność taka koniecznie musi być sygnalizowana Organizatorowi mailowo na adres delta@samorzad.p.lodz.pl i Głównemu Koordynatorowi na adres k.sobiecki@samorzad.p.lodz.pl. Mail powinien zawierać: imię, nazwisko, nr telefonu kontaktowego, wszelkie dane związane z numerem konta bankowego, na który ma przyjść przelew zwrotny (m.in. numer konta, nazwa właściciela, adres nie jest konieczny) oraz ponownie załączone potwierdzenie wpłaty i powód rezygnacji. W przypadku rezygnacji dopuszczalne jest również przekazanie swojego opłaconego miejsca innej osobie. Procedura wykonywania zwrotów zostanie uruchomiona dn. 28.10.2021 r., a czas jej realizacji może wynosić nawet do 30 dni roboczych."
			/>
			<AccordeonItem
				num={5}
				question="Przestrzeganie regulaminu"
				answer="Jeśli osoba wchodząca w skład Kadry lub Koordynator Główny Delty podejrzewać będą zażywanie przez uczestnika Wyjazdu substancji zabronionych, poinformują o tym odpowiednie służby interwencyjne. W razie potwierdzenia podejrzeń, Uczestnik taki zostaje wydalony dyscyplinarnie z Wyjazdu a Koordynator o całym zajściu poinformuje Władze Uczelni.

Uczestnik, który dopuści się łamania któregokolwiek z punktów Regulaminu, otrzymuje każdorazowo ostrzeżenie od Koordynatora Głównego Delty. Ostrzeżenie może być dane na uzasadnioną prośbę osób wskazanych jako Kadra, przedstawicieli Uczelni lub innych uczestników Delty. Otrzymanie 2-go ostrzeżenia, przez jedną osobę skutkuje również wydaleniem Uczestnika z Wyjazdu bez możliwości roszczeń przez niego praw do zwrotu wpłaty za Wyjazd. Wydalenie Uczestnika z Wyjazdu wiąże się z samodzielnym powrotem Uczestnika do domu (uczestnicy są pełnoletni, a organizator nie sprawuje pieczy nad osobą Uczestnika) oraz powiadomieniem Władz Uczelni o zaistniałej sytuacji."
			/>
		</AccordeonList>
	);
};

export default FaqList;
