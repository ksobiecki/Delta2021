import React, { useEffect, useState } from 'react';

import {
	TextContainer,
	StyledParagraph,
	StyledLink,
	StyledText,
} from './styled';

interface PaymentsAccountInfoProps {
	isShown: boolean;
}

const PaymentsAccountInfo: React.FC<PaymentsAccountInfoProps> = ({
	isShown,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (new Date() > new Date('2021-10-11T18:00:00')) {
			setIsOpen(true);
		}
	});

	return (
		<>
			{isOpen && isShown && (
				<TextContainer>
					<StyledParagraph>
						Dane konta, na które należy dokonać wpłaty w wysokości 300zł.
					</StyledParagraph>
					<StyledParagraph>
						Numer rachunku: <strong>23 1240 3028 1111 0010 3742 1516</strong>
					</StyledParagraph>
					<StyledParagraph>
						Odbiorca:{' '}
						<strong>
							Wydział Fizyki Technicznej, Informatyki i Matematyki Stosowanej
						</strong>
					</StyledParagraph>
					<StyledParagraph>
						Tytułem: <strong>Delta 2021 - IMIĘ NAZWISKO</strong>
					</StyledParagraph>
					<br />
					<StyledParagraph>
						Aby pojechać na Deltę 2021 musisz koniecznie:
					</StyledParagraph>
					<StyledParagraph>
						1. Zarejestrować się w zakładce{' '}
						<StyledLink to="/rejestracja">Rejestracja.</StyledLink>
					</StyledParagraph>
					<StyledParagraph>
						2. Wpłacić 300zł na numer podanego przez nas konta bankowego.
					</StyledParagraph>
					<StyledParagraph>
						3. Wysłać nam potwierdzenie przelewu w udostępnionym przez nas
						formularzu.
					</StyledParagraph>
					<StyledParagraph>
						Weryfikowanie wpłaty może potrwać nawet 2 dni robocze, jeśli po tym
						czasie nie dostałeś/aś od nas maila zwrotnego to skontaktuj się z
						nami pod adresem delta.ftims@samorzad.p.lodz.pl.
					</StyledParagraph>
					<StyledParagraph>
						Jeśli masz problem z otrzymaniem potwierdzenia wpłaty to również
						zachęcamy do kontaktu na delta.ftims@samorzad.p.lodz.pl
					</StyledParagraph>
				</TextContainer>
			)}
			{!isOpen && <StyledText>Wpłaty ruszą wkrótce</StyledText>}
		</>
	);
};

export default PaymentsAccountInfo;
