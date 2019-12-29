import Data from './Data';

export default interface User extends Data {
  token: string | null;
  expiryDate: string | null;
  fullname: string | null;
  userId: number;
  role: string | null;
  accountType: string | null;
  accountRulesDescription: string | null;
  agentCeaSalespersonNo: string | null;
  agentSubscription: string | null;
  agentPhoto: string | null;
  agency: string | null;
  agencyCeaLicenseNo: string | null;
  agencyLogo: string | null;
  mobile: string | null;
  email: string | null;
}
