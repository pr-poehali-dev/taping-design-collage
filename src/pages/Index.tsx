import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-vintage-cream font-merriweather">
      {/* Hero Section - Коллажный стиль */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="relative">
                <h1 className="text-5xl md:text-6xl font-caveat text-vintage-brown transform -rotate-2 mb-4">
                  Репетитор по математике
                </h1>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-vintage-orange rounded-full opacity-50 animate-collage-float"></div>
              </div>
              <p className="text-xl text-vintage-dark leading-relaxed">
                Помогу разобраться с математикой и полюбить точные науки. 
                Онлайн и офлайн занятия для школьников и студентов.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-vintage-orange hover:bg-vintage-brown text-white px-8 py-3 rounded-2xl font-montserrat font-semibold transform hover:scale-105 transition-transform">
                  Записаться на урок
                </Button>
                <Button variant="outline" className="border-vintage-brown text-vintage-brown hover:bg-vintage-beige px-8 py-3 rounded-2xl font-montserrat">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/da453403-b3c2-4e8d-ab2e-ec20a7c44b42.jpg" 
                alt="Профиль репетитора"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-vintage-gold p-4 rounded-2xl transform -rotate-12 animate-collage-float">
                <Icon name="GraduationCap" size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Обо мне - Скрапбук стиль */}
      <section className="py-20 px-4 bg-vintage-beige">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-caveat text-vintage-brown mb-4 transform -rotate-1">
              Обо мне
            </h2>
            <div className="w-24 h-1 bg-vintage-orange mx-auto rounded-full"></div>
          </div>
          
          <Card className="bg-vintage-cream border-vintage-brown border-2 shadow-lg transform hover:scale-105 transition-transform">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="space-y-4">
                  <Badge className="bg-vintage-orange text-white font-caveat text-lg px-4 py-2 transform -rotate-3">
                    10+ лет опыта
                  </Badge>
                  <Badge className="bg-vintage-brown text-white font-caveat text-lg px-4 py-2 transform rotate-2">
                    500+ учеников
                  </Badge>
                  <Badge className="bg-vintage-gold text-white font-caveat text-lg px-4 py-2 transform -rotate-1">
                    МГУ, мехмат
                  </Badge>
                </div>
                <div className="md:col-span-2">
                  <p className="text-vintage-dark leading-relaxed mb-4">
                    Привет! Меня зовут Анна, и я влюблена в математику уже более 15 лет. 
                    Закончила механико-математический факультет МГУ с красным дипломом.
                  </p>
                  <p className="text-vintage-dark leading-relaxed">
                    За годы преподавания помогла более 500 ученикам не только понять математику, 
                    но и полюбить её. Верю, что каждый может освоить эту прекрасную науку!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Услуги - Карточки в коллажном стиле */}
      <section className="py-20 px-4 bg-vintage-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-caveat text-vintage-brown mb-4 transform rotate-1">
              Мои услуги
            </h2>
            <div className="w-24 h-1 bg-vintage-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Онлайн занятия */}
            <Card className="bg-vintage-beige border-vintage-orange border-3 shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Icon name="Monitor" size={48} className="text-vintage-orange mx-auto" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-vintage-gold rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-caveat text-vintage-brown">
                    Онлайн занятия
                  </h3>
                  <p className="text-vintage-dark">
                    Удобные уроки из дома через Zoom. Интерактивная доска, 
                    материалы в электронном виде, запись урока.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Clock" size={16} className="text-vintage-orange" />
                      <span className="text-sm text-vintage-dark">60 минут</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Users" size={16} className="text-vintage-orange" />
                      <span className="text-sm text-vintage-dark">Индивидуально</span>
                    </div>
                  </div>
                  <Button className="bg-vintage-orange hover:bg-vintage-brown text-white w-full rounded-2xl font-montserrat">
                    Записаться онлайн
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Офлайн занятия */}
            <Card className="bg-vintage-beige border-vintage-brown border-3 shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Icon name="Home" size={48} className="text-vintage-brown mx-auto" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-vintage-orange rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-caveat text-vintage-brown">
                    Офлайн занятия
                  </h3>
                  <p className="text-vintage-dark">
                    Личные встречи в уютной домашней обстановке. 
                    Полное погружение в предмет, работа с учебниками.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Clock" size={16} className="text-vintage-brown" />
                      <span className="text-sm text-vintage-dark">90 минут</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="MapPin" size={16} className="text-vintage-brown" />
                      <span className="text-sm text-vintage-dark">У меня дома</span>
                    </div>
                  </div>
                  <Button className="bg-vintage-brown hover:bg-vintage-orange text-white w-full rounded-2xl font-montserrat">
                    Записаться офлайн
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Отзывы - Стикеры и записки */}
      <section className="py-20 px-4 bg-vintage-beige">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-caveat text-vintage-brown mb-4 transform -rotate-1">
              Отзывы учеников
            </h2>
            <div className="w-24 h-1 bg-vintage-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Отзыв 1 */}
            <div className="bg-vintage-cream p-6 rounded-2xl shadow-lg border-l-4 border-vintage-orange transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-vintage-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">М</span>
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-vintage-brown">Мария, 11 класс</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-vintage-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-vintage-dark italic font-caveat text-lg">
                  "Анна объясняет так просто! Теперь алгебра - мой любимый предмет. 
                  Сдала ЕГЭ на 85 баллов!"
                </p>
              </div>
            </div>

            {/* Отзыв 2 */}
            <div className="bg-vintage-cream p-6 rounded-2xl shadow-lg border-l-4 border-vintage-brown transform rotate-1 hover:rotate-0 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-vintage-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">А</span>
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-vintage-brown">Алексей, 9 класс</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-vintage-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-vintage-dark italic font-caveat text-lg">
                  "Онлайн занятия очень удобные. Анна всегда терпеливо объясняет, 
                  пока я не пойму. Геометрия больше не страшна!"
                </p>
              </div>
            </div>

            {/* Отзыв 3 */}
            <div className="bg-vintage-cream p-6 rounded-2xl shadow-lg border-l-4 border-vintage-gold transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-vintage-brown rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Е</span>
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-vintage-brown">Елена, мама ученика</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-vintage-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-vintage-dark italic font-caveat text-lg">
                  "Сын стал с удовольствием заниматься математикой. 
                  Анна - настоящий профессионал своего дела!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Цены - Винтажные прайс-листы */}
      <section className="py-20 px-4 bg-vintage-cream">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-caveat text-vintage-brown mb-4 transform rotate-2">
              Стоимость занятий
            </h2>
            <div className="w-24 h-1 bg-vintage-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Онлайн тарифы */}
            <Card className="bg-vintage-beige border-vintage-orange border-2 shadow-xl transform -rotate-1 hover:scale-105 transition-all">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <Icon name="Monitor" size={48} className="text-vintage-orange mx-auto" />
                  <Badge className="absolute -top-2 -right-2 bg-vintage-gold text-white font-caveat px-3 py-1 transform rotate-12">
                    Популярно
                  </Badge>
                </div>
                <h3 className="text-2xl font-caveat text-vintage-brown">Онлайн занятия</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-vintage-cream rounded-lg">
                    <span className="font-montserrat text-vintage-dark">1 занятие</span>
                    <span className="font-caveat text-xl text-vintage-orange">1500₽</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-vintage-cream rounded-lg">
                    <span className="font-montserrat text-vintage-dark">4 занятия</span>
                    <div className="text-right">
                      <span className="font-caveat text-xl text-vintage-orange">5600₽</span>
                      <p className="text-sm text-vintage-brown">-200₽ скидка</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-vintage-cream rounded-lg">
                    <span className="font-montserrat text-vintage-dark">8 занятий</span>
                    <div className="text-right">  
                      <span className="font-caveat text-xl text-vintage-orange">10800₽</span>
                      <p className="text-sm text-vintage-brown">-600₽ скидка</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-vintage-orange hover:bg-vintage-brown text-white w-full rounded-2xl font-montserrat py-3">
                  Выбрать онлайн
                </Button>
              </CardContent>
            </Card>

            {/* Офлайн тарифы */}
            <Card className="bg-vintage-beige border-vintage-brown border-2 shadow-xl transform rotate-1 hover:scale-105 transition-all">
              <CardContent className="p-8 text-center space-y-6">
                <div className="relative">
                  <Icon name="Home" size={48} className="text-vintage-brown mx-auto" />
                  <Badge className="absolute -top-2 -right-2 bg-vintage-orange text-white font-caveat px-3 py-1 transform -rotate-12">
                    Premium
                  </Badge>
                </div>
                <h3 className="text-2xl font-caveat text-vintage-brown">Офлайн занятия</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-vintage-cream rounded-lg">
                    <span className="font-montserrat text-vintage-dark">1 занятие</span>
                    <span className="font-caveat text-xl text-vintage-brown">2000₽</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-vintage-cream rounded-lg">
                    <span className="font-montserrat text-vintage-dark">4 занятия</span>
                    <div className="text-right">
                      <span className="font-caveat text-xl text-vintage-brown">7600₽</span>
                      <p className="text-sm text-vintage-orange">-400₽ скидка</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-vintage-cream rounded-lg">
                    <span className="font-montserrat text-vintage-dark">8 занятий</span>
                    <div className="text-right">
                      <span className="font-caveat text-xl text-vintage-brown">14400₽</span>
                      <p className="text-sm text-vintage-orange">-1200₽ скидка</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-vintage-brown hover:bg-vintage-orange text-white w-full rounded-2xl font-montserrat py-3">
                  Выбрать офлайн
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-vintage-dark font-caveat text-lg">
              📞 Первое занятие - бесплатно! Звоните: +7 (999) 123-45-67
            </p>
          </div>
        </div>
      </section>

      {/* Footer с элементами коллажа */}
      <footer className="py-12 px-4 bg-vintage-brown text-vintage-cream">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-caveat text-vintage-beige">
              Давайте изучать математику вместе!
            </h3>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} className="text-vintage-orange" />
                <span className="font-montserrat">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={20} className="text-vintage-orange" />
                <span className="font-montserrat">anna@math-tutor.ru</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="w-8 h-8 bg-vintage-orange rounded-full flex items-center justify-center transform rotate-12 animate-collage-float">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-vintage-gold rounded-full flex items-center justify-center transform -rotate-12 animate-collage-float">
                <Icon name="Send" size={16} className="text-white" />
              </div>
            </div>
            <p className="text-sm text-vintage-beige/80 font-montserrat">
              © 2024 Репетитор по математике. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;