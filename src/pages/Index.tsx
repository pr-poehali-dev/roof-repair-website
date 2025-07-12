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
                РемонтКровли
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
          <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-100">
            Экстренный ремонт кровли 24/7
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ремонт кровли
            <br />
            любой сложности
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Устраняем протечки, восстанавливаем покрытие, меняем поврежденные
            элементы. Быстро, качественно, с гарантией до 5 лет.
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
              Виды ремонтных работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выполняем все виды ремонта кровли от устранения протечек до полной
              замены покрытия
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="AlertTriangle"
                    size={24}
                    className="text-red-600"
                  />
                </div>
                <CardTitle className="text-xl">Аварийный ремонт</CardTitle>
                <CardDescription>
                  Экстренное устранение повреждений после ураганов, града,
                  падения деревьев. Работаем круглосуточно.
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
                  Быстрый поиск и герметизация мест протечки. Работаем в любую
                  погоду, даже во время дождя.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="RotateCcw"
                    size={24}
                    className="text-orange-600"
                  />
                </div>
                <CardTitle className="text-xl">Замена покрытия</CardTitle>
                <CardDescription>
                  Частичная или полная замена кровельного материала с
                  сохранением стропильной системы.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Гидроизоляция</CardTitle>
                <CardDescription>
                  Восстановление и усиление гидроизоляционного слоя современными
                  материалами.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl">Ремонт водостоков</CardTitle>
                <CardDescription>
                  Прочистка, ремонт и замена элементов водосточной системы.
                  Устранение засоров.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={24} className="text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Ремонт стропил</CardTitle>
                <CardDescription>
                  Укрепление и замена поврежденных элементов стропильной
                  конструкции. Восстановление несущей способности.
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
              Примеры ремонта
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Фотографии до и после ремонта различных типов кровель
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
                  Ремонт после шторма
                </h3>
                <p className="text-sm text-gray-600">
                  Восстановление кровли после повреждения градом
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
                  Ремонт водосточной системы
                </h3>
                <p className="text-sm text-gray-600">
                  Восстановление поврежденной водосточной системы
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
                    Ремонт #{item}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Описание выполненного ремонта
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши преимущества в области кровельного ремонта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Срочно</h3>
              <p className="text-gray-600">
                Выезд в день обращения, аварийный ремонт 24/7
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качественно</h3>
              <p className="text-gray-600">
                Используем проверенные материалы и технологии
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-gray-600">
                Письменная гарантия на все виды работ до 5 лет
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="TrendingDown"
                  size={32}
                  className="text-orange-600"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Выгодно</h3>
              <p className="text-gray-600">Честные цены без скрытых доплат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Нужен срочный ремонт кровли?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку или позвоните нам. Выезд мастера и диагностика —
              бесплатно!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-red-400 text-lg">+7 (999) 123-45-67</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
                <p className="text-gray-300">Круглосуточно</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Район работы</h3>
                <p className="text-gray-300">Москва и Московская область</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Экстренный вызов
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Home" size={24} className="text-blue-400" />
              <span className="text-xl font-bold">РемонтКровли</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 РемонтКровли. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
