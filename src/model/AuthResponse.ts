export default interface AuthResponse {
  accessToken: string;
  accessTokenExpiresAt: string;
  refreshToken: string;
  refreshTokenExpiresAt: string;
  user: User | null;
}
interface User {
  id: number;
  username: string;
  scope: string;
  region: string;
  userId: number | null;
  agentId: number | null;
  mobile: string;
  fullName: string;
  email: string;
}
