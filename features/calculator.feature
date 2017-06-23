# language: pt
Funcionalidade: Crud de usuário
    Contexto: Gestão de usuário


Cenário: Adição
Dado que eu adicione 50
E que eu adicione 70 
Quando eu solicitar a soma dos números
Então receberei o valor 120

Cenário: Adição com número negativo
Dado que eu adicione 50
E que eu adicione -70 
Quando eu solicitar a soma dos números
Então receberei o valor -20