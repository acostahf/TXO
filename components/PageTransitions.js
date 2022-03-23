import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MainComponent = styled.div`
  &.page-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
  }
  &.page-exit {
    ~ .wipe {
      transform: translateY(100%);
    }
  }
  &.page-exit-active {
    ~ .wipe {
      transform: translateY(0);
      transition: transform 500ms ease;
    }
  }
  &.page-enter-done {
    ~ .wipe {
      transform: translateY(-100%);
      transition: transform 500ms ease;
    }
  }
`;
const Wipe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  transform: translateY(100%);
  background-color: #5D8D10;
`;

const PageTransitions = ({ children, route }) => {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition
          component={null}
          key={route}
          classNames="page"
          timeout={600}
        >
          <MainComponent>{children}</MainComponent>
        </CSSTransition>
      </TransitionGroup>
      <Wipe className="wipe" />
    </>
  );
};

export default PageTransitions;
