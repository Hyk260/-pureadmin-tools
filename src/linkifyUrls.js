/**
 * 匹配字符串中的 URL 的正则表达式。
 * 匹配以 http:// 或 https:// 开头的 URL，包括 www 和 localhost。
 * 支持 URL 路径中的各种字符。
 */
const urlRegex = () =>
  /((?<!\+)https?:\/\/(?:www\.)?(?:[-\w.]+?[.@][a-zA-Z\d]{2,}|localhost)(?:[-\w.:%+~#*$!?&/=@]*?(?:,(?!\s))*?)*)/g;

/**
 * 将 URL 转换为 HTML 链接的函数。
 * @param {string} href - 要链接的 URL。
 * @param {object} options - 链接的附加选项。
 * @returns {string} - HTML 链接元素。
 */
const linkify = (href, options) => {
  return `<a href="${href}" class="linkUrl" target="_blank">${href}</a>`;
};
/**
 * 检查 URL 是否被截断。
 * @param {string} url - 要检查的 URL。
 * @param {string} peek - URL 后的下一个字符。
 * @returns {boolean} - 如果 URL 被截断则返回 true，否则返回 false。
 */
const isTruncated = (url, peek) => url.endsWith("...") || peek.startsWith("…");

/**
 * 将字符串中的 URL 转换为链接的函数。
 * @param {string} string - 要处理的字符串。
 * @param {object} options - 链接的附加选项。
 * @returns {string} - 处理后的字符串。
 */
const getAsString = (string, options) => {
  return string.replace(urlRegex(), (url, _, offset) => {
    return isTruncated(url, string.charAt(offset + url.length)) ? url : linkify(url, options);
  });
};

export function linkifyUrls(string, options) {
  return getAsString(string, options);
}
