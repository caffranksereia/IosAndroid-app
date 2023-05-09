#Projeto da Health&Tasty

estrutura do projeto:
No src fica todos os codigos dentro dessa pasta e dentro delas ficam as seguintes pastas: - components
-config
-context
-screen
-services
-store
-styled
-utils

    Essas sao as pastas que cotem no src, logo a baixo tem as explicacoes o que elas sao e o que fazer com cada uma:
        - components:
            Ficam os components aonde fica a logica  da aplicacao logica do negocio e as estilizacao e onde fica qualquer state que precisa ser mantido as vezes a logica de negocio pode tornar muito complexo nesse caso tem que ser separado dos components como uma arquivo so para a logica.
        - screens:
            Aonde tem as nossas paginas da aplicacao e as rotas .
            *obs: cada components tem que ter a sua screens para definir a hierarquia entre ela, onde paginas pode importar um component so para exibir e fazer apenas isso e nem precisa da logica de negocio.
        - styled:
            fica a estilizacao da components ou da screen mas e preferivel usar no components, tudo que voce for mexer com estilizacao salva nesta pagina e fica o tema da aplicacao e os temas do light e dark do app.
        - store:
            fica as rotas da pagina toda rota que for criar novas salva na pasta rotas e
        - services:
            Aqui fica os comunicao de alguns endpoints no caso api ou pode comunicao com  banco de dados pensa como uma configura de api de comunicacao.
            -config fica responsavel pela configurascao no projeto, por exemplo
                - routers:
                    Configuracao e juncao de todas as rotas do projeto
        - utils:
            ficam a logica de utilizacao que podem ser usadas como formatar datas etc..

# como configurar o projeto

instala o NODE e depois o YARN
-NODE tem que ser na versao 18 pra cima
link para baixar o node https://nodejs.org/en
link YARN https://yarnpkg.com/getting-started/install

assim que dar um git clone digite: - yarn install que ira instalar todo os pacotes do react native.
para rodar digita no cmd:
yarn dev que ira aparecer issa imagem no terminal:
![Alt text](Home/Picture/Screenshots/ Screenshot from 2023-05-09 13-44-19.png ?raw=true "Optional Title")
Screenshot from 2023-05-09 13-44-19.png
para instalar alguma coisa digite esse comando:
yarn add _something_

Cada dev tem a sua forma de configurar o projeto em si mas a maioria usa essas configuracao:
.editoconfig, husky, .eslintrc, .prettier.
peco que instale todos eles pra manter o codigo organizado e limpo.

criado Cafffranksereia
