const faker = require('faker/locale/es');
const _ = require('lodash');

const generateData = () => ({
  patients: _.times(10, (index) => ({
    id: index,
    avatar: faker.image.avatar(),
    prefix: faker.name.prefix,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.gender(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.country(),
    timezone: faker.address.timeZone(),
    lang: faker.random.locale(),
  })),
  appointments: _.times(3, (index) => ({
    id: index,
    patientId: faker.random.number({ min: 1, max: 10 }),
    subject: faker.random.words(),
    location: faker.address.direction(),
    description: faker.random.words(100),
    status: faker.random.arrayElement(['accepted', 'pending', 'cancelled']),
  })),
  diagnoses: _.times(4, (index) => ({
    id: index,
    name: faker.random.words(),
    patientId: faker.random.number({ min: 1, max: 10 }),
    startDate: faker.date.past(),
    endDate: faker.random.arrayElement([
      null,
      faker.date.soon(),
      faker.date.recent(),
      faker.date.future(),
    ]),
    details: faker.random.words(100),
    severity: faker.random.arrayElement(['critical', 'high', 'medium', 'low']),
  })),
  tests: _.times(20, (index) => ({
    id: index,
    patientId: faker.random.number({ min: 1, max: 10 }),
  })),
  /**
   * TODO: Candidate to be implemented by alumni
   */
  health: _.times(1, (index) => ({
    id: index,
    patientId: faker.random.number({ min: 1, max: 10 }),
  })),
  /**
   * END-TODO
   */
});

module.exports = generateData;
