import api from './api';

export const createSession = async (login, senha) => {
  try {
    const response = await api.post("/user/login", { data: { "login": login, "senha": senha } })

    return response;
  } catch (e) { 
    return e.response
   }
};

export const getLembrete = async (login) => {
  return await api.get(`/user/lembrete/${login}`);
};

export const userLogout = async (id) => {
  try {
    const response = await api.post(`/user/logout/${id}`);

    return response;
  } catch (e) { return e.response }
};

export const getUsers = async () => {
  try {
    const response = await api.get(`/user`,
      {
        headers: {
          'Authorization': localStorage.getItem("tokenAdm"),
          'Content-Type': "Application/json"
        }
      });
    return response
  } catch (e) { throw new Error(e) }
};

export const getUser = async (id) => {
  try {
    const response = await api.get(`/user/${id}`,
      {
        headers: {
          'Authorization': localStorage.getItem("tokenAdm"),
          'Content-Type': "Application/json"
        }
      });
    return response
  } catch (e) { throw new Error(e) }
};

export const createUser = async (nome, login, senha, email) => {
  try {
    const response = await api.post(`/user`, { data: { nome, login, senha, email } },
      {
        headers: {
          'Authorization': localStorage.getItem("tokenAdm"),
          'Content-Type': "Application/json"
        }
      });
    return response
  } catch (e) { throw new Error(e) }
};

export const updateUser = async (id, nome, senha) => {
  try {
    const response = await api.patch(`/user/update/${id}`, { data: { nome, senha } },
      {
        headers: {
          'Authorization': localStorage.getItem("tokenAdm"),
          'Content-Type': "Application/json"
        }
      });
    return response
  } catch (e) { throw new Error(e) }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/user/delete/${id}`,
      {
        headers: {
          'Authorization': localStorage.getItem("tokenAdm"),
          'Content-Type': "Application/json"
        }
      });

    return response
  } catch (e) { throw new Error(e) }
};

export const searchUser = async (nome) => {
  try {
    const response = await api.post(`/user/search`, { data: { nome } },
      {
        headers: {
          'Authorization': localStorage.getItem("tokenAdm"),
          'Content-Type': "Application/json"
        }
      });
    return response
  } catch (e) { return e.response.data }
};
