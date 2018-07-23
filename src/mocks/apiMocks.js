import { professionalMocks, servicesMocks, clientsMocks } from "./mocks";

export const returnProfessionals = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(professionalMocks);
    }, 100);
  });

export const returnServices = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(servicesMocks);
    }, 200);
  });

export const returnClients = clientName => {
  if (!clientName) {
    clientName = "";
  }
  const filteredClients = clientsMocks.filter(e =>
    e.name.toUpperCase().includes(clientName.toUpperCase())
  );
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(filteredClients);
    }, 300);
  });
};
