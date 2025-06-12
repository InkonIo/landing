import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const AgroFarmLanding = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();


  const pages = [
    {
      title: "Искусственный интеллект и нейросотрудники",
      content: [
        "Автоматизация бизнес-процессов. Цифровизация медицины и сельского хозяйства.",
        "Smart-инфраструктура для теплиц и агробизнеса.",
        "Наша миссия: Соединять технологии и практику для создания пользы."
      ]
    },
    {
      title: "Что вы получите:",
      content: [
        { label: "Умные датчики:", text: "температура, влажность, CO₂, свет, pH почвы" },
        { label: "ИИ агроном:", text: "подсказывает когда поливать, чем удобрять, как спасти и увеличить урожай" },
        { label: "Автоматизация:", text: "полив, вентиляция, освещение — включаются сами" },
        "Прогноз погоды интегрирован в систему"
      ]
    },
    {
      title: "Основные проблемы хозяйств",
      content: [
        "Недостаток прозрачной аналитики",
        "Высокие затраты на воду, свет, отопление",
        "Потери урожая из-за отклонений микроклимата",
        "Зависимость от человеческого фактора",
        "Сложность оперативного управления"
      ]
    },
    {
      title: "Прогресс за сезон (до/после)",
      content: [
        "Попробуйте без риска — и сами увидите результат",
        "Бесплатная диагностика вашей теплицы",
        "Установка пилотного комплекта на 14 дней",
        "После теста — расширение под ваш бюджет",
        "Гибкие планы оплаты и поддержки"
      ]
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Автоматическое перелистывание каждые 8 секунд
  useEffect(() => {
    const interval = setInterval(nextPage, 8000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = (content) => {
    if (typeof content === 'string') {
      return <p className="page-description">{content}</p>;
    }
    
    if (content.label) {
      return (
        <li key={content.label}>
          <strong>{content.label}</strong> {content.text}
        </li>
      );
    }
    
    return <li key={content}>{content}</li>;
  };

  const handleRegistrationRedirect = () => {
  window.location.href = 'https://react-front-mocha.vercel.app/';
};

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: 'url("https://avatars.mds.yandex.net/get-mpic/11385384/2a0000018c1df9bae6835a54ec442033c3bb/orig")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#fff',
      backgroundColor: '#1a1a1a',
      lineHeight: 1.6,
      fontSize: '16px',
      margin: 0,
      padding: 0,
      overflowX: 'hidden'
    }}>
      {/* Затемняющий слой */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '90%',
        maxWidth: '1200px',
        height: '80vh',
        background: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 140, 0, 0.2)',
        display: 'flex',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Декоративные элементы */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            background: 'rgba(255, 140, 0, 0.4)',
            borderRadius: '50%',
            top: '20%',
            left: '10%',
            animation: 'float 8s infinite ease-in-out'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            background: 'rgba(255, 140, 0, 0.4)',
            borderRadius: '50%',
            top: '60%',
            left: '80%',
            animation: 'float 8s infinite ease-in-out 2s'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            background: 'rgba(255, 140, 0, 0.4)',
            borderRadius: '50%',
            top: '40%',
            left: '30%',
            animation: 'float 8s infinite ease-in-out 4s'
          }}></div>
        </div>

        {/* Левая часть с контентом */}
        <div style={{
          flex: 1,
          padding: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Заголовок компании */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '60px',
            right: '60px'
          }}>
            <h1 style={{
              fontFamily: "'Georgia', serif",
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '5px',
              margin: 0
            }}>
              AgroFarm для тепличных хозяйств
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#ff8c00',
              fontWeight: 300,
              margin: 0
            }}>
              FarmMedEx — инновационная AI-компания
            </p>
          </div>

          {/* Контент текущей страницы */}
          <div style={{
            marginTop: '120px',
            opacity: 1,
            transform: 'translateX(0)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <h2 style={{
              fontFamily: "'Georgia', serif",
              fontSize: '2.8rem',
              fontWeight: 600,
              marginBottom: '20px',
              color: '#fff',
              lineHeight: 1.2
            }}>
              {pages[currentPage].title}
            </h2>
            
            {pages[currentPage].content.some(item => typeof item === 'object' && item.label) ? (
              <ul style={{
                listStyle: 'none',
                marginTop: '20px',
                padding: 0
              }}>
                {pages[currentPage].content.map((item, index) => (
                  <li key={index} style={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    marginBottom: '15px',
                    paddingLeft: '25px',
                    position: 'relative',
                    lineHeight: 1.6
                  }}>
                    <span style={{
                      content: '▶',
                      color: '#ff8c00',
                      position: 'absolute',
                      left: 0,
                      fontSize: '0.8rem'
                    }}>▶</span>
                    {typeof item === 'object' && item.label ? (
                      <>
                        <strong style={{ color: '#ff8c00' }}>{item.label}</strong> {item.text}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                {pages[currentPage].content.map((item, index) => (
                  <p key={index} style={{
                    fontSize: '1.1rem',
                    color: '#e0e0e0',
                    marginBottom: '15px',
                    lineHeight: 1.7
                  }}>
                    {item}
                  </p>
                ))}
              </div>
            )}

            {currentPage === 3 && (
              <button 
                onClick={() => setIsModalOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #ff8c00, #ff6600)',
                  border: 'none',
                  padding: '18px 40px',
                  fontSize: '1.2rem',
                  color: '#fff',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 8px 25px rgba(255, 140, 0, 0.3)',
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  fontWeight: 600,
                  marginTop: '15px',
                  transform: 'translateY(0)'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #ff6600, #ff4500)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255, 140, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #ff8c00, #ff6600)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 140, 0, 0.3)';
                }}
              >
                Оставить заявку
              </button>
            )}
          </div>

          {/* Номер страницы */}
          <div style={{
            position: 'absolute',
            bottom: '60px',
            right: '60px',
            fontFamily: "'Georgia', serif",
            fontSize: '6rem',
            fontWeight: 'bold',
            color: 'rgba(255, 140, 0, 0.3)',
            lineHeight: 1,
            transition: 'all 0.6s ease'
          }}>
            0{currentPage + 1}
          </div>
        </div>

        {/* Правая часть с навигацией */}
        <div style={{
          width: '300px',
          background: 'rgba(15, 15, 15, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          borderLeft: '1px solid rgba(255, 140, 0, 0.2)'
        }}>
          {/* Индикаторы страниц */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {pages.map((_, index) => (
              <div
                key={index}
                onClick={() => goToPage(index)}
                style={{
                  width: index === currentPage ? '80px' : '60px',
                  height: '4px',
                  background: index === currentPage ? '#ff8c00' : 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  if (index !== currentPage) {
                    e.target.style.background = 'rgba(255, 140, 0, 0.6)';
                  }
                }}
                onMouseOut={(e) => {
                  if (index !== currentPage) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              />
            ))}
          </div>

          {/* Стрелка навигации */}
          <button 
            onClick={nextPage}
            style={{
              background: 'none',
              border: '2px solid #ff8c00',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              color: '#ff8c00',
              fontSize: '1.5rem'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#ff8c00';
              e.target.style.color = '#fff';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'none';
              e.target.style.color = '#ff8c00';
              e.target.style.transform = 'scale(1)';
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Футер с контактами */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 140, 0, 0.3)',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          gap: '40px',
          fontSize: '1rem',
          color: '#fff',
          fontWeight: '500',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            background: 'rgba(255, 140, 0, 0.1)'
          }}
          onMouseOver={(e) => e.target.style.color = '#ff8c00'}
          onMouseOut={(e) => e.target.style.color = '#fff'}>
            +7 (708) 929-29-85
          </div>
          <div style={{
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            background: 'rgba(255, 140, 0, 0.1)'
          }}
          onMouseOver={(e) => e.target.style.color = '#ff8c00'}
          onMouseOut={(e) => e.target.style.color = '#fff'}>
            +7 (778) 678-90-36
          </div>
          <div style={{
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            background: 'rgba(255, 140, 0, 0.1)'
          }}
          onMouseOver={(e) => e.target.style.color = '#ff8c00'}
          onMouseOut={(e) => e.target.style.color = '#fff'}>
            info@farmmedex.kz
          </div>
          <div style={{
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            background: 'rgba(255, 140, 0, 0.1)'
          }}>
            <a 
              href="https://farmmedex.kz/" 
              target="_blank" 
              rel="noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.color = '#ff8c00'}
              onMouseOut={(e) => e.target.style.color = '#fff'}
            >
              farmmedex.kz
            </a>
          </div>
          <div style={{
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            padding: '5px 10px',
            borderRadius: '5px',
            background: 'rgba(255, 140, 0, 0.1)',
            fontSize: '0.9rem'
          }}
          onMouseOver={(e) => e.target.style.color = '#ff8c00'}
          onMouseOut={(e) => e.target.style.color = '#fff'}>
            Казахстан, г. Алматы, улица Басенова 27А, 050060
          </div>
        </div>
      </div>

      {/* Модальное окно с выбором действий */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#1a1a1a',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(255,140,0,0.3)',
            maxWidth: '500px',
            width: '90%',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: '#fff', 
              marginBottom: '20px',
              fontFamily: 'Georgia, serif',
              fontSize: '1.8rem'
            }}>
              Свяжитесь с нами
            </h3>
            <p style={{ 
              color: '#e0e0e0', 
              marginBottom: '30px',
              fontSize: '1.1rem'
            }}>
              Выберите удобный способ связи для получения консультации и бесплатной диагностики вашей теплицы.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <a
                  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@farmmedex.kz&su=Консультация по системе AgroFarm&body=Здравствуйте! Меня интересует система AgroFarm для тепличного хозяйства. Хотел бы получить консультацию и бесплатную диагностику.', '_blank')}
                  style={{
                    background: 'linear-gradient(135deg, #ff8c00, #ff6600)',
                    border: 'none',
                    color: '#fff',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 140, 0, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Написать на почту
                </a>
                <button
                  onClick={() => window.open('https://wa.me/77089292985?text=Здравствуйте! Меня интересует система AgroFarm для тепличного хозяйства. Хотел бы получить консультацию и бесплатную диагностику.', '_blank')}
                  style={{
                    background: 'linear-gradient(135deg, #25d366, #128c7e)',
                    border: 'none',
                    color: '#fff',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  💬 Написать в WhatsApp
                </button>
              </div>
              
              <button
                onClick={handleRegistrationRedirect}
                style={{
                  background: 'linear-gradient(135deg, #6f42c1, #e83e8c)',
                  border: 'none',
                  color: '#fff',
                  padding: '15px 40px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  marginBottom: '20px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(111, 66, 193, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🌐 Зарегистрироваться на сайте
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: '1px solid #555',
                  color: '#fff',
                  padding: '12px 25px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = '#ff8c00';
                  e.target.style.color = '#ff8c00';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = '#555';
                  e.target.style.color = '#fff';
                }}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
            50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
};

export default AgroFarmLanding;