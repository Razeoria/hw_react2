/** @jsxImportSource @emotion/react */
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Container from "../../../modules/layouts/Container/Container";
import ContactsForm from "./ContactsForm/ContactsForm";
import LoadingError from "../LoadingError/LoadingError";
import Socials from "../../components/Contacts/Socials/Socials";
import { sendAMessage } from "../../api/auth-api";
import {
contactsStyle,
contactsListStyle,
contactsLinkStyle,
contactsFormBoxStyles,
} from "./styles";

const Contacts = () => {
const [formError, setFormError] = useState(null);

const handleSubmit = async (data) => {
    const { error } = await sendAMessage(data);
    if (error) {
    return setFormError(error.response?.data?.message || "Ошибка отправки.");
    }
    alert("Сообщение успешно отправлено!");
};

return (
    <section style={{ paddingBottom: "48px" }}>
    <Container>
        <SectionTitle title="Свяжитесь с нами" />
        <div css={contactsStyle}>
        <div css={contactsFormBoxStyles}>
            <ul css={contactsListStyle}>
            <li css={contactsLinkStyle}>+7 (800) 000-00-00</li>
            <li css={contactsLinkStyle}>info@sneakershop.com</li>
            </ul>
            <ContactsForm submitForm={handleSubmit} />
            {formError && <LoadingError>{formError}</LoadingError>}
        </div>
        <Socials />
        </div>
    </Container>
    </section>
);
};

export default Contacts;
