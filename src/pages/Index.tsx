import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Home" size={24} className="text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                КровельСервис
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Фото работ
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать мастера
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Профессиональные кровельные работы
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Надёжный ремонт
            <br />и монтаж кровли
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Устраняем протечки, монтируем снегозадержатели и водосточные
            системы. Работаем с любыми видами кровли. Гарантия на все работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать мастера
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 px-8 py-3"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выполняем полный спектр кровельных работ любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Снегозадержатели</CardTitle>
                <CardDescription>
                  Монтаж и ремонт снегозадержателей на металлочерепице,
                  профнастиле, фальце
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Droplets" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Устранение протечек</CardTitle>
                <CardDescription>
                  Быстрое устранение точечных протечек кровли любой сложности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wind" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Вентиляция</CardTitle>
                <CardDescription>
                  Монтаж и ремонт вентиляционных проходных элементов и труб
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Доборные элементы</CardTitle>
                <CardDescription>
                  Монтаж доборных кровельных элементов для защиты и эстетики
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Водосточные системы</CardTitle>
                <CardDescription>
                  Монтаж и ремонт водосточных систем для отвода дождевой воды
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Ремонт примыканий</CardTitle>
                <CardDescription>
                  Ремонт протечек примыкания труб на всех видах кровли
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Фото наших работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов за последние месяцы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/img/f0b50a5a-3b50-46c5-83ab-af7b84a3aca0.jpg"
                alt="Установка снегозадержателей на металлочерепице"
                className="aspect-video object-cover w-full"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Монтаж снегозадержателей
                </h3>
                <p className="text-sm text-gray-600">
                  Установка снегозадержателей на металлочерепице частного дома
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/img/1ffa6345-4668-4e3c-8b2d-c7a739aefb35.jpg"
                alt="Ремонт протечки кровли"
                className="aspect-video object-cover w-full"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Устранение протечки
                </h3>
                <p className="text-sm text-gray-600">
                  Качественный ремонт точечной протечки с гарантией
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/img/4b481ea5-70e8-4032-8a56-c5caa01f3fc1.jpg"
                alt="Установка водосточной системы"
                className="aspect-video object-cover w-full"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Водосточная система
                </h3>
                <p className="text-sm text-gray-600">
                  Монтаж современной водосточной системы
                </p>
              </CardContent>
            </Card>

            {[4, 5, 6].map((item) => (
              <Card
                key={item}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Проект #{item}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Описание выполненных работ
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нашей работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Отличная работа! Быстро устранили протечку, качественно
                    установили снегозадержатели. Рекомендую!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={20} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Клиент #{item}
                      </p>
                      <p className="text-sm text-gray-500">г. Москва</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости
            работ
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center">
              <Icon name="Phone" size={20} className="mr-2" />
              <span className="text-lg">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={20} className="mr-2" />
              <span className="text-lg">info@roofservice.ru</span>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" size={20} className="mr-2" />
              <span className="text-lg">Москва и область</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Home" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">КровельСервис</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 КровельСервис. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
