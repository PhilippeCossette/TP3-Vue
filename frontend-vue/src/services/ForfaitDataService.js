import http from "../http-common";
class ForfaitDataService {
  getAll() {
    return http.get("/forfaits");
  }

  create(data) {
    return http.post("/forfaits", data);
  }

  get(id) {
    return http.get(`/forfaits/${id}`);
  }

  update(id, data) {
    return http.put(`/forfaits/${id}`, data);
  }

  delete(id) {
    return http.delete(`/forfaits/${id}`);
  }
}
export default new ForfaitDataService();
