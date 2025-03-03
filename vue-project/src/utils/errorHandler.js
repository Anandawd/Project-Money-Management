export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export const handleApiError = (error) => {
  if (error.response) {
    return error.response.data.message || "Terjadi kesalahan pada server";
  }
  return "Tidak dapat terhubung ke server";
};
