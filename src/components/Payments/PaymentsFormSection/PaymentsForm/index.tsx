import React, { FormEvent, useState } from 'react';

import { database, storage } from '../../../../utils/firebase';

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
	Warning,
	Invoice,
} from './styled';

const FILE_SIZE_LIMIT = 4194304;

import rodo from '../../../../assets/docs/RODO.pdf';
import regulamin from '../../../../assets/docs/regulamin.pdf';

interface PaymentsFormProps {
	fillForm: () => void;
}

const PaymentsForm: React.FC<PaymentsFormProps> = ({ fillForm }) => {
	const [isFormFilled, setIsFormFilled] = useState(false);

	const [warning, setWarning] = useState<string | undefined>('');
	const [name, setName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [pesel, setPesel] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [showInvoice, setShowInvoice] = useState<boolean>(false);
	const [invoiceName, setInvoiceName] = useState<string>('');
	const [invoiceSurname, setInvoiceSurname] = useState<string>('');
	const [invoiceAddress, setInvoiceAddress] = useState<string>('');
	const [tshirtSize, setTshirtSize] = useState<string>('');
	const [shoeSize, setShoeSize] = useState<number>(0);
	const [diet, setDiet] = useState<string>('');
	const [file, setFile] = useState<File>();

	const handleFormSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const data = {
			name,
			surname,
			email,
			pesel,
			invoiceAddress,
			tshirtSize,
			shoeSize,
			diet,
			invoice: showInvoice
				? {
						invoiceName,
						invoiceSurname,
						invoiceAddress,
				  }
				: 'no',
		};

		await database.ref(`payments/${name}_${surname}_${pesel}`).set(data);
		if (file) {
			await storage.ref(`${name}_${surname}_${pesel}`).put(file);
		}

		await setIsFormFilled(true);
		await fillForm();
	};

	const handleShoeSizeInput = (value: string) => {
		const numeric = Number(value);
		if (numeric >= 35 && numeric <= 50) {
			setShoeSize(numeric);
		}
	};

	const handleFileAddition = (file: File) => {
		if (file.size > FILE_SIZE_LIMIT) {
			setWarning('Maksymalny dopuszczalny rozmiar pliku to 4MB');
		} else {
			setWarning(undefined);
			setFile(file);
		}
	};

	const message = (
		<StyledMessage>
			<Background />
			<p>Twoje zgłoszenie wpłaty na wyjazd Delta 2021 zostało wysłane.</p>
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
				<b>PESEL:</b> {pesel}
			</p>
			<p>
				<b>Adres:</b> {address}
			</p>
			<p>
				<b>Rozmiar koszulki:</b> {tshirtSize}
			</p>
			<p>
				<b>Rozmiar buta:</b> {shoeSize}
			</p>
			<p>
				<b>Dieta:</b> {diet}
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
			{!isFormFilled && new Date() > new Date('2021-10-11T18:00:00') && (
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
					<Label>PESEL</Label>
					<Input
						onChange={(e) => setPesel(e.target.value)}
						required
						placeholder="PESEL"
						type="text"
						pattern="[0-9]{11}"
					/>
					<Label>Adres (ulica, kod pocztowy, miasto)</Label>
					<Input
						onChange={(e) => setAddress(e.target.value)}
						value={address}
						required
						placeholder="Adres"
						type="text"
						pattern="[\s\p{L}\d.]{3,40}[,][\s]?[\d]{2}[-]?[\d]{3}[,][\s]?[\s\p{L}\d.]{3,40}"
					/>
					<Label>Rozmiar koszulki</Label>
					<Select
						onChange={(e) => setTshirtSize(e.target.value)}
						required
						placeholder="Wybierz rozmiar koszulki"
						defaultValue=""
					>
						<Option value="" disabled>
							Wybierz rozmiar koszulki
						</Option>
						<Option value="XS">XS</Option>
						<Option value="S">S</Option>
						<Option value="M">M</Option>
						<Option value="L">L</Option>
						<Option value="XL">XL</Option>
						<Option value="XXL">XXL</Option>
					</Select>
					<Label>Rozmiar buta (od 35 do 50)</Label>
					<Input
						onChange={(e) => handleShoeSizeInput(e.target.value)}
						required
						placeholder="Rozmiar buta"
						type="number"
						min="35"
						max="50"
					/>
					<Label>Dieta</Label>
					<Select
						onChange={(e) => setDiet(String(e.target.value))}
						required
						placeholder="Dieta"
						defaultValue=""
					>
						<Option value="" disabled>
							Wybierz rodzaj diety
						</Option>
						<Option value="mięsna">Mięsna</Option>
						<Option value="wegetariańska">Wegetariańska</Option>
					</Select>
					<Label>Potwierdzenie płatności</Label>
					<Input
						onChange={(e) => handleFileAddition(e.target.files[0])}
						required
						placeholder="Potwierdzenie płatności"
						type="file"
						accept=".png,.pdf,.webp,.jpg,.png,.jpeg"
						style={{ color: 'white' }}
					/>
					{warning && <Warning>{warning}</Warning>}
					<Invoice>
						<span>
							Czy wyrażasz chęć otrzymania faktury za przedmiotową wpłatę?
						</span>
						<Container>
							<input
								checked={showInvoice}
								onChange={(e) => {
									setShowInvoice(e.target.checked);
								}}
								type="checkbox"
							/>
							<Checkmark />
						</Container>
					</Invoice>
					{showInvoice && (
						<>
							<Label>Imię</Label>
							<Input
								onChange={(e) => setInvoiceName(e.target.value)}
								required
								placeholder="Imię"
								type="text"
								pattern="[\p{Lu}][\p{Ll}]{2,30}"
							/>
							<Label>Nazwisko</Label>
							<Input
								onChange={(e) => setInvoiceSurname(e.target.value)}
								required
								placeholder="Nazwisko"
								type="text"
								pattern="[\p{Lu}][\p{Ll}]{2,30}([-\s][\p{Lu}][\p{Ll}]{2,30})?"
							/>
							<Label>Adres (ulica, kod pocztowy, miasto)</Label>
							<Input
								onChange={(e) => setInvoiceAddress(e.target.value)}
								value={invoiceAddress}
								required
								placeholder="Adres płatnika"
								type="text"
								pattern="[\s\p{L}\d.]{3,40}[,][\s]?[\d]{2}[-]?[\d]{3}[,][\s]?[\s\p{L}\d.]{3,40}"
							/>
						</>
					)}
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
					<Button type="submit">Wyślij!</Button>
				</Form>
			)}
			{isFormFilled && message}
		</>
	);
};

export default PaymentsForm;
