import { Container } from '../components/Container';
import { PageSection } from '../components/PageSection';
import img from '../assets/img/no-products-yet.png';

export const NotYet: React.FC = () => {
  const myStyle = {
    width: '100%',
    'max-width': '320px',
  };

  return (
    <Container>
      <PageSection>
        <h1 className="title">Sorry, no products here yet</h1>
        <img
          src={img}
          alt="No products yet"
          style={myStyle}
        />
      </PageSection>
    </Container>
  );
};
