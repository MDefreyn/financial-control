import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pizza</td>
            <td className='withdraw'>-R$100</td>
            <td>Lazer</td>
            <td>12/07/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>-R$2.100</td>
            <td>Despesa</td>
            <td>10/07/2022</td>
          </tr>
          <tr>
            <td>Sanepar</td>
            <td className='withdraw'>-R$100</td>
            <td>Despesa</td>
            <td>10/07/2022</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td className='withdraw'>-R$200</td>
            <td>Despesa</td>
            <td>10/07/2022</td>
          </tr>
          <tr>
            <td>Copel</td>
            <td className='withdraw'>-R$450</td>
            <td>Despesa</td>
            <td>09/07/2022</td>
          </tr>
          <tr>
            <td>Thor Love and Thunder</td>
            <td className='withdraw'>-R$150</td>
            <td>Lazer</td>
            <td>06/07/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de aplicação</td>
            <td className='deposit'>R$5.000</td>
            <td>Desenvolvimento</td>
            <td>05/07/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}