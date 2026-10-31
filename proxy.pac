function FindProxyForURL(url, host) {
  // فقط پابجی و بازی ها از پروکسی فرانسه بره، بقیه اینترنت مستقیم
  if (
      shExpMatch(host, "*pubg*") ||
      shExpMatch(host, "*pubgm*") ||
      shExpMatch(host, "*tencent*") ||
      shExpMatch(host, "*proximabeta*") ||
      shExpMatch(host, "*igame*") ||
      shExpMatch(host, "*qcloud*")
     ) {
    return "PROXY geo.iproyal.com:11200";
  }
  // بقیه سایت ها مثل یوتیوب، گوگل مستقیم
  return "DIRECT";
}