import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-burgundy-deep via-burgundy-main to-burgundy-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* Elegant background texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Premium Logo */}
          <div className="mb-12">
            <h1 className="font-cormorant text-8xl md:text-9xl font-bold text-gold-main tracking-wider mb-4 drop-shadow-gold">
              KATYNE
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-main to-transparent mx-auto mb-6"></div>
            <p className="text-cream-light text-xl md:text-2xl font-light tracking-wide">
              Свечи ручной работы премиум-класса
            </p>
          </div>

          {/* Hero Text */}
          <div className="mb-16 space-y-6">
            <h2 className="font-cormorant text-4xl md:text-5xl text-cream-main font-light leading-tight">
              Создаём атмосферу
              <br />
              <span className="text-gold-main font-normal">роскоши и уюта</span>
            </h2>
            <p className="text-cream-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Каждая свеча KATYNE — это произведение искусства, созданное с
              любовью из натуральных материалов высочайшего качества
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="group bg-gold-main text-burgundy-deep px-8 py-4 rounded-none font-semibold text-lg tracking-wide hover:bg-gold-light transition-all duration-300 hover:shadow-gold min-w-[200px]">
              <span className="group-hover:tracking-wider transition-all duration-300">
                КАТАЛОГ
              </span>
            </button>
            <button className="border-2 border-gold-main text-gold-main px-8 py-4 rounded-none font-semibold text-lg tracking-wide hover:bg-gold-main hover:text-burgundy-deep transition-all duration-300 min-w-[200px]">
              <span className="group-hover:tracking-wider transition-all duration-300">
                НА ЗАКАЗ
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold-main animate-pulse">
          <div className="w-6 h-10 border-2 border-gold-main rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-main rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-gradient-to-b from-burgundy-dark to-burgundy-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-cormorant text-5xl text-gold-main font-light mb-6">
              Наши преимущества
            </h3>
            <div className="w-24 h-0.5 bg-gold-main mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Advantage 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-gold-main rounded-full flex items-center justify-center group-hover:bg-gold-main transition-all duration-300">
                <span className="text-2xl text-gold-main group-hover:text-burgundy-deep transition-colors duration-300">
                  ✨
                </span>
              </div>
              <h4 className="font-cormorant text-2xl text-cream-main mb-4 font-medium">
                Ручная работа
              </h4>
              <p className="text-cream-light leading-relaxed">
                Каждая свеча создаётся вручную мастерами с многолетним опытом,
                что гарантирует уникальность и высочайшее качество
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-gold-main rounded-full flex items-center justify-center group-hover:bg-gold-main transition-all duration-300">
                <span className="text-2xl text-gold-main group-hover:text-burgundy-deep transition-colors duration-300">
                  🌿
                </span>
              </div>
              <h4 className="font-cormorant text-2xl text-cream-main mb-4 font-medium">
                Натуральные материалы
              </h4>
              <p className="text-cream-light leading-relaxed">
                Используем только премиальный воск, натуральные ароматы и
                экологически чистые красители без вредных добавок
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 border-2 border-gold-main rounded-full flex items-center justify-center group-hover:bg-gold-main transition-all duration-300">
                <span className="text-2xl text-gold-main group-hover:text-burgundy-deep transition-colors duration-300">
                  👑
                </span>
              </div>
              <h4 className="font-cormorant text-2xl text-cream-main mb-4 font-medium">
                Эксклюзивный дизайн
              </h4>
              <p className="text-cream-light leading-relaxed">
                Авторские формы и уникальные ароматические композиции, которые
                превратят ваш дом в оазис роскоши и комфорта
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 bg-burgundy-main">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-cormorant text-4xl text-gold-main font-light mb-12">
            Доступность товара
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-burgundy-deep/30 backdrop-blur-sm border border-gold-main/20 p-8 rounded-sm">
              <div className="w-16 h-16 mx-auto mb-6 bg-gold-main/10 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gold-main">📦</span>
              </div>
              <h4 className="font-cormorant text-2xl text-cream-main mb-4">
                В наличии
              </h4>
              <p className="text-cream-light mb-6">
                Готовые свечи доступны для немедленной отправки. Быстрая
                доставка по всей стране.
              </p>
              <div className="text-gold-main font-semibold">
                Доставка 1-3 дня
              </div>
            </div>

            <div className="bg-burgundy-deep/30 backdrop-blur-sm border border-gold-main/20 p-8 rounded-sm">
              <div className="w-16 h-16 mx-auto mb-6 bg-gold-main/10 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gold-main">🎨</span>
              </div>
              <h4 className="font-cormorant text-2xl text-cream-main mb-4">
                На заказ
              </h4>
              <p className="text-cream-light mb-6">
                Создаём уникальные свечи по вашим пожеланиям: форма, аромат,
                цвет — всё под ваш вкус.
              </p>
              <div className="text-gold-main font-semibold">
                Изготовление 7-14 дней
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-t from-burgundy-deep to-burgundy-dark text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="font-cormorant text-4xl text-gold-main font-light mb-6">
            Создайте атмосферу мечты
          </h3>
          <p className="text-cream-light text-lg mb-10 leading-relaxed">
            Позвольте свечам KATYNE наполнить ваш дом теплом, изысканным
            ароматом и атмосферой истинной роскоши
          </p>
          <button className="bg-gold-main text-burgundy-deep px-12 py-4 font-semibold text-xl tracking-wide hover:bg-gold-light hover:shadow-gold transition-all duration-300 rounded-sm">
            ЗАКАЗАТЬ СЕЙЧАС
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
