require('jest-fetch-mock').enableMocks();

jest.mock('react-i18next', () => ({
  translate: () => (Component) => (props) => (
    <Component t={() => ''} {...props} />
  ),
  useTranslation: () => {
    const useMock = [(k) => k, {}];
    useMock.t = (k) => k;
    useMock.i18n = {};
    return useMock;
  },
}));
