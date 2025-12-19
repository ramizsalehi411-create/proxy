function FindProxyForURL(url, host) {
  if (
    shExpMatch(host, "*.pubgmobile.com") ||
    shExpMatch(host, "*.tencentgames.com") ||
    shExpMatch(host, "*.igamecj.com") ||
    shExpMatch(host, "*.qcloud.com")
  ) {
    return "PROXY geo.iproyal.com:12321";
  }
  return "DIRECT";
}
