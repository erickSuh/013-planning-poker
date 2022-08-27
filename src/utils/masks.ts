export const maskCnpj = (cnpj: string) => {
  if (!cnpj) return cnpj;

  let formatted = cnpj.replace(/\D/g, '');
  formatted = formatted.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/g, '$1.$2.$3/$4-$5');
  formatted = formatted.replace(/^(\d{2})(\d{3})(\d{3})(\d)/g, '$1.$2.$3/$4');
  formatted = formatted.replace(/^(\d{2})(\d{3})(\d)/g, '$1.$2.$3');
  formatted = formatted.replace(/^(\d{2})(\d)/g, '$1.$2');
  return formatted;
};

export const maskPhone = (phone: string) => {
  if (!phone) return phone;
  let formatted = phone.replace(/\D/g, '');
  formatted = formatted.replace(/^(\d{2})(\d)/g, '($1) $2');
  formatted = formatted.replace(/(\d)(\d{4})$/, '$1-$2');
  return formatted;
};

export const maskAgency = (agency: string) => {
  if (!agency) return agency;
  let formatted = agency.replace(/\D/g, '');
  formatted = formatted.replace(/^(\d{3})(\d)/g, '$1-$2');
  return formatted;
};

export const maskAccount = (account: string) => {
  if (!account) return account;
  let formatted = account.replace(/\D/g, '');
  formatted = formatted.replace(/^(\d{2})(\d{3})(\d)/g, '$1.$2-$3');
  formatted = formatted.replace(/^(\d{2})(\d)/g, '$1.$2');
  return formatted;
};
