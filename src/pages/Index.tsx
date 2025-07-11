import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [canvasElements, setCanvasElements] = useState<any[]>([]);

  const templates = [
    {
      id: 1,
      name: "Бизнес-лендинг",
      category: "Бизнес",
      image: "/img/ed253d20-3397-4289-95e7-fb1c7e9f3c51.jpg",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      id: 2,
      name: "Портфолио",
      category: "Креатив",
      image: "/img/34999575-c25c-48ad-9e82-5ea81119df8b.jpg",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      id: 3,
      name: "Интернет-магазин",
      category: "E-commerce",
      image: "/img/f244b85a-3814-4104-a134-8bd35d030318.jpg",
      gradient: "from-green-400 to-blue-500",
    },
  ];

  const editorElements = [
    { icon: "Type", name: "Текст", color: "bg-blue-100 text-blue-600" },
    {
      icon: "Image",
      name: "Изображение",
      color: "bg-green-100 text-green-600",
    },
    { icon: "Square", name: "Блок", color: "bg-purple-100 text-purple-600" },
    {
      icon: "MousePointer",
      name: "Кнопка",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const handleDragStart = (element: any) => {
    setIsDragging(true);
    setSelectedElement(element.name);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newElement = {
      id: Date.now(),
      type: selectedElement,
      x,
      y,
      content: selectedElement === "Текст" ? "Новый текст" : selectedElement,
    };

    setCanvasElements([...canvasElements, newElement]);
    setSelectedElement(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={18} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WebCraft
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#editor"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Редактор
              </a>
              <a
                href="#templates"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Шаблоны
              </a>
              <a
                href="#profile"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Профиль
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200">
                🚀 Создавай сайты без кода
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Конструктор
                <br />
                сайтов мечты
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Создавай потрясающие сайты с drag-and-drop редактором.
                Редактируй текст в реальном времени, добавляй анимации и
                публикуй за минуты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-3"
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Начать создавать
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-purple-200 hover:bg-purple-50"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>

            <div className="mt-16 animate-slide-up">
              <img
                src="/img/f244b85a-3814-4104-a134-8bd35d030318.jpg"
                alt="WebCraft Editor"
                className="rounded-2xl shadow-2xl border border-gray-200 mx-auto max-w-4xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Editor Demo */}
      <section id="editor" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Попробуй редактор прямо сейчас
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Перетаскивай элементы на холст и создавай свой уникальный дизайн
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Sidebar with elements */}
            <Card className="lg:col-span-1">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-gray-800">Элементы</h3>
                <div className="space-y-3">
                  {editorElements.map((element, index) => (
                    <div
                      key={index}
                      draggable
                      onDragStart={() => handleDragStart(element)}
                      className={`p-3 rounded-lg cursor-move transition-all hover:scale-105 ${element.color} flex items-center space-x-2`}
                    >
                      <Icon name={element.icon} size={16} />
                      <span className="text-sm font-medium">
                        {element.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Canvas */}
            <div className="lg:col-span-3">
              <Card className="h-96">
                <CardContent
                  className="p-0 h-full relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 pointer-events-none">
                    {canvasElements.length === 0 && (
                      <div className="text-center">
                        <Icon
                          name="MousePointer"
                          size={48}
                          className="mx-auto mb-2 opacity-30"
                        />
                        <p>Перетащи элементы сюда</p>
                      </div>
                    )}
                  </div>

                  {canvasElements.map((element) => (
                    <div
                      key={element.id}
                      className="absolute p-2 bg-white rounded shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                      style={{ left: element.x, top: element.y }}
                    >
                      {element.content}
                    </div>
                  ))}

                  {isDragging && (
                    <div className="absolute inset-0 border-2 border-dashed border-purple-300 bg-purple-50 bg-opacity-50 rounded-lg" />
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section
        id="templates"
        className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Готовые шаблоны
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Выбери шаблон и адаптируй под свой бренд за несколько кликов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {templates.map((template, index) => (
              <Card
                key={template.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${template.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700">
                    {template.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Современный дизайн для {template.category.toLowerCase()}
                  </p>
                  <Button className="w-full" variant="outline">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Предпросмотр
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Почему выбирают WebCraft?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Zap",
                title: "Быстро",
                desc: "Создавай сайты за минуты",
                color: "text-yellow-500",
              },
              {
                icon: "Palette",
                title: "Креативно",
                desc: "Безграничные возможности дизайна",
                color: "text-purple-500",
              },
              {
                icon: "Smartphone",
                title: "Адаптивно",
                desc: "Отлично выглядит на всех устройствах",
                color: "text-blue-500",
              },
              {
                icon: "Users",
                title: "Просто",
                desc: "Никакого кода, только творчество",
                color: "text-green-500",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    name={feature.icon}
                    size={24}
                    className={feature.color}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Готов создать свой первый сайт?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйся к тысячам создателей уже сегодня
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
          >
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">WebCraft</h3>
              </div>
              <p className="text-gray-400">
                Создавай невероятные сайты без кода
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Редактор
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Шаблоны
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Цены
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
