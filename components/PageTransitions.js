import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MainComponent = styled.div``;

const PageTransitions = ({ children, route }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        component={null}
        key={route}
        classNames="page"
        timeout={1000}
      >
        <MainComponent>{children}</MainComponent>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransitions;
