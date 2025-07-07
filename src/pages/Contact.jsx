const Contact = () => {
    return (
        <section className="min-h-screen bg-sand py-4 px-6 bg-warm-600">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-warm-500 text-center mb-8">Связаться с нами</h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Форма */}
                    <form className="bg-white/90 p-6 rounded-lg shadow-md space-y-4">
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            className="w-full p-3 border border-warm-200 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-warm-200 rounded"
                        />
                        <textarea
                            rows="5"
                            placeholder="Сообщение"
                            className="w-full p-3 border border-warm-200 rounded"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-warm-400 hover:bg-warm-500 text-white font-semibold px-6 py-3 rounded transition"
                        >
                            Отправить
                        </button>
                    </form>

                    {/* Контакты и карта */}
                    <div className="space-y-6">
                        <div className="bg-white/90 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-warm-600 mb-2">Контакты</h3>
                            <div className="md:flex md:items-baseline">
                                <p className="md:mr-1">📞 Телефон / WhatsApp:</p>
                                <a
                                    href="https://wa.me/996701152020"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center text-warm-500 underline hover:text-warm-600 block md:inline"
                                >
                                    +996 701 15 20 20
                                </a>
                            </div>
                            <p>📧 Email: info@electro-energy.kg</p>
                            <p>📍 Адрес: г. Бишкек, Кыргызстан</p>
                        </div>

                        <div className="rounded-lg overflow-hidden shadow-md">
                            <iframe
                                title="Карта"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.9999999999995!2d74.605!3d42.874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83f1c1c1c1%3A0x1234567890abcdef!2z0JHQtdC70YzQvdC40Lkg0L_RgNC-0YHQv9C10LrRgiDQnNCw0YDQvtCz0YDQsNC00YHQutCw0Y8!5e0!3m2!1sru!2skg!4v0000000000000"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;