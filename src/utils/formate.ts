export const priceFromatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  });
  
  export const percentFromatterVariacaoCard = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
  
  export const percentFromatterDefault = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  
  
  
  export const decimalFromatter = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    currency: "BRL",
    maximumFractionDigits: 2,
  });
  
  export const decimalFromatterOneDigit = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
  
  export const DateFormatShort = new Intl.DateTimeFormat("pt-BR", {
    timeZone: 'America/Porto_Velho',
    dateStyle: 'short',
    // dateStyle:{}
  });
  
  export const DateFormatWeekday = new Intl.DateTimeFormat("pt-BR", {
    weekday: 'long'
  });
  
  export const DateFormatMesAndYear = new Intl.DateTimeFormat("pt-BR", {
    month: 'long',
    year: 'numeric',
    timeZone: "UTC",
    // timeZone: 'America/Porto_velho'
  });