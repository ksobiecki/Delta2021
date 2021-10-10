import React, { FormEvent, useState } from 'react';

import {
	Form,
	Input,
	Button,
	Label,
	Select,
	Option,
	Agreement,
	Checkmark,
	Container,
	StyledLink,
	Required,
	StyledMessage,
	Background,
} from './styled';

import rodo from '../../../../assets/docs/RODO.pdf';
import regulamin from '../../../../assets/docs/regulamin.pdf';

const RegisterForm = () => {
	const [isFormFilled, setIsFormFilled] = useState(false);

	const [name, setName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [year, setYear] = useState<number>(1);
	const [faculty, setFaculty] = useState<string>('');
	const [degreeCourse, setDegreeCourse] = useState<string>('');

	const handleFormSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const data = {
			name,
			surname,
			email,
			phone,
			year,
			faculty,
			degreeCourse,
		};

		await fetch(
			'https://delta2021-94d2b-default-rtdb.europe-west1.firebasedatabase.app/users.json',
			{
				method: 'POST',
				body: JSON.stringify(data),
			},
		);

		await setIsFormFilled(true);
	};

	const handleYearInput = (value: string) => {
		const numeric = Number(value);
		if (numeric < 6) {
			setYear(numeric);
		}
	};

	const message = (
		<StyledMessage>
			<Background />
			<p>Twoja rejestracja na wyjazd Delta 2021 została zgłoszona.</p>
			<br />
			<h3>Twoje dane:</h3>
			<p>
				<b>Imię:</b> {name}
			</p>
			<p>
				<b>Nazwisko:</b> {surname}
			</p>
			<p>
				<b>Email:</b> {email}
			</p>
			<p>
				<b>Telefon:</b> {phone}
			</p>
			<p>
				<b>Rok studiów:</b> {year}
			</p>
			<p>
				<b>Wydział:</b> {faculty}
			</p>
			<p>
				<b>Kierunek studiów:</b> {degreeCourse}
			</p>
			<br />
			<p>
				Pozdrawiamy
				<br />
				<b>Kadra</b>
			</p>
			<br />
		</StyledMessage>
	);

	return (
		<>
			{!isFormFilled && (
				<Form onSubmit={(e: FormEvent) => handleFormSubmit(e)}>
					<Label>Imię</Label>
					<Input
						onChange={(e) => setName(e.target.value)}
						required
						placeholder="Imię"
						type="text"
					/>
					<Label>Nazwisko</Label>
					<Input
						onChange={(e) => setSurname(e.target.value)}
						required
						placeholder="Nazwisko"
						type="text"
					/>
					<Label>Adres email</Label>
					<Input
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder="Email"
						type="email"
					/>
					<Label>Numer telefonu</Label>
					<Input
						onChange={(e) => setPhone(e.target.value)}
						required
						placeholder="Telefon"
						type="tel"
						pattern="[0-9]{9}"
					/>
					<Label>
						Rok studiów (na którym roku będziesz po rozpoczęciu semestru)*
					</Label>
					<Select
						onChange={(e) => handleYearInput(e.target.value)}
						required
						placeholder="Wybierz rok studiów"
						defaultValue=""
					>
						<Option value="" disabled>
							Wybierz rok studiów
						</Option>
						<Option value="1">I</Option>
						<Option value="2">II</Option>
						<Option value="3">III</Option>
						<Option value="4">IV</Option>
						<Option value="5">V</Option>
					</Select>
					<Label>Wydział</Label>
					<Select
						onChange={(e) => setFaculty(String(e.target.value))}
						required
						placeholder="Wydział"
						defaultValue=""
					>
						<Option value="" disabled>
							Wybierz wydział
						</Option>
						<Option value="WM">Wydział Mechaniczny</Option>
						<Option value="WEEIA">
							Wydział Elektrotechniki, Elektroniki, Informatyki i Automatyki
						</Option>
						<Option value="WCH">Wydział Chemiczny</Option>
						<Option value="WTMITW">
							Wydział Technologii Materiałowych i Wzornictwa Tekstyliów
						</Option>
						<Option value="BINOZ">
							Wydział Biotechnologii i Nauk o Żywności
						</Option>
						<Option value="BAIS">
							Wydział Budownictwa, Architektury i Inżynierii Środowiska
						</Option>
						<Option value="FTIMS">
							Wydział Fizyki Technicznej, Informatyki i Matematyki Stosowanej
						</Option>
						<Option value="ZIIP">
							Wydział Zarządzania i Inżynierii Produkcji
						</Option>
						<Option value="WIPOS">
							Wydział Inżynierii Procesowej i Ochrony Środowiska
						</Option>
						<Option value="IFE">Centrum Kształcenia Międzynarodowego</Option>
					</Select>
					<Label>Kierunek studiów</Label>
					<Input
						onChange={(e) => setDegreeCourse(String(e.target.value))}
						required
						placeholder="Kierunek studiów"
						type="text"
					/>
					<Agreement>
						<span>
							Akceptuję regulamin wyjazdu wyjazdu integracyjno-szkoleniowego
							"Delta 2021" dostępny pod{' '}
							<StyledLink target="_blank" rel="noreferrer" href={regulamin}>
								tym adresem
							</StyledLink>{' '}
							i oświadczam, że zapoznałam / zapoznałem się z jego treścią.
							<Required> (wymagane)</Required>
						</span>
						<Container>
							<input required type="checkbox" />
							<Checkmark />
						</Container>
					</Agreement>
					<Agreement>
						<span>
							{' '}
							Wyrażam zgodę na przetwarzanie moich danych osobowych przez
							Politechnikę Łódzką, adres siedziby: ul. Żeromskiego 116, 90-924
							Łódź, jako administratora, w celu zorganizowania i przeprowadzenia
							wyjazdu integracyjno-szkoleniowego "Delta 2021" (dalej: Wyjazdu).
							podany w formularzu. Także zgadzam się na otrzymywanie wiadomości
							tekstowych dotyczących spraw organizacyjnych związanych z Wyjazdem
							na adres e-mail i numer telefonu podany w formularzu. Klauzula
							RODO dostępna jest{' '}
							<StyledLink target="_blank" rel="noreferrer" href={rodo}>
								tutaj
							</StyledLink>
							.<Required> (wymagane)</Required>
						</span>
						<Container>
							<input required type="checkbox" />
							<Checkmark />
						</Container>
					</Agreement>
					<Button type="submit">Zarejestruj się</Button>
					<br />
					<Label>
						* studia magisterskie również powinny być brane pod uwagę jako lata
						studiowania. Np. 1 semestr studiów mgr. to 4 rok studiów.
					</Label>
				</Form>
			)}
			{isFormFilled && message}
		</>
	);
};

export default RegisterForm;
