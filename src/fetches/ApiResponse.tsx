
type ApiResponse<T> = {
    message: string,
    success: boolean,
    data: T
  }

// export const DriverSchema = DriverSchema.pick({
//     user_id: true,
//     license_number: true,
//     license_issue: true,
//     license_exp: true,
//   });

export default ApiResponse;