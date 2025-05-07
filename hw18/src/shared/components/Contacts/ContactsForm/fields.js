const fields = {
    username: {
    type: "text",
    placeholder: "Имя",
    name: "name",
    rules: {
        required: "Пожалуйста, укажите имя",
    },
    },
    email: {
    type: "email",
    placeholder: "Электронная почта",
    name: "email",
    rules: {
        required: "Введите email для связи",
    },
    },
    message: {
    type: "text",
    placeholder: "Ваше сообщение...",
    name: "message",
    rules: {
        required: "Поле сообщения не может быть пустым",
    },
    },
};

export default fields;