# Mobile IMC Calculator

Este projeto é um aplicativo React Native que calcula o Índice de Massa Corporal (IMC) com base na altura e peso fornecidos pelo usuário. O aplicativo apresenta uma interface simples e intuitiva, permitindo que os usuários insiram seus dados e visualizem o resultado do IMC, juntamente com a classificação correspondente.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de arquivos:

```
mobile-imc
├── src
│   ├── components
│   │   └── IMCCalculator.js       # Componente responsável pela lógica de cálculo do IMC e renderização da interface.
│   ├── styles
│   │   └── styles.js               # Define os estilos utilizados no aplicativo.
│   └── utils
│       └── imcCalculations.js      # Contém funções utilitárias para calcular o IMC.
├── App.js                           # Ponto de entrada do aplicativo.
├── package.json                     # Configuração do npm, incluindo dependências e scripts.
├── app.json                         # Configurações específicas do aplicativo, como nome e versão.
├── babel.config.js                  # Configuração do Babel para transpilar o código JavaScript.
└── README.md                        # Documentação do projeto.
```

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/mobile-imc.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd mobile-imc
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Execute o aplicativo:
   ```
   npm start
   ```

## Uso

1. Abra o aplicativo em seu dispositivo ou emulador.
2. Insira seu peso e altura nos campos correspondentes.
3. Clique no botão "Calcular" para obter seu IMC e a classificação correspondente.

## Contribuição

Sinta-se à vontade para fazer fork deste repositório e enviar pull requests com melhorias ou correções.