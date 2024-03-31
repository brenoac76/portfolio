import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Estou no caminho para me tornar um desenvolvedor fullstack Java e estou
      animado com o meu potencial. Estudar na Ebac está me proporcionando as
      bases sólidas necessárias para alcançar meus objetivos. Estou comprometido
      em aprender e crescer, e sei que estou preparado para enfrentar os
      desafios e triunfar nesta jornada rumo ao sucesso.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=brenoac76&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=brenoac76&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
