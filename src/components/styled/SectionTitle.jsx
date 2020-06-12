import styled from 'styled-components';

const SectionTitle = styled.section`
  max-width: 100vw;

  &.black-bg {
    background: #000;
    .section-subtitle {
      color: #bdbdbd;
    }
  }

  .separator {
    background-color: #000;
    display: flex;
    justify-content: center;
    height: 4px;
    width: 86px;
    margin: 0 auto 24px;

    &.orange {
      background-color: #bf9000;
    }
  }

  .section-title {
    color: #bf9000;
    font-weight: bold;
  }

  .section-subtitle {
    color: #000;
    max-width: 1024px;
    margin: 24px auto 48px;
    font-weight: 400;
  }
`;

export default SectionTitle;
