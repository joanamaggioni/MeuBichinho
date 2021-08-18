import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Sidebar } from '../../components/Sidebar';
import { Container, Main, MoreInfoDiv, Title } from './styles';

export function LoginPage() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Title>Login</Title>
        <Input label="Email" type="email" />
        <Input label="Senha" type="Password" />
        <Button text="Entrar" />
        <MoreInfoDiv>
          <a href="/password_reset">Esqueceu a senha?</a>
          <a href="/register">Não possuo cadastro</a>
        </MoreInfoDiv>
      </Main>
    </Container>
  );
}
