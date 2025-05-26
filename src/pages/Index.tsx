import React from "react";
import LuxuryParticles from "@/components/ui/luxury-particles";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-burgundy-deep via-burgundy-main to-burgundy-dark relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        {/* Luxury animated particles */}
        <LuxuryParticles />

        {/* Enhanced geometric pattern overlay */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold-main/30 to-gold-light/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-gold-main/25 to-gold-dark/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-gold-main/20 to-gold-light/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Enhanced luxury texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-burgundy-deep/30"></div>

        {/* Luxury shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-main/5 to-transparent animate-pulse opacity-50"></div>
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6"
        style={{ zIndex: 10 }}
      >
        {/* Main Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          {/* Enhanced Premium Logo */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-main/10 to-transparent blur-3xl rounded-full"></div>
            <h1 className="relative font-cormorant text-8xl md:text-9xl font-bold text-gold-main tracking-[0.2em] mb-6 drop-shadow-gold-lg filter brightness-110">
              KATYNE
            </h1>
            <div className="relative">
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-gold-main to-transparent mx-auto mb-2"></div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-light/50 to-transparent mx-auto mb-8"></div>
            </div>
            <p className="text-cream-light text-xl md:text-2xl font-light tracking-[0.15em] leading-relaxed">
              Свечи ручной работы премиум-класса
            </p>
          </div>

          {/* Enhanced Hero Text */}
          <div className="mb-20 space-y-8">
            <h2 className="font-cormorant text-4xl md:text-6xl text-cream-main font-light leading-tight tracking-wide">
              Создаём атмосферу
              <br />
              <span className="text-gold-main font-normal bg-gradient-to-r from-gold-light via-gold-main to-gold-dark bg-clip-text text-transparent filter brightness-110">
                роскоши и уюта
              </span>
            </h2>
            <p className="text-cream-light/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide">
              Каждая свеча KATYNE — это произведение искусства, созданное с
              любовью из натуральных материалов высочайшего качества
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
            <button className="group relative bg-gradient-to-r from-gold-main to-gold-light text-burgundy-deep px-10 py-5 font-semibold text-lg tracking-[0.15em] hover:from-gold-light hover:to-gold-main transition-all duration-500 hover:shadow-gold-lg min-w-[220px] border-2 border-gold-main/20 hover:border-gold-light/40 backdrop-blur-sm">
              <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-500">
                КАТАЛОГ
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light/20 to-gold-main/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group relative border-2 border-gold-main text-gold-main px-10 py-5 font-semibold text-lg tracking-[0.15em] hover:bg-gradient-to-r hover:from-gold-main hover:to-gold-light hover:text-burgundy-deep transition-all duration-500 min-w-[220px] backdrop-blur-sm hover:shadow-gold">
              <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-500">
                НА ЗАКАЗ
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-main/10 to-gold-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gold-main">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-gold-main rounded-full flex justify-center backdrop-blur-sm bg-burgundy-deep/20">
              <div className="w-1.5 h-4 bg-gradient-to-b from-gold-main to-gold-light rounded-full mt-2 animate-bounce"></div>
            </div>
            <div className="absolute inset-0 border-2 border-gold-main/30 rounded-full animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Advantages Section */}
      <section className="py-32 bg-gradient-to-b from-burgundy-dark via-burgundy-deep to-burgundy-dark relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-main/3 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h3 className="font-cormorant text-5xl md:text-6xl text-gold-main font-light mb-8 tracking-wide">
              Наши преимущества
            </h3>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gold-main"></div>
              <div className="w-2 h-2 bg-gold-main rounded-full"></div>
              <div className="w-32 h-0.5 bg-gold-main"></div>
              <div className="w-2 h-2 bg-gold-main rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gold-main"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Enhanced Advantage 1 */}
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gold-main/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 border-2 border-gold-main rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold-main group-hover:to-gold-light transition-all duration-700 backdrop-blur-sm bg-burgundy-deep/30 shadow-gold">
                  <span className="text-3xl text-gold-main group-hover:text-burgundy-deep transition-colors duration-700 group-hover:scale-110 transform">
                    ✨
                  </span>
                </div>
                <h4 className="font-cormorant text-2xl md:text-3xl text-cream-main mb-6 font-medium tracking-wide">
                  Ручная работа
                </h4>
                <p className="text-cream-light/90 leading-relaxed text-lg px-4">
                  Каждая свеча создаётся вручную мастерами с многолетним опытом,
                  что гарантирует уникальность и высочайшее качество
                </p>
              </div>
            </div>

            {/* Enhanced Advantage 2 */}
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gold-main/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 border-2 border-gold-main rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold-main group-hover:to-gold-light transition-all duration-700 backdrop-blur-sm bg-burgundy-deep/30 shadow-gold">
                  <span className="text-3xl text-gold-main group-hover:text-burgundy-deep transition-colors duration-700 group-hover:scale-110 transform">
                    🌿
                  </span>
                </div>
                <h4 className="font-cormorant text-2xl md:text-3xl text-cream-main mb-6 font-medium tracking-wide">
                  Натуральные материалы
                </h4>
                <p className="text-cream-light/90 leading-relaxed text-lg px-4">
                  Используем только премиальный воск, натуральные ароматы и
                  экологически чистые красители без вредных добавок
                </p>
              </div>
            </div>

            {/* Enhanced Advantage 3 */}
            <div className="text-center group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gold-main/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-8 border-2 border-gold-main rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold-main group-hover:to-gold-light transition-all duration-700 backdrop-blur-sm bg-burgundy-deep/30 shadow-gold">
                  <span className="text-3xl text-gold-main group-hover:text-burgundy-deep transition-colors duration-700 group-hover:scale-110 transform">
                    👑
                  </span>
                </div>
                <h4 className="font-cormorant text-2xl md:text-3xl text-cream-main mb-6 font-medium tracking-wide">
                  Эксклюзивный дизайн
                </h4>
                <p className="text-cream-light/90 leading-relaxed text-lg px-4">
                  Авторские формы и уникальные ароматические композиции, которые
                  превратят ваш дом в оазис роскоши и комфорта
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Availability Section */}
      <section className="py-28 bg-gradient-to-b from-burgundy-main via-burgundy-deep to-burgundy-main relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-main/2 via-transparent to-gold-main/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="font-cormorant text-4xl md:text-5xl text-gold-main font-light mb-16 tracking-wide">
            Доступность товара
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative bg-gradient-to-br from-burgundy-deep/40 to-burgundy-dark/40 backdrop-blur-md border border-gold-main/30 p-10 hover:border-gold-main/50 transition-all duration-700 hover:shadow-gold">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gold-main/20 to-gold-light/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-main/20 group-hover:border-gold-main/40 transition-all duration-500">
                  <span className="text-3xl text-gold-main group-hover:scale-110 transform transition-transform duration-500">
                    📦
                  </span>
                </div>
                <h4 className="font-cormorant text-2xl md:text-3xl text-cream-main mb-6 tracking-wide">
                  В наличии
                </h4>
                <p className="text-cream-light/90 mb-8 text-lg leading-relaxed">
                  Готовые свечи доступны для немедленной отправки. Быстрая
                  доставка по всей стране.
                </p>
                <div className="text-gold-main font-semibold text-lg tracking-wide bg-gradient-to-r from-gold-main to-gold-light bg-clip-text text-transparent">
                  Доставка 1-3 дня
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-burgundy-deep/40 to-burgundy-dark/40 backdrop-blur-md border border-gold-main/30 p-10 hover:border-gold-main/50 transition-all duration-700 hover:shadow-gold">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gold-main/20 to-gold-light/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-gold-main/20 group-hover:border-gold-main/40 transition-all duration-500">
                  <span className="text-3xl text-gold-main group-hover:scale-110 transform transition-transform duration-500">
                    🎨
                  </span>
                </div>
                <h4 className="font-cormorant text-2xl md:text-3xl text-cream-main mb-6 tracking-wide">
                  На заказ
                </h4>
                <p className="text-cream-light/90 mb-8 text-lg leading-relaxed">
                  Создаём уникальные свечи по вашим пожеланиям: форма, аромат,
                  цвет — всё под ваш вкус.
                </p>
                <div className="text-gold-main font-semibold text-lg tracking-wide bg-gradient-to-r from-gold-main to-gold-light bg-clip-text text-transparent">
                  Изготовление 7-14 дней
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-28 bg-gradient-to-t from-burgundy-deep via-burgundy-dark to-burgundy-deep text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-main/5 to-transparent"></div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <h3 className="font-cormorant text-4xl md:text-5xl text-gold-main font-light mb-8 tracking-wide">
            Создайте атмосферу мечты
          </h3>
          <p className="text-cream-light/90 text-lg md:text-xl mb-12 leading-relaxed tracking-wide">
            Позвольте свечам KATYNE наполнить ваш дом теплом, изысканным
            ароматом и атмосферой истинной роскоши
          </p>
          <button className="group relative bg-gradient-to-r from-gold-main to-gold-light text-burgundy-deep px-14 py-6 font-semibold text-xl tracking-[0.15em] hover:from-gold-light hover:to-gold-main hover:shadow-gold-lg transition-all duration-700 border-2 border-gold-main/20 hover:border-gold-light/40 backdrop-blur-sm">
            <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-500">
              ЗАКАЗАТЬ СЕЙЧАС
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-light/20 to-gold-main/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
